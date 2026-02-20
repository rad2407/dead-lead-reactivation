import React, { useState, useEffect, useRef } from 'react';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import SchedulePage from './pages/SchedulePage';
import { PageState, ASSETS } from './constants';

const App = () => {
  const [currentPage, setCurrentPage] = useState<PageState>(PageState.LANDING);

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

  // Listen for GHL form submission postMessage and navigate to Thank You page
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data) return;

      // Explicit GHL submission events
      const isExplicitSubmission =
        data.type === 'form_submitted' ||
        data.type === 'hl_form_submitted' ||
        (typeof data === 'string' && data === 'form_submitted') ||
        (Array.isArray(data) && data[0] === 'set-sticky-contacts');

      if (isExplicitSubmission) {
        navigate(PageState.THANK_YOU);
        return;
      }

      // Fallback: detect submission via iframe height drop (form ~500px → thank you ~174px)
      if (typeof data === 'string' && data.startsWith('[iFrameSizer]')) {
        const parts = data.split(':');
        if (parts.length >= 2) {
          const height = parseInt(parts[1]);
          if (!isNaN(height)) {
            if (height >= 400) {
              formLoadedRef.current = true;
            } else if (height < 250 && formLoadedRef.current) {
              formLoadedRef.current = false;
              navigate(PageState.THANK_YOU);
            }
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    console.log('[DLR v4] GHL listener active');
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const navigate = (page: PageState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case PageState.LANDING:
        return <LandingPage onNavigate={navigate} />;
      case PageState.THANK_YOU:
        return <ThankYouPage onNavigate={navigate} />;
      case PageState.SCHEDULE:
        return <SchedulePage />;
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