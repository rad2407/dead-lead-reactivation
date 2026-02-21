import React, { useState, useRef } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
  Lock,
  BarChart3,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import Logo from '../components/Logo';
import { PageState, LINKS } from '../constants';

interface LandingPageProps {
  onNavigate: (page: PageState) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [showArrow, setShowArrow] = useState(false);
  const arrowTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleActivateCTA = () => {
    setShowArrow(true);
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (arrowTimer.current) clearTimeout(arrowTimer.current);
    arrowTimer.current = setTimeout(() => setShowArrow(false), 4000);
  };

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

      <header className="relative bg-slate-950 overflow-hidden">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Ambient glow — top right */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] opacity-[0.14] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0ea5e9, transparent 65%)' }}
        />
        {/* Ambient glow — bottom left */}
        <div
          className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] opacity-[0.06] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #38bdf8, transparent 65%)' }}
        />
        {/* 3D floating panel — top right depth layer */}
        <div
          className="absolute top-[6%] right-[3%] w-[360px] h-[240px] rounded-[2.5rem] pointer-events-none"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.025), rgba(14,165,233,0.04))',
            border: '1px solid rgba(255,255,255,0.045)',
            transform: 'perspective(900px) rotateY(-20deg) rotateX(7deg)',
          }}
        />
        {/* 3D floating panel — lower left depth layer */}
        <div
          className="absolute bottom-[18%] left-[1%] w-[200px] h-[130px] rounded-[1.5rem] pointer-events-none"
          style={{
            background: 'rgba(14,165,233,0.03)',
            border: '1px solid rgba(255,255,255,0.035)',
            transform: 'perspective(600px) rotateY(14deg) rotateX(-5deg)',
          }}
        />

        {/* Status badge */}
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-2 relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2.5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-[11px] font-black text-white/50 uppercase tracking-[0.25em]">Recovery System Active</span>
            <span className="text-white/20 px-1">|</span>
            <span className="text-[11px] font-black text-sky-400 uppercase tracking-[0.25em]">5 Alpha Spots This Week</span>
          </div>
        </div>

        {/* Main hero grid */}
        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 px-6 pt-10 pb-16">

          {/* Left: Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-sky-500 font-black uppercase tracking-[0.35em] text-[11px]">SOP — Dead Leads Reactivation Protocol</span>
              <h1
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white leading-[0.88] text-balance"
                style={{ textShadow: '0 2px 0 rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.3), 0 24px 48px rgba(0,0,0,0.15)' }}
              >
                The 72-Hour <br/>
                <span className="text-sky-400">Revenue<br /> Recovery.</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed border-l-4 border-sky-500 pl-8 max-w-2xl">
              If you have 100+ past leads sitting untouched in your database, you are not broke.{' '}
              <span className="text-white font-black">You are sitting on uncollected cash.</span>
            </p>

            <div className="space-y-5 pt-2">
              {[
                { icon: <CheckCircle2 className="w-5 h-5 text-sky-400" />, text: <span className="text-slate-200"><strong className="text-white">The Protocol:</strong> The exact SMS sequence that gets dead leads to respond within minutes — not days.</span> },
                { icon: <CheckCircle2 className="w-5 h-5 text-sky-400" />, text: <span className="text-slate-200"><strong className="text-white">The Math:</strong> Why your "dead" lead list is worth more than your next ad campaign.</span> },
                { icon: <CheckCircle2 className="w-5 h-5 text-sky-400" />, text: <span className="text-slate-200"><strong className="text-white">The Standard:</strong> We identify at least $2,000 in potential revenue within 72 hours — or we've wasted our time, not yours.</span> },
                { icon: <TrendingDown className="w-5 h-5 text-slate-600" />, text: <span className="text-slate-400 italic">No ads. No commissions. No tech headaches. You keep 100% of every dollar recovered.</span> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start text-base md:text-lg">
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <p className="leading-snug">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Hero CTA */}
            <div className="pt-4">
              <button
                onClick={handleActivateCTA}
                className="inline-flex items-center gap-3 text-white font-black text-lg uppercase tracking-[0.2em] px-12 py-5 rounded-2xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #FF7A47 0%, #FF6231 55%, #E8511F 100%)',
                  boxShadow: '0 8px 48px rgba(255,98,49,0.55), 0 2px 0 rgba(255,255,255,0.15) inset',
                }}
              >
                ACTIVATE MY 72-HOUR RECOVERY
              </button>
              <p className="text-slate-500 text-[11px] font-bold mt-3 uppercase tracking-[0.15em]">
                Zero commission · You keep 100% of the revenue · Requires 100+ leads
              </p>

              {/* Blinking arrow — points right on desktop, down on mobile */}
              {showArrow && (
                <div className="mt-5 flex items-center gap-2 text-sky-400">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] animate-pulse">
                    {/* Desktop label */}
                    <span className="hidden lg:inline">Your form is right here →</span>
                    {/* Mobile label */}
                    <span className="lg:hidden">Your form is below ↓</span>
                  </span>
                  {/* Desktop: right arrows */}
                  <div className="hidden lg:flex gap-0.5">
                    {([0, 1, 2] as const).map(i => (
                      <ChevronRight key={i} className="w-6 h-6 animate-bounce" style={{ animationDelay: `${i * 120}ms`, opacity: 1 - i * 0.25 }} />
                    ))}
                  </div>
                  {/* Mobile: down arrows */}
                  <div className="flex lg:hidden flex-col gap-0.5">
                    {([0, 1, 2] as const).map(i => (
                      <ChevronDown key={i} className="w-6 h-6 animate-bounce" style={{ animationDelay: `${i * 120}ms`, opacity: 1 - i * 0.25 }} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Form Card */}
          <div id="form" className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] pb-4 pr-4">
              {/* Stacked depth — layer 2 (furthest back) */}
              <div
                className="absolute inset-0 rounded-[2rem] translate-x-4 translate-y-4"
                style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.12)' }}
              />
              {/* Stacked depth — layer 1 */}
              <div
                className="absolute inset-0 rounded-[2rem] translate-x-2 translate-y-2"
                style={{ background: 'rgba(14,165,233,0.13)', border: '1px solid rgba(14,165,233,0.18)' }}
              />
            <div
              className="bg-white rounded-[2rem] overflow-hidden relative border-t-[3px] border-sky-400"
              style={{ boxShadow: '0 40px 120px -20px rgba(14,165,233,0.45), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.6)' }}
            >
              <div className="pt-5 px-2 pb-0 bg-white">
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
              <div className="px-8 pb-8 space-y-4">
                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                  <Lock className="w-3 h-3 text-sky-500" /> 100% Secure · Instant Access
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-center">
                  <p className="text-[11px] text-amber-800 font-bold leading-relaxed">
                    <span className="font-black uppercase tracking-wide">Note:</span> This protocol is specifically for established pros with 100+ past leads in their database.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </main>

        {/* Proof strip */}
        <div className="max-w-7xl mx-auto px-6 border-t border-white/[0.06] relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/[0.06]">
            {[
              { val: '85%+', label: 'Reach Rate' },
              { val: '12–18%', label: 'Response Rate' },
              { val: '5–10%', label: 'Re-Activation Rate' },
              { val: '$2k–$7.5k', label: 'Identified Revenue' },
              { val: '72 Hrs', label: 'Total Execution' },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-6 text-center">
                <div className="text-3xl md:text-4xl font-black text-white font-serif italic tracking-tight">{stat.val}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
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
                <p className="bg-sky-600 border-l-4 border-sky-400 p-10 text-white font-medium italic rounded-r-3xl shadow-lg leading-relaxed">
                    "But what happens to the leads who don't buy immediately? They sit in your CRM gathering digital dust. <span className="text-sky-200 font-black not-italic underline decoration-2 underline-offset-4">You have a goldmine sitting in your 'Dead Lead' folder.</span>"
                </p>
                <p>In 2026, the business that wins isn't the one with the most leads. It's the one with the best follow-up.</p>
                <p className="text-3xl font-black text-slate-950 uppercase tracking-tighter pt-4">This is your map to reclaiming lost revenue.</p>
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

      {/* Alpha Filter Section */}
      <section className="py-32 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-5 py-2.5 text-[11px] font-black text-red-600 uppercase tracking-[0.3em]">
              ⚠ Qualification Required
            </span>
          </div>

          <div className="text-center mb-14 space-y-5">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter leading-[0.92]">
              This Protocol Has One<br/><span className="text-sky-600">Hard Requirement.</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              If your database has fewer than 100 past leads, there is nothing to reactivate — we won't waste your time or ours. If you have the list, we have the protocol.
            </p>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              The execution takes exactly 72 hours. The commission is $0.00. The revenue is 100% yours.
            </p>
          </div>

          {/* Two requirement boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="bg-white rounded-3xl p-10 border-2 border-slate-200 text-center shadow-sm">
              <div className="text-6xl font-black text-sky-500 font-serif italic mb-3">100+</div>
              <div className="text-slate-900 font-black text-lg uppercase tracking-tight mb-2">Past Leads in Your Database</div>
              <div className="text-slate-500 text-sm leading-relaxed">Quotes, inquiries, estimates — any contact who didn't convert is a candidate for reactivation.</div>
            </div>
            <div className="bg-white rounded-3xl p-10 border-2 border-slate-200 text-center shadow-sm">
              <div className="text-6xl font-black text-sky-500 font-serif italic mb-3">12+</div>
              <div className="text-slate-900 font-black text-lg uppercase tracking-tight mb-2">Months in Operation</div>
              <div className="text-slate-500 text-sm leading-relaxed">You need a real lead history. Startups don't have a dead lead problem — only established pros do.</div>
            </div>
          </div>

          {/* Alpha Benchmarks dark card */}
          <div className="bg-slate-950 rounded-[2rem] p-10">
            <div className="text-center mb-8">
              <div className="text-sky-400 text-[11px] font-black uppercase tracking-[0.35em] mb-2">Alpha Protocol Benchmarks</div>
              <div className="text-white text-xl font-black">What the 72-Hour Execution Delivers</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {[
                { val: '85%+', label: 'Reach Rate', desc: 'Our AI actually gets through to their phones.' },
                { val: '12–18%', label: 'Response Rate', desc: 'Real people texting back and re-engaging.' },
                { val: '5–15%', label: 'Re-Activation Rate', desc: 'Dead leads now back in the pipeline or booked.' },
              ].map((stat, i) => (
                <div key={i} className="text-center border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl font-black text-white font-serif italic mb-1">{stat.val}</div>
                  <div className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                  <div className="text-slate-400 text-sm">{stat.desc}</div>
                </div>
              ))}
            </div>
            <div className="bg-sky-500/10 border border-sky-500/20 rounded-2xl p-6 text-center">
              <p className="text-white font-bold text-base leading-relaxed">
                Our 72-Hour Protocol typically identifies{' '}
                <span className="text-sky-400 font-black">$2,000 – $7,500</span>{' '}
                in immediate "found" revenue hiding in your existing database.{' '}
                <span className="text-slate-300">We don't guess — we execute.</span>
              </p>
            </div>

            {/* Mid-page CTA */}
            <div className="text-center mt-10">
              <button
                onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="inline-flex items-center gap-3 text-white font-black text-base uppercase tracking-[0.2em] px-12 py-5 rounded-2xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg, #FF7A47 0%, #FF6231 55%, #E8511F 100%)', boxShadow: '0 8px 48px rgba(255,98,49,0.55)' }}
              >
                SECURE MY 72-HOUR WINDOW
              </button>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] mt-4">
                Alpha spots limited this week · $0.00 commission · 100% execution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-28 px-6 bg-slate-950 relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Center glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.1] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #0ea5e9, transparent 70%)' }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Eyebrow */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-5 py-2.5 text-[11px] font-black text-sky-400 uppercase tracking-[0.3em]">
              ★ Alpha Case Study — Real Result
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Photo + Result Badge */}
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/knockdown-truck.jpg"
                  alt="Knockdown Pest Solutions branded truck"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-black/50 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-3">
                    <img src="/knockdown-logo.png" alt="Knockdown Pest Solutions" className="w-10 h-10 object-contain rounded-full bg-white p-0.5" />
                    <div>
                      <div className="text-white font-black text-sm tracking-wide leading-tight">KNOCKDOWN PEST SOLUTIONS</div>
                      <div className="text-sky-400 text-[11px] font-bold uppercase tracking-[0.2em] mt-0.5">Miami & Fort Lauderdale, FL</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating result badge */}
              <div
                className="absolute -top-5 -right-5 bg-sky-500 text-white rounded-2xl px-6 py-4 text-center"
                style={{ boxShadow: '0 8px 40px rgba(14,165,233,0.5)' }}
              >
                <div className="text-3xl font-black font-serif italic leading-none">$3,200</div>
                <div className="text-[10px] font-black uppercase tracking-[0.15em] opacity-90 mt-1">Identified in 72 Hours</div>
              </div>
            </div>

            {/* Right: Quote */}
            <div className="space-y-8">
              <h3
                className="text-2xl md:text-3xl font-black text-white leading-tight font-serif italic"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
              >
                "I thought my old lead list was a graveyard. Ray found $3,200 in 72 hours without me picking up the phone."
              </h3>

              <div className="border-l-4 border-sky-500 pl-8 space-y-4 text-slate-300 text-base leading-relaxed">
                <p>"I've been in the truck all summer. I had a list of about 180 people who called for one-time ant or wasp sprays last season, but I never had the time to follow up and get them on a quarterly plan. I honestly thought those leads were dead.</p>
                <p>Ray ran his 72-hour 'Revenue Recovery' protocol on Tuesday. By Thursday night, we had 14 responses. We booked 5 new quarterly service contracts and 2 termite inspections immediately.</p>
                <p>That's over $3,200 in annual contract value identified in three days — and I didn't have to spend a dime on new Google Ads or cold calling. <span className="text-white font-bold">If you have a database and you aren't running this, you're literally throwing money away."</span></p>
              </div>

              <div className="flex items-center gap-5 pt-2">
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 p-2.5">
                  <img src="/knockdown-logo.png" alt="Knockdown Pest Solutions logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-white font-black text-base">Jonathan & Ricky Plummer</div>
                  <div className="text-sky-400 text-sm font-bold">Knockdown Pest Solutions</div>
                  <div className="text-slate-500 text-[11px] uppercase tracking-[0.2em] font-bold mt-0.5">Miami & Fort Lauderdale, FL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Stand CTA */}
      <section className="py-32 px-6 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-[0.12] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #0ea5e9, transparent 65%)' }}
        />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Eyebrow */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2.5 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">
              The 72-Hour Decision
            </span>
          </div>

          {/* Contrast headline */}
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-10 text-balance">
            Revenue Rot Is Expensive.<br/>
            <span className="text-sky-400">The Protocol Is Free.</span>
          </h2>

          {/* Body */}
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-5">
            Your database is not a graveyard — it's a dormant pipeline. Every day without a reactivation protocol is revenue quietly expiring in your CRM while you spend more on ads chasing leads you've already paid for once.
          </p>
          <p className="text-xl text-white font-bold leading-relaxed max-w-xl mx-auto mb-16">
            The 72-Hour window opens once. We execute. You collect. $0.00 commission — guaranteed.
          </p>

          {/* Alpha Benchmarks strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { val: '$0.00', label: 'Our Commission' },
              { val: '72 Hrs', label: 'Total Execution' },
              { val: '100%', label: 'Revenue Retained' },
              { val: '5–15%', label: 'Avg Re-Activation' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl py-6 px-4">
                <div className="text-3xl font-black text-white font-serif italic mb-1">{stat.val}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-3 text-white font-black text-base uppercase tracking-[0.2em] px-12 py-5 rounded-2xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #FF7A47 0%, #FF6231 55%, #E8511F 100%)', boxShadow: '0 8px 48px rgba(255,98,49,0.55)' }}
          >
            SECURE MY 72-HOUR WINDOW
          </button>
          <p className="text-slate-600 text-[11px] font-bold uppercase tracking-[0.2em] mt-6">
            Alpha spots limited this week · No commission · No risk · 100% execution
          </p>
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