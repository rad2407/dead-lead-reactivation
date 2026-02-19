import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  TrendingDown, 
  ArrowRight, 
  Lock, 
  BarChart3 
} from 'lucide-react';
import Logo from '../components/Logo';
import BookMockup from '../components/BookMockup';
import { PageState, LINKS } from '../constants';

interface LandingPageProps {
  onNavigate: (page: PageState) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      <nav className="border-b border-slate-100 py-4 px-6 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center gap-6 text-[10px] font-black tracking-widest text-slate-400 uppercase">
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                SECURE SERVER ACCESS
            </div>
          </div>
        </div>
      </nav>

      <header className="pt-12 md:pt-16 pb-24 px-6 relative bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-100/20 blur-3xl -z-0"></div>
        
        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2 text-balance">
              <span className="text-sky-600 font-black uppercase tracking-[0.3em] text-[11px] italic">Standard Operating Procedure</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-950 leading-[0.9] italic text-balance">
                Dead Lead <br/>
                <span className="text-sky-600 not-italic uppercase font-sans">Reactivation</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-sky-500 pl-8 max-w-2xl">
              "How to Generate $2,000+ in Immediate Revenue from Old Leads (Without Spending $1 on Ads)"
            </p>

            <div className="space-y-6 pt-2">
              {[
                { icon: <CheckCircle2 className="w-6 h-6 text-sky-600" />, text: <span><strong>The "9-Word Weapon":</strong> The single text message that gets a 98% open rate and demands a reply.</span> },
                { icon: <CheckCircle2 className="w-6 h-6 text-sky-600" />, text: <span><strong>The Math:</strong> Why ignoring old leads is costing you $17,500/year in wasted ad spend.</span> },
                { icon: <CheckCircle2 className="w-6 h-6 text-sky-600" />, text: <span><strong>The Protocol:</strong> A step-by-step guide to launching this campaign in 20 minutes.</span> },
                { icon: <TrendingDown className="w-6 h-6 text-slate-400" />, text: <span className="text-slate-500 italic">No Ads Required. You already paid for these leads. Now let's cash them in.</span> },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start text-lg md:text-xl">
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <p className="text-slate-800 leading-tight">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Removed 'Skip to Content (Demo)' button */}
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-2xl relative w-full max-w-[440px]">
              <div className="bg-slate-950 p-8 text-center flex flex-col items-center">
                <BookMockup />
                <h3 className="text-base font-bold mt-8 text-white/90 uppercase tracking-widest">Where should I send your map?</h3>
              </div>
              
              <div className="p-2 min-h-[440px] bg-white">
                <iframe
                  src="https://link.digitalfootprintsolutions.com/widget/form/ukawrj8xBEEsOhWQnLMe"
                  style={{ width: '100%', height: '428px', border: 'none' }}
                  id="inline-ukawrj8xBEEsOhWQnLMe"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form 68"
                  data-height="428"
                  data-layout-iframe-id="inline-ukawrj8xBEEsOhWQnLMe"
                  data-form-id="ukawrj8xBEEsOhWQnLMe"
                  title="Form 68"
                ></iframe>
              </div>

              <div className="px-10 pb-10">
                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                  <Lock className="w-3 h-3 text-sky-600" /> 100% SECURE • INSTANT ACCESS
                </div>
              </div>
            </div>
          </div>
        </main>
      </header>

      {/* Math Section */}
      <section className="py-32 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none font-serif italic text-balance">
                The Most Expensive Lead is the One You <br className="hidden md:block"/> <span className="text-sky-600 not-italic font-sans">Already Paid For.</span>
              </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="text-xl text-slate-600 space-y-8 leading-relaxed">
                <p>If you are like most home service pros, you are obsessed with <span className="text-slate-950 font-black italic">"New."</span> New leads, new calls, new jobs.</p>
                <p className="bg-sky-50 border-l-4 border-sky-600 p-10 text-slate-900 italic rounded-r-3xl shadow-sm leading-relaxed">
                    "But what happens to the leads who don't buy immediately? They sit in your CRM gathering digital dust. <span className="text-sky-600 font-black not-italic underline decoration-2 underline-offset-4">You have a goldmine sitting in your 'Dead Lead' folder.</span>"
                </p>
                <p>In 2026, the business that wins isn't the one with the most leads. It's the one with the best follow-up.</p>
                <p className="text-3xl font-black text-slate-950 uppercase tracking-tighter pt-4">This guide is your map to waking them up.</p>
            </div>

            <div className="bg-slate-950 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-white/10">
                <div className="absolute -top-10 -right-10 opacity-[0.03]">
                    <BarChart3 className="w-64 h-64" />
                </div>
                <h3 className="text-xs font-black mb-12 uppercase tracking-[0.4em] text-sky-500">The Math of a "Dead Lead"</h3>
                <div className="grid grid-cols-2 gap-x-12 gap-y-12 mb-12 relative z-10">
                    {[
                        { val: "$50", label: "Avg Cost/Lead" },
                        { val: "500", label: "Leads/Year" },
                        { val: "30%", label: "Closing Rate" },
                        { val: "350", label: "Profit Gap" }
                    ].map((stat, i) => (
                        <div key={i} className="border-l border-white/10 pl-6">
                            <div className="text-4xl font-black font-serif italic mb-1">{stat.val}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
                        </div>
                    ))}
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 relative z-10">
                    <div className="text-sky-400 text-4xl font-black font-serif italic mb-2 tracking-tight text-balance">The Waste: $17,500</div>
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                      350 leads x $50 = $17,500 worth of inventory sitting on a shelf.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <Logo />
          <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
            Digital Footprint Solutions, Inc • 2026 Edition
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <a href={LINKS.PRIVACY} className="hover:text-sky-600 transition-colors">Privacy</a>
            <a href={LINKS.TERMS} className="hover:text-sky-600 transition-colors">Terms</a>
            <a href={LINKS.CONTACT} className="hover:text-sky-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;