import React, { useState } from 'react';
import { keywords } from '../keywords.ts';
import { useTranslation, languages, Language } from '../LanguageContext.tsx';
import { Icons } from './Icons.tsx';

import { countries } from '../data/countries.ts';
import { Link } from 'react-router-dom';

const shuffledKeywords = [...keywords].sort(() => 0.5 - Math.random()).slice(0, 60);

interface FooterProps {
    onNavigateBlog?: () => void;
    onGoHome?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateBlog, onGoHome }) => {
    const { language, setLanguage, t } = useTranslation();
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const linkClasses = "hover:text-[#D4AF37] transition-colors uppercase font-black tracking-widest text-[10px] cursor-pointer text-left py-1";

    const handleLanguageChange = (langKey: Language) => {
        setLanguage(langKey);
        setIsLangMenuOpen(false);
    };

    const handleActionLink = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#050505] border-t border-[#D4AF37]/30 text-gray-300">
            {/* Global Locations Section */}
            <div className="py-16 px-6 border-b border-[#222]">
                <div className="max-w-7xl mx-auto">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-center opacity-50">Global Locations & Regional Services</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
                        {countries.map((country) => (
                            <Link 
                                key={country.code} 
                                to={`/country/${country.code}`}
                                className="text-[10px] font-bold text-gray-500 hover:text-[#D4AF37] transition-colors uppercase tracking-wider truncate"
                            >
                                {country.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* SEO Keywords Section */}
            {/* Removed Trending Privacy Searches as per user request */}

            <div className="py-12 px-6 border-t border-[#222]">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-gray-500">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Service</h4>
                            <button onClick={handleActionLink} className={linkClasses}>PREMIUM</button>
                            <button onClick={handleActionLink} className={linkClasses}>API ACCESS</button>
                            <button onClick={handleActionLink} className={linkClasses}>10 MINUTE MAIL</button>
                            <button onClick={handleActionLink} className={linkClasses}>EMAIL GENERATOR</button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Resources</h4>
                            <button onClick={onNavigateBlog} className={linkClasses}>PRIVACY HUB</button>
                            <button onClick={handleActionLink} className={linkClasses}>KNOWLEDGE BASE</button>
                            <button onClick={handleActionLink} className={linkClasses}>FAQ</button>
                            <button onClick={handleActionLink} className={linkClasses}>BLOG</button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Security</h4>
                            <button onClick={handleActionLink} className={linkClasses}>PRIVACY POLICY</button>
                            <button onClick={handleActionLink} className={linkClasses}>TERMS OF USE</button>
                            <button onClick={handleActionLink} className={linkClasses}>COOKIES</button>
                            <button onClick={handleActionLink} className={linkClasses}>SECURITY AUDIT</button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Company</h4>
                            <button onClick={handleActionLink} className={linkClasses}>CONTACTS</button>
                            <button onClick={handleActionLink} className={linkClasses}>ADVERTISING</button>
                            <button onClick={handleActionLink} className={linkClasses}>ABOUT US</button>
                            <button onClick={handleActionLink} className={linkClasses}>PRESS</button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-4">Mobile</h4>
                            <button onClick={handleActionLink} className={linkClasses}>ANDROID APP</button>
                            <button onClick={handleActionLink} className={linkClasses}>IOS APP</button>
                            <button onClick={handleActionLink} className={linkClasses}>CHROME EXTENSION</button>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-[#222]">
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                            <button onClick={handleActionLink} className="hover:text-[#D4AF37] transition-colors">Temp Number</button>
                            <div className="w-1 h-1 rounded-full bg-[#D4AF37] hidden md:block"></div>
                            <button onClick={handleActionLink} className="hover:text-[#D4AF37] transition-colors">10MinuteMail</button>
                            <div className="w-1 h-1 rounded-full bg-[#D4AF37] hidden md:block"></div>
                            <button onClick={handleActionLink} className="hover:text-[#D4AF37] transition-colors">My Phone Number</button>
                            <div className="w-1 h-1 rounded-full bg-[#D4AF37] hidden md:block"></div>
                            <button onClick={handleActionLink} className="hover:text-[#D4AF37] transition-colors">Burner Identity</button>
                        </div>

                        <div className="relative">
                            <button 
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
                                className="bg-[#111] border border-[#333] rounded-xl px-5 py-2 hover:bg-[#222] text-[#D4AF37] flex items-center gap-3 uppercase text-[10px] font-black tracking-widest transition-all"
                            >
                                <span className="opacity-80">{languages.find(l => l.code === language)?.name || language}</span>
                                <Icons.ChevronDown className={`w-3 h-3 transition-transform duration-500 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isLangMenuOpen && (
                                <div className="absolute bottom-full mb-3 right-0 w-48 bg-[#000] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden z-[100]">
                                    <div className="max-h-60 overflow-y-auto no-scrollbar">
                                        {languages.map((lang) => (
                                            <button 
                                                key={lang.code}
                                                onClick={() => handleLanguageChange(lang.code)}
                                                className="block w-full text-left px-5 py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:bg-[#D4AF37] hover:text-black transition-colors"
                                            >
                                                {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center text-[8px] font-black text-[#666] uppercase tracking-[0.4em]">
                        &copy; 2026 Temp Mail Pro — Temp mail and trash mail generator — Free disposable email at temp mail
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;