import React, { useState, useEffect, useRef } from 'react';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import SchedulePage from './pages/SchedulePage';
import SOPPage from './pages/SOPPage';
import { PageState, ASSETS } from './constants';

const getInitialPage = (): PageState => {
  const path = window.location.pathname;
  switch (path) {
    case '/sop': return PageState.SOP;
    case '/thank-you': return PageState.THANK_YOU;
    case '/schedule': return PageState.SCHEDULE;
    default: return PageState.LANDING;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState<PageState>(getInitialPage());

  // Load external form scripts once
  useEffect(() => {
    const script = document.createElement('script');
    script.src = ASSETS.GHL_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Track whether the form iframe has been seen at full size
  const formLoadedRef = useRef(false);
  // Guard: don't allow height-drop redirect until iframe has been stable for 6s
  const allowHeightRedirectRef = useRef(false);
  // Guard: track current page so we only redirect from landing
  const currentPageRef = useRef<PageState>(getInitialPage());

  useEffect(() => {
    const timer = setTimeout(() => { allowHeightRedirectRef.current = true; }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for GHL form submission postMessage and navigate to Thank You page
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data) return;

      // Log ALL non-null messages so we can see what GHL is sending
      console.log('[DLR] msg on page=' + currentPageRef.current + ':', JSON.stringify(data));

      // Only act when the user is on the landing page
      if (currentPageRef.current !== PageState.LANDING) return;

      // Explicit GHL submission events
      // NOTE: set-sticky-contacts is NOT a submission — GHL fires it on load for returning visitors
      const isExplicitSubmission =
        data.type === 'form_submitted' ||
        data.type === 'hl_form_submitted' ||
        (typeof data === 'string' && data === 'form_submitted');

      if (isExplicitSubmission) {
        navigate(PageState.THANK_YOU);
        return;
      }

      // Fallback: detect submission via iframe height drop (form ~500px → thank you ~174px)
      // Only fires after 6s to avoid false positives from iframe initial load flicker
      if (typeof data === 'string' && data.startsWith('[iFrameSizer]')) {
        const parts = data.split(':');
        if (parts.length >= 2) {
          const height = parseInt(parts[1]);
          if (!isNaN(height)) {
            if (height >= 400) {
              formLoadedRef.current = true;
            } else if (height < 180 && formLoadedRef.current && allowHeightRedirectRef.current) {
              formLoadedRef.current = false;
              navigate(PageState.THANK_YOU);
            }
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    console.log('[DLR v5] GHL listener active');
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const navigate = (page: PageState) => {
    if (page === PageState.THANK_YOU) {
      sessionStorage.setItem('dlr_submitted', '1');
    }
    currentPageRef.current = page;
    const path = page === PageState.LANDING ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getInitialPage());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case PageState.LANDING:
        return <LandingPage onNavigate={navigate} />;
      case PageState.THANK_YOU:
        return <ThankYouPage onNavigate={navigate} />;
      case PageState.SCHEDULE:
        return <SchedulePage />;
      case PageState.SOP:
        return <SOPPage onNavigate={navigate} />;
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="antialiased text-slate-900 bg-white">
      {renderPage()}
    </div>
  );
};

export default App;