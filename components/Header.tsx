import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons.tsx';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Icons.Mail className="w-10 h-10 text-[#D4AF37]" />
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-black uppercase">TEMP MAIL GENERATOR</span>
              <span className="text-[10px] font-black tracking-[0.2em] text-[#D4AF37] uppercase">Royal Privacy ID</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-bold text-gray-600 hover:text-[#D4AF37] transition-colors">Home</Link>
            <Link to="/blog" className="text-sm font-bold text-gray-600 hover:text-[#D4AF37] transition-colors">Blog</Link>
            <a href="#faq" className="text-sm font-bold text-gray-600 hover:text-[#D4AF37] transition-colors">FAQ</a>
          </nav>
        </div>
      </div>
      {/* SEO Trust Bar */}
      <div className="w-full bg-[#050505] py-2 overflow-hidden mb-4">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-6">
          {[
            "TODAY",
            "NO SIGNUP REQUIRED",
            "FREE TO USE FOREVER",
            "GMAIL TEMP",
            "100% PRIVATE",
            "INSTANT GENERATOR"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3 px-3">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">{text}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "TODAY",
            "NO SIGNUP REQUIRED",
            "FREE TO USE FOREVER",
            "GMAIL TEMP",
            "100% PRIVATE",
            "INSTANT GENERATOR"
          ].map((text, i) => (
            <div key={i + 100} className="flex items-center gap-3 px-3">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
