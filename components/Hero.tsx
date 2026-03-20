import React, { useState } from 'react';
import { EmailAccount } from '../types.ts';
import { Icons } from './Icons.tsx';
import { useTranslation } from '../LanguageContext.tsx';

interface HeroProps {
    emailAccount: EmailAccount | null;
    onDeleteEmail: () => void;
    onNewEmail?: () => void;
    onNavigateBlog?: () => void;
    isCreating: boolean;
    isDeleting: boolean;
    loadingMessage: string;
}

const Hero: React.FC<HeroProps> = ({ emailAccount, onDeleteEmail, onNewEmail, onNavigateBlog, isCreating, isDeleting, loadingMessage }) => {
    const [copySuccess, setCopySuccess] = useState('');
    const { t } = useTranslation();

    const handleCopyEmail = () => {
        if (emailAccount) {
            navigator.clipboard.writeText(emailAccount.address);
            setCopySuccess(t('copied'));
            setTimeout(() => setCopySuccess(''), 2000);
        }
    };

    return (
        <div className="relative py-0 md:py-0 px-0 bg-white">
            <div className="absolute top-0 inset-x-0 h-[40rem] bg-gradient-to-b from-[#FFFDF5] to-transparent pointer-events-none"></div>
            <div className="w-full mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D4AF37]/40 rounded-full text-[#996515] text-[9px] font-black uppercase tracking-[0.2em] mb-10 shadow-sm mt-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                    </span>
                    {t('liveAnonymitySystem')}
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-12 tracking-tighter leading-[1.05] px-4">
                    {t('yourTemporary')} <br/>
                    <span className="gold-gradient-text">
                        {t('emailAddress')}
                    </span>
                </h1>

                <div className="rounded-[2rem] md:rounded-[3rem] p-2 md:p-10 glow-shadow mb-12 relative group border border-[#D4AF37]/20 w-[92%] md:w-full md:max-w-[95%] xl:max-w-[1800px] mx-auto bg-white">
                    <div className="relative bg-[#111111] rounded-[1.5rem] md:rounded-[2.5rem] py-16 px-4 md:py-24 md:px-16 flex flex-col items-center justify-center gap-10 border border-[#D4AF37]/30 overflow-hidden shadow-2xl">
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent pointer-events-none"></div>

                        <div className="text-center w-full relative z-10">
                            <label className="text-xs uppercase tracking-[0.5em] text-[#D4AF37] font-black mb-6 block opacity-80">{t('activeBurnerId')}</label>
                            <div className="flex items-center justify-center min-h-[5rem] px-2">
                                <span className={`text-xl md:text-4xl lg:text-6xl font-mono font-bold break-all tracking-tight transition-all duration-300 ${isCreating ? 'text-[#D4AF37]/50 animate-pulse' : 'text-white'}`}>
                                    {isCreating ? (loadingMessage || t('loading')) : (emailAccount?.address || t('loading'))}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg relative z-10">
                            <button 
                                onClick={handleCopyEmail} 
                                disabled={!emailAccount || isCreating}
                                className="flex-1 bg-gradient-to-b from-[#FFF] to-[#EEE] hover:to-[#FFF] transition-all duration-300 text-black font-black py-6 px-10 rounded-2xl flex items-center justify-center gap-3 transform active:scale-95 disabled:opacity-30 shadow-lg shadow-white/10 border border-[#D4AF37]/50"
                            >
                                <Icons.Copy className="w-6 h-6 text-[#D4AF37]"/>
                                <span className="uppercase tracking-widest text-sm">{copySuccess || t('copy')}</span>
                            </button>
                            {onNewEmail && (
                                <button 
                                    onClick={onNewEmail} 
                                    disabled={isCreating || isDeleting}
                                    className="flex-1 bg-[#222] hover:bg-[#333] text-[#D4AF37] font-black py-6 px-10 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 disabled:opacity-50 border border-[#D4AF37]/30 backdrop-blur-sm"
                                >
                                    {isCreating ? <Icons.Spinner className="w-6 h-6 animate-spin"/> : <Icons.Change className="w-6 h-6"/>}
                                    <span className="uppercase tracking-widest text-sm">{t('change')}</span>
                                </button>
                            )}
                        </div>
                    </div>
                    
                    <div className="mt-8 text-gray-500 text-sm md:text-base leading-relaxed max-w-4xl mx-auto italic font-medium opacity-80 px-4">
                        "{t('heroQuote')}"
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
                    <div className="flex items-center gap-2 bg-[#F9F9F9] border border-[#E5E5E5] px-6 py-4 rounded-full">
                        <span className="text-[#D4AF37] text-base">📲</span>
                        <span className="text-xs font-black text-gray-500 uppercase tracking-widest">{t('tempNumberPlus')}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#F9F9F9] border border-[#E5E5E5] px-6 py-4 rounded-full">
                        <span className="text-[#D4AF37] text-base">✓</span>
                        <span className="text-xs font-black text-gray-500 uppercase tracking-widest">{t('noSignupRequired')}</span>
                    </div>
                </div>

                <button 
                    onClick={onNavigateBlog}
                    className="inline-flex items-center gap-4 px-12 py-6 bg-[#111] hover:bg-[#000] text-[#D4AF37] border border-[#D4AF37]/30 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all group shadow-xl shadow-[#D4AF37]/10"
                >
                    <Icons.Inbox className="w-6 h-6" />
                    {t('explorePrivacyHub')}
                    <Icons.Back className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default Hero;