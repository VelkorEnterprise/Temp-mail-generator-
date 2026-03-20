import React, { useMemo, useState } from 'react';
import { Message } from '../types.ts';
import { Icons } from './Icons.tsx';
import { keywords } from '../keywords.ts';
import { useTranslation } from '../LanguageContext.tsx';

interface EmailListProps {
  messages: Message[];
  onSelectMessage: (message: Message) => void;
}

const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const diffSeconds = Math.round((now.getTime() - date.getTime()) / 1000);
    const diffMinutes = Math.round(diffSeconds / 60);
    const diffHours = Math.round(diffMinutes / 60);
    const diffDays = Math.round(diffHours / 24);

    if (diffSeconds < 60) return "Just now";
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
}

export const EmailListSkeleton: React.FC = () => (
    <div className="space-y-4 animate-pulse">
        {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-[1.5rem] border border-gray-100 bg-white">
                <div className="flex gap-5">
                    <div className="w-14 h-14 bg-gray-200 rounded-2xl flex-shrink-0"></div>
                    <div className="flex-grow space-y-3 py-1">
                        <div className="flex justify-between">
                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                            <div className="h-3 bg-gray-200 rounded w-16"></div>
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-100 rounded w-full"></div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

type SortOption = 'date' | 'sender' | 'subject';
type SortDirection = 'asc' | 'desc';

const EmailList: React.FC<EmailListProps> = ({ messages, onSelectMessage }) => {
  const { t, language } = useTranslation();
  const [sortOption, setSortOption] = useState<SortOption>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  
  const emptyInboxTip = useMemo(() => getRandomItem(keywords), [language]);

  const sortedMessages = useMemo(() => {
    return [...messages].sort((a, b) => {
        let valA, valB;
        
        switch(sortOption) {
            case 'sender':
                valA = (a.from.name || a.from.address).toLowerCase();
                valB = (b.from.name || b.from.address).toLowerCase();
                break;
            case 'subject':
                valA = (a.subject || '').toLowerCase();
                valB = (b.subject || '').toLowerCase();
                break;
            case 'date':
            default:
                valA = new Date(a.createdAt).getTime();
                valB = new Date(b.createdAt).getTime();
                break;
        }

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
  }, [messages, sortOption, sortDirection]);

  const handleSort = (option: SortOption) => {
      if (sortOption === option) {
          setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
      } else {
          setSortOption(option);
          setSortDirection(option === 'date' ? 'desc' : 'asc'); // Default date to desc (newest first)
      }
  };

  const SortIcon = ({ active, direction }: { active: boolean, direction: SortDirection }) => (
      <span className={`ml-1 transition-transform duration-200 ${active ? 'opacity-100' : 'opacity-0'} inline-block`}>
          {direction === 'asc' ? '↑' : '↓'}
      </span>
  );

  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[450px] text-center text-gray-500 p-8 border-2 border-dashed border-[#D4AF37]/20 rounded-[2.5rem] bg-[#FFFCF0]/50 relative overflow-hidden group">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent h-[40%] w-full animate-scan-slow"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl mb-10 group-hover:scale-110 transition-transform duration-700 shadow-[#D4AF37]/10 border border-[#D4AF37]/10">
                <Icons.Inbox className="w-20 h-20 text-[#D4AF37]/50" />
            </div>
            
            <h3 className="font-black text-3xl text-gray-900 mb-3 tracking-tight">{t('inboxEmpty')}</h3>
            <p className="text-gray-500 font-medium mb-10 max-w-sm text-lg">{t('waitingForEmails')}</p>
            
            <div className="flex items-center gap-3 px-8 py-4 bg-white border border-[#D4AF37]/20 rounded-full shadow-sm text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.2em]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                DECRYPTING INCOMING TRAFFIC
            </div>

            {emptyInboxTip && (
                <div className="mt-16 p-8 bg-white/80 backdrop-blur-md border border-[#D4AF37]/10 rounded-3xl max-w-md shadow-lg shadow-[#D4AF37]/5">
                    <p className="text-xs text-gray-400 italic leading-relaxed font-medium">
                        <span className="font-black text-[#D4AF37] uppercase tracking-widest mr-2">{t('inboxTip')}</span> 
                        "{emptyInboxTip}"? <button onClick={(e) => e.preventDefault()} className="text-black font-black hover:underline uppercase tracking-widest ml-1">{t('checkArticles')}</button>
                    </p>
                </div>
            )}
        </div>
        
        <style>{`
            @keyframes scan-slow {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(300%); }
            }
            .animate-scan-slow {
                animation: scan-slow 5s linear infinite;
            }
        `}</style>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Sorting Controls */}
      <div className="flex items-center gap-2 mb-4 px-2 overflow-x-auto no-scrollbar pb-2">
          <span className="text-xs font-black text-gray-400 uppercase tracking-widest mr-2">Sort by:</span>
          {[
              { id: 'date', label: 'Date' },
              { id: 'sender', label: 'Sender' },
              { id: 'subject', label: 'Subject' }
          ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSort(opt.id as SortOption)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    sortOption === opt.id 
                    ? 'bg-[#111] text-[#D4AF37] border-[#111]' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-[#D4AF37]'
                }`}
              >
                  {opt.label} <SortIcon active={sortOption === opt.id} direction={sortDirection} />
              </button>
          ))}
      </div>

      {sortedMessages.map((message) => (
        <div
          key={message.id}
          onClick={() => onSelectMessage(message)}
          className={`group p-4 cursor-pointer rounded-[1.2rem] border transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-[#D4AF37]/10 relative overflow-hidden
            ${message.seen 
                ? 'bg-white border-gray-100 hover:bg-[#FFFCF0] hover:border-[#D4AF37]' 
                : 'bg-white border-[#D4AF37]/40 shadow-md shadow-[#D4AF37]/5'
            }
          `}
        >
          {/* Unread Indicator */}
          {!message.seen && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]"></div>
          )}

        <div className="flex justify-between items-start gap-2">
            <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs transition-all duration-500 transform group-hover:rotate-6 shadow-sm border
                    ${!message.seen 
                        ? 'bg-[#D4AF37] text-white border-[#D4AF37]' 
                        : 'bg-[#FAFAFA] text-[#D4AF37] border-gray-100 group-hover:bg-[#D4AF37] group-hover:text-white group-hover:border-[#D4AF37]'
                    }
                `}>
                    {message.from.name ? message.from.name[0].toUpperCase() : (message.from.address[0].toUpperCase())}
                </div>
            </div>
            <div className="flex-grow overflow-hidden">
                <div className="flex items-center justify-between mb-0.5">
                    <p className={`truncate text-sm group-hover:text-[#D4AF37] transition-colors tracking-tight ${!message.seen ? 'font-black text-black' : 'font-bold text-gray-900'}`}>
                        {message.from.name || message.from.address}
                    </p>
                    <span className={`text-[8px] font-black uppercase tracking-widest flex-shrink-0 px-1.5 py-0.5 rounded-full transition-colors ${!message.seen ? 'bg-[#D4AF37]/10 text-[#D4AF37]' : 'bg-gray-50 text-gray-400 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37]'}`}>
                        {formatDate(message.createdAt)}
                    </span>
                </div>
                <p className={`truncate text-xs mb-0.5 ${!message.seen ? 'font-bold text-gray-900' : 'font-medium text-gray-800'}`}>
                    {message.subject || '(no subject)'}
                </p>
                <p className="text-gray-500 text-[10px] truncate leading-relaxed font-medium">{message.intro}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;