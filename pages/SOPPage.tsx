import React from 'react';
import { ChevronRight, Users, ShieldCheck } from 'lucide-react';
import Logo from '../components/Logo';
import { PageState } from '../constants';

interface SOPPageProps {
  onNavigate: (page: PageState) => void;
}

const SOPPage: React.FC<SOPPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-950">
      <nav className="border-b border-slate-200 py-4 px-6 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-sky-600 uppercase">
            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
            Dead Lead Reactivation SOP
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-12 px-6">
        <div className="text-center mb-10 space-y-3">
          <p className="text-[11px] font-black tracking-[0.3em] text-sky-600 uppercase">Your Free Resource</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
            The Dead Lead Reactivation <span className="text-sky-600">Standard Operating Procedure</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            The exact system contractors use to generate $2,000–$10,000 from leads they had already written off.
          </p>
        </div>

        {/* Gamma Embed */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden mb-10">
          <div className="w-full flex justify-center p-4">
            <iframe
              src="https://gamma.app/embed/srnhegzgfdjow9p"
              style={{ width: '700px', maxWidth: '100%', height: '450px', border: 'none' }}
              allow="fullscreen"
              title="STANDARD OPERATING PROCEDURE: Dead Lead Reactivation"
            ></iframe>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-950 rounded-[2rem] p-10 text-white text-center shadow-2xl">
          <p className="text-[11px] font-black tracking-[0.3em] text-sky-400 uppercase mb-4">Ready to Execute?</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
            Don't Just Read It. <span className="text-sky-400 italic">Run It.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            We'll launch your Dead Lead campaign live on a 15-minute call — and guarantee $2,000+ in potential revenue within 48 hours or you pay nothing.
          </p>
          <button
            onClick={() => onNavigate(PageState.SCHEDULE)}
            className="bg-orange-600 hover:bg-orange-500 text-white font-black text-xl py-6 px-12 rounded-2xl shadow-2xl inline-flex items-center gap-4 transition-transform active:scale-95 group shadow-orange-500/20"
          >
            🚀 Book My 48-Hour Challenge Call <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
            <div className="flex items-center gap-2"><Users className="w-4 h-4" /> Limited to 5 Spots this week</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Zero Risk. Zero Tech Hassle.</div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] border-t border-slate-200 mt-12">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        Digital Footprint Solutions • Dead Lead Reactivation
      </footer>
    </div>
  );
};

export default SOPPage;
