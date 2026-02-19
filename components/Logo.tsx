import React from 'react';
import { ASSETS } from '../constants';

const Logo: React.FC = () => (
  <div className="flex items-center">
    <img 
      src={ASSETS.LOGO} 
      alt="Digital Footprint Solutions" 
      className="h-10 md:h-12 w-auto object-contain"
      width={200}
      height={48}
      loading="eager"
    />
  </div>
);

export default Logo;