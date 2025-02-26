import React from 'react';
import { Skull } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <p className="text-white text-[20vw] font-bold whitespace-nowrap animate-pulse">
          ObfuscatedByFreemasonry
        </p>
      </div>

      {/* Main content */}
      <div className="z-10 text-center">
        <div className="mb-8">
          <img 
            src="https://c.tenor.com/XikvBXS6blMAAAAd/tenor.gif" 
            alt="Saddam Hussein"
            className="w-64 h-64 object-cover rounded-lg shadow-2xl shadow-red-900/50"
          />
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <Skull className="w-8 h-8 text-red-600 animate-pulse" />
          <h1 className="text-4xl font-bold text-red-600 tracking-wider">
            Don&apos;t try, boy
          </h1>
          <Skull className="w-8 h-8 text-red-600 animate-pulse" />
        </div>
      </div>

      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-black pointer-events-none"></div>
    </div>
  );
}

export default App;