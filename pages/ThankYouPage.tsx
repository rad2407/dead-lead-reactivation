import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, 
  Target, 
  Trophy, 
  ChevronRight, 
  Users, 
  ShieldCheck, 
  XCircle, 
  Play 
} from 'lucide-react';
import Logo from '../components/Logo';
import { PageState, ASSETS } from '../constants';

interface ThankYouPageProps {
  onNavigate: (page: PageState) => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = async () => {
    if (videoRef.current) {
      try {
        setVideoError(false);
        videoRef.current.muted = false;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
        }
      } catch (err) {
        console.error("Video play failed:", err);
        try {
          if (videoRef.current) {
            videoRef.current.muted = true;
            await videoRef.current.play();
            setIsPlaying(true);
          }
        } catch (retryErr) {
          setVideoError(true);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-950">
      <div className="bg-green-600 text-white py-3 px-6 text-center font-bold text-sm tracking-wide shadow-lg flex items-center justify-center gap-3">
        <CheckCircle2 className="w-5 h-5" /> THE SOP IS IN YOUR INBOX. 
        <span className="hidden md:inline opacity-80 font-normal">Check your email from Ray Daley.</span>
      </div>
      
      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none">
            🛑 WAIT. DO YOU WANT TO <br/> 
            <span className="text-red-600 uppercase underline decoration-4 underline-offset-8 italic font-serif text-balance">MAKE $2K - $10K OR MORE IN THE NEXT 48 HOURS?</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto italic">
            The SOP is in your inbox. But reading it won't put cash in the bank. <span className="text-slate-900 font-bold">Execution will.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Target className="w-32 h-32" />
              </div>
              
              <div className="prose prose-lg text-slate-700 space-y-6 leading-relaxed relative z-10">
                <p className="font-bold text-slate-900">Most contractors download this PDF, read it, say 'Wow, great idea,' and then do absolutely nothing.</p>
                <p>They get busy. They forget. And their leads stay dead.</p>
                <p className="text-xl font-black text-slate-950 italic">I don't want that for you.</p>
                <p>I am looking for <span className="text-sky-600 font-black">5 "Alpha" owners</span> who want to run this play right now.</p>
              </div>

              <div className="mt-12 bg-slate-950 rounded-2xl p-8 text-white relative border-l-8 border-sky-500 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-8 h-8 text-sky-400" />
                  <h3 className="text-2xl font-black uppercase tracking-tight">THE 48-HOUR CHALLENGE</h3>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: <CheckCircle2 className="w-5 h-5 text-sky-400" />, text: <span><strong>Bring us your list</strong> (even just 50 old leads).</span> },
                    { icon: <CheckCircle2 className="w-5 h-5 text-sky-400" />, text: <span>We will upload them into <strong>The Revenue Accelerator</strong> for you.</span> },
                    { icon: <CheckCircle2 className="w-5 h-5 text-sky-400" />, text: <span>We will launch the campaign <strong>LIVE</strong> on a call.</span> },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-1">{item.icon}</div>
                      <p className="text-slate-300">{item.text}</p>
                    </li>
                  ))}
                </ul>

                <div className="bg-sky-500/10 border border-sky-500/30 rounded-xl p-6 mb-8">
                  <p className="text-xl font-black text-white leading-tight mb-2 italic">The Guarantee:</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    If we don't find you at least <span className="text-sky-400 font-bold">$2,000 in potential revenue</span> within 48 hours, you pay absolutely nothing.
                  </p>
                </div>

                <p className="text-xl font-bold italic text-sky-400">We do the tech. You take the cash.</p>
              </div>

              <div className="mt-10 space-y-6">
                <button 
                  onClick={() => onNavigate(PageState.SCHEDULE)}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black text-2xl py-8 rounded-2xl shadow-2xl flex items-center justify-center gap-4 transition-transform active:scale-95 group shadow-orange-500/20"
                >
                  🚀 ACCEPT THE 48-HOUR CHALLENGE <ChevronRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                </button>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <div className="flex items-center gap-2"><Users className="w-4 h-4" /> Limited to 5 Spots this week</div>
                  <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Zero Risk. Zero Tech Hassle.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
             <div className="sticky top-28">
                <div className="relative group w-full max-w-[340px] mx-auto aspect-[9/16] bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-800">
                  {videoError ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-950 text-slate-500">
                      <XCircle className="w-12 h-12 text-red-500 mb-4" />
                      <p className="font-bold text-white mb-2">Video Unavailable</p>
                      <p className="text-xs">Provide a direct link to the automation demo.</p>
                    </div>
                  ) : (
                    <>
                      <video 
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        preload="auto"
                        playsInline
                        poster={`${ASSETS.VIDEO_MAIN}#t=0.1`}
                        controls={isPlaying}
                      >
                        <source src={ASSETS.VIDEO_MAIN} type="video/mp4" />
                      </video>

                      {!isPlaying && (
                        <div 
                          onClick={handlePlayVideo}
                          className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] cursor-pointer z-10 flex flex-col items-center justify-center gap-6 group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-sky-600/40 to-transparent"></div>
                          <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6">
                              <div className="w-24 h-24 bg-sky-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                              </div>
                              <span className="text-white font-black tracking-[0.3em] text-[10px] uppercase bg-black/60 px-6 py-3 rounded-full backdrop-blur-md border border-white/20">Watch The AI System</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
             </div>
          </div>
        </div>
      </main>
      <footer className="py-20 text-center border-t border-slate-200 mt-20">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
          Digital Footprint Solutions • The Revenue Accelerator
        </p>
      </footer>
    </div>
  );
};

export default ThankYouPage;