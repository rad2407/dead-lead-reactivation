import React, { useState } from 'react';
import { 
  Clock, 
  Trophy, 
  Search, 
  UploadCloud, 
  PlayCircle, 
  Eye, 
  AlertTriangle, 
  ShieldCheck 
} from 'lucide-react';
import Logo from '../components/Logo';

const SchedulePage: React.FC = () => {
  const [qualified, setQualified] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      <nav className="border-b border-white/10 py-4 px-6 bg-slate-950/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-green-600 uppercase">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Challenge Session Active
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            🗓️ LOCK IN YOUR <span className="text-sky-400">72-HOUR REVENUE RECOVERY.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-medium">
            Pick a time below to activate your Dead Lead Reactivation Campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Qualifier Gate + Calendar */}
          <div className="lg:col-span-7 space-y-4">
            {/* Checkbox Hard Stop */}
            <div className={`rounded-[2rem] border-2 p-8 transition-all duration-300 ${qualified ? 'bg-sky-500/10 border-sky-400' : 'bg-slate-900 border-sky-500/30'}`}>
              <div className="flex items-start gap-5 cursor-pointer" onClick={() => setQualified(!qualified)}>
                <div className={`mt-1 w-6 h-6 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${qualified ? 'bg-sky-500 border-sky-500' : 'border-sky-400/50 bg-transparent'}`}>
                  {qualified && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                </div>
                <div>
                  <p className={`font-black text-base leading-snug ${qualified ? 'text-sky-300' : 'text-slate-200'}`}>
                    I am an Alpha owner with 100+ past leads. I understand I have uncollected revenue in my dead lead list — and I'm ready to activate it on this call.
                  </p>
                  {!qualified && <p className="text-[11px] text-sky-400/70 font-bold mt-2 uppercase tracking-wider">↑ Check this box to unlock your booking slot</p>}
                  {qualified && <p className="text-[11px] text-sky-400 font-bold mt-2 uppercase tracking-wider">✓ Confirmed — your calendar is unlocked below</p>}
                </div>
              </div>
            </div>

            {/* Calendar — revealed after checkbox */}
            <div className={`bg-slate-900 rounded-[2rem] shadow-xl border border-white/10 overflow-hidden transition-all duration-500 ${qualified ? 'opacity-100' : 'opacity-30 pointer-events-none select-none'}`}>
              <div className="p-1 min-h-[600px] w-full bg-white relative">
                <iframe
                  src="https://link.digitalfootprintsolutions.com/widget/booking/Zlj3aYfrELKgdqD8D9Jo"
                  style={{ width: '100%', height: '700px', border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  id="Zlj3aYfrELKgdqD8D9Jo_1771467338492"
                  title="72-Hour Revenue Recovery"
                ></iframe>
                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                  <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.2em]">Secure Booking Terminal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Game Plan */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-950 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Clock className="w-32 h-32 text-sky-400" />
              </div>

              <h3 className="text-2xl font-black mb-8 uppercase tracking-tight text-sky-400 flex items-center gap-3">
                <Trophy className="w-6 h-6" /> THE 72-HOUR GAME PLAN
              </h3>

              <div className="space-y-10 relative z-10">
                <div className="space-y-6">
                  <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">On this 20-minute call, we will:</p>
                  
                  {[
                    { icon: <Search className="w-5 h-5 text-sky-400" />, title: "AUDIT", desc: "Look at your current lead list (CSV or CRM)." },
                    { icon: <UploadCloud className="w-5 h-5 text-sky-400" />, title: "IMPORT", desc: "Upload your \"Dead Leads\" into the Revenue Accelerator." },
                    { icon: <PlayCircle className="w-5 h-5 text-sky-400" />, title: "LAUNCH", desc: "Hit the \"Go\" button on the SMS Reactivation Campaign." },
                    { icon: <Eye className="w-5 h-5 text-sky-400" />, title: "WATCH", desc: "See live replies come in within minutes." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 mt-1">{step.icon}</div>
                      <div>
                        <h4 className="font-black text-white text-sm tracking-widest mb-1">{step.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-red-500 font-black text-xs uppercase tracking-widest mb-2">
                    <AlertTriangle className="w-4 h-4" /> Requirement
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    You must have a list of at least <span className="text-white font-bold underline">100 past leads</span> (estimates sent but not sold) to qualify for this challenge.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-white/10 shadow-sm flex items-center gap-6">
              <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-8 h-8 text-sky-400" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Confirmation</p>
                <p className="text-sm font-bold text-slate-300 leading-tight">Once booked, your 72-hour clock starts. You'll get a confirmation with everything you need.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] border-t border-white/10 mt-12">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        Digital Footprint Solutions • The Launch Terminal
      </footer>
    </div>
  );
};

export default SchedulePage;