import React from 'react';
import { FileText } from 'lucide-react';

const BookMockup: React.FC = () => (
  <div className="relative group cursor-pointer max-w-[280px] mx-auto transition-transform duration-500 hover:scale-[1.01]">
    {/* Glow effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
    
    <div className="relative bg-white ring-1 ring-slate-200 rounded-lg overflow-hidden shadow-2xl flex flex-col">
      <div className="w-full h-[320px] bg-slate-950 flex flex-col justify-between p-6 border-l-[8px] border-sky-500 relative overflow-hidden">
        {/* Background geometry */}
        <div className="absolute -right-16 top-1/4 opacity-[0.05] pointer-events-none">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[300px] h-[300px] border border-sky-400 rounded-full"></div>
            <div className="absolute w-[200px] h-[200px] border border-sky-400 rounded-full"></div>
            <div className="absolute w-[100px] h-[100px] border border-sky-400 rounded-full"></div>
          </div>
        </div>

        {/* Cover Content */}
        <div className="relative z-10 flex flex-col items-center text-center mt-2">
          <div className="text-sky-500 font-black tracking-[0.2em] text-[7px] uppercase italic mb-6">
            Standard Operating Procedure
          </div>
          
          <div className="flex flex-col gap-0 mb-4">
            <h3 className="text-[26px] font-black text-white leading-[0.9] italic tracking-tighter">
              DEAD LEAD
            </h3>
            <h3 className="text-[30px] font-black text-sky-500 leading-[0.9] tracking-tighter uppercase">
              REACTIVATION
            </h3>
          </div>
          
          <div className="w-8 h-[2px] bg-sky-500 mb-5 mx-auto"></div>
          
          <p className="text-slate-300 text-[10px] font-medium leading-relaxed italic max-w-[180px] mx-auto">
            "How to Generate $2,000+ in Immediate Revenue from Old Leads (Without Spending $1 on Ads)"
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end relative z-10 mt-auto">
           <div className="text-left space-y-0.5">
              <div className="text-slate-500 text-[6px] font-black uppercase tracking-[0.2em]">Digital Footprint Solutions</div>
              <div className="text-slate-600 text-[5px] font-mono uppercase tracking-[0.15em]">Ver 2.0 // 2026 Edition</div>
           </div>
           <FileText className="w-5 h-5 text-sky-400/20" />
        </div>
      </div>
    </div>
  </div>
);

export default BookMockup;