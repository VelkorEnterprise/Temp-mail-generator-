import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import EmailList, { EmailListSkeleton } from './components/EmailList.tsx';
import EmailDetail from './components/EmailDetail.tsx';
import Footer from './components/Footer.tsx';
import InfoDump from './components/InfoDump.tsx';
import Testimonials from './components/Testimonials.tsx';
import Statistics from './components/Statistics.tsx';
import ArticleView from './components/ArticleView.tsx';
import { BlogList } from './components/BlogList.tsx';
import BlogDetailView from './components/BlogDetailView.tsx';
import { Icons } from './components/Icons.tsx';
import { useInterval } from './useInterval.ts';
import { useTranslation } from './LanguageContext.tsx';
import { 
    generateNewEmail, 
    fetchInbox, 
    fetchMessageDetail,
    refreshMailTmToken,
    deleteMailTmAccount
} from './services/emailService.ts';
import { EmailAccount, Message, MessageDetail, Article } from './types.ts';
import { blogArticles } from './data/blogArticles.tsx';

const POLLING_INTERVAL = 10000;

import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import SeoPage from './components/SeoPage.tsx';
import CountryPage from './components/CountryPage.tsx';

const App: React.FC = () => {
    const [emailAccount, setEmailAccount] = useState<EmailAccount | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<MessageDetail | null>(null);
    
    const [loading, setLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loadingMessage, setLoadingMessage] = useState<string>('');
    
    const tokenRefreshAttempted = useRef(false);
    const isRequestLocked = useRef(false);
    const loadingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const clearLoadingInterval = () => {
        if (loadingIntervalRef.current) {
            clearInterval(loadingIntervalRef.current);
            loadingIntervalRef.current = null;
        }
    };

    useEffect(() => {
        // window.scrollTo(0, 0); // Removed to prevent unwanted scrolling
    }, [location.pathname]);

    const handleGetNewEmail = useCallback(async () => {
        if (isRequestLocked.current) return;
        isRequestLocked.current = true;
        
        clearLoadingInterval();
        setIsCreating(true);
        if (!emailAccount) setLoading(true); 
        
        setError(null);
        setSelectedMessage(null);

        const messagesList = [
            t('loadingMsg1') || 'Scanning Secure Nodes...',
            t('loadingMsg2') || 'Bypassing Platform Filters...',
            t('loadingMsg3') || 'Initializing Temporary Inbox...',
            t('loadingMsg4') || 'Ready for Anonymous Reception...'
        ];
        let messageIndex = 0;
        setLoadingMessage(messagesList[messageIndex]);
        
        loadingIntervalRef.current = setInterval(() => {
            messageIndex = (messageIndex + 1) % messagesList.length;
            setLoadingMessage(messagesList[messageIndex]);
        }, 1200);

        try {
            const newAccount = await generateNewEmail();
            setEmailAccount(newAccount);
            setMessages([]);
            setError(null); 
        } catch (err: any) {
            setError(err.message || 'Service busy. Please try again in a moment.');
        } finally {
            clearLoadingInterval();
            setLoadingMessage('');
            setLoading(false);
            setIsCreating(false);
            setTimeout(() => { isRequestLocked.current = false; }, 800);
        }
    }, [t, emailAccount]);

    useEffect(() => {
        handleGetNewEmail();
        return () => clearLoadingInterval();
    }, [handleGetNewEmail]);

    const handleApiCall = useCallback(async <T,>(apiCall: (account: EmailAccount) => Promise<T>, options: { isLoadInbox?: boolean } = {}): Promise<T | undefined> => {
        if (!emailAccount) return;
        try {
            return await apiCall(emailAccount);
        } catch (error: any) {
            const isAuthError = emailAccount.apiSource === 'mail.tm' && (error.message.includes('401') || error.message.includes('expired')) && emailAccount.refreshToken;
            if (isAuthError && !tokenRefreshAttempted.current) {
                tokenRefreshAttempted.current = true;
                try {
                    const { token, refreshToken } = await refreshMailTmToken(emailAccount.refreshToken!);
                    setEmailAccount(prev => prev ? { ...prev, token, refreshToken } : null);
                    return await apiCall({ ...emailAccount, token, refreshToken });
                } catch {
                    if (options.isLoadInbox) handleGetNewEmail();
                    else setError('Session timed out.');
                } finally {
                    setTimeout(() => { tokenRefreshAttempted.current = false; }, 2000);
                }
            } else if (!isAuthError) setError(error.message || 'Connection error.');
        }
    }, [emailAccount, handleGetNewEmail]);
    
    const loadInbox = useCallback(async () => {
        if (!emailAccount || isRefreshing) return;
        setIsRefreshing(true);
        const minLoadTime = new Promise(resolve => setTimeout(resolve, 800));
        const [inboxMessages] = await Promise.all([
            handleApiCall((account) => fetchInbox(account.token, account.apiSource), { isLoadInbox: true }),
            minLoadTime
        ]);
        
        if (inboxMessages) setMessages(inboxMessages);
        setIsRefreshing(false);
    }, [handleApiCall, emailAccount, isRefreshing]);

    useInterval(loadInbox, emailAccount ? POLLING_INTERVAL : null);

    const handleSelectMessage = useCallback(async (message: Message) => {
        setLoading(true);
        navigate(`/email/${message.id}`);
        setSelectedMessage(null);
        const detail = await handleApiCall((account) => fetchMessageDetail(account.token, message.id, account.apiSource));
        if (detail) setSelectedMessage({...detail, address: emailAccount?.address});
        setLoading(false);
    }, [handleApiCall, emailAccount, navigate]);
    
    const handleSelectArticle = (article: Article) => {
        navigate(`/article/${article.slug}`);
    };

    const handleBackToMain = () => {
        navigate('/');
        setSelectedMessage(null);
    };

    const navigateToBlog = () => {
        navigate('/blog');
    };

    const handleDeleteEmail = useCallback(async () => {
        if (!emailAccount || emailAccount.apiSource !== 'mail.tm' || isDeleting || isCreating) return;
        setIsDeleting(true);
        try {
            const success = await handleApiCall((account) => deleteMailTmAccount(account.token, account.id));
            if (success) handleGetNewEmail();
        } finally {
            setIsDeleting(false);
        }
    }, [emailAccount, handleApiCall, handleGetNewEmail, isDeleting, isCreating]);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero 
                                emailAccount={emailAccount}
                                onDeleteEmail={handleDeleteEmail}
                                onNewEmail={handleGetNewEmail}
                                onNavigateBlog={navigateToBlog}
                                isCreating={isCreating}
                                isDeleting={isDeleting}
                                loadingMessage={loadingMessage}
                            />
                            <div className="bg-[#FAFAFA] py-0 md:py-8">
                                <div className="w-full mx-auto px-0">
                                    <div className="flex flex-wrap items-center justify-center gap-4 mb-10 pt-8">
                                        <button 
                                            onClick={loadInbox} 
                                            disabled={isRefreshing || isCreating} 
                                            className={`group flex items-center gap-3 px-8 py-4 text-sm font-black text-[#111] bg-gradient-to-r from-[#D4AF37] to-[#F4E5BC] rounded-2xl hover:brightness-110 shadow-xl shadow-[#D4AF37]/20 transition-all active:scale-95 disabled:opacity-70 border border-[#C5A028]/20`}
                                        >
                                            <Icons.Refresh className={`w-5 h-5 ${isRefreshing ? 'animate-spin-fast text-black/50' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                                            <span className="tracking-widest uppercase text-black">{isRefreshing ? 'Syncing...' : (t('refresh') || 'Refresh')}</span>
                                        </button>
                                    </div>

                                    <div className="bg-white rounded-none md:rounded-[2.5rem] shadow-2xl p-4 md:p-8 mb-8 border-y md:border border-[#D4AF37]/20 overflow-hidden relative">
                                        {isRefreshing && (
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                                                <div className="h-full bg-[#D4AF37] animate-progress-loading"></div>
                                            </div>
                                        )}
                                        <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight flex items-center gap-4 px-2 md:px-0">
                                            <span className="w-2 h-8 bg-[#D4AF37] rounded-full"></span>
                                            {t('inbox') || 'Inbox'}
                                        </h2>

                                        <div className="min-h-[450px]">
                                            {loading && !emailAccount ? (
                                                <EmailListSkeleton />
                                            ) : (
                                                <EmailList messages={messages} onSelectMessage={handleSelectMessage} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Statistics />
                            <Testimonials />
                            <InfoDump onSelectArticle={handleSelectArticle} onNavigateBlog={navigateToBlog} />
                        </>
                    } />
                    
                    <Route path="/email/:id" element={
                        selectedMessage ? (
                            <EmailDetail message={selectedMessage} onClose={handleBackToMain} />
                        ) : loading ? (
                            <div className="min-h-[60vh] flex items-center justify-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
                            </div>
                        ) : (
                            <Navigate to="/" replace />
                        )
                    } />

                    <Route path="/article/:slug" element={
                        <ArticleView />
                    } />

                    <Route path="/blog" element={
                        <BlogList />
                    } />

                    <Route path="/blog/:slug" element={
                        <BlogDetailView />
                    } />

                    <Route path="/seo/:keyword" element={<SeoPage />} />
                    <Route path="/country/:countryCode" element={<CountryPage />} />
                </Routes>
            </main>
            <Footer onNavigateBlog={navigateToBlog} onGoHome={handleBackToMain} />
            <style>{`
                @keyframes progress-loading {
                    0% { width: 0; left: 0; }
                    50% { width: 100%; left: 0; }
                    100% { width: 0; left: 100%; }
                }
                .animate-progress-loading {
                    animation: progress-loading 1.5s infinite linear;
                }
                .animate-spin-fast {
                    animation: spin 0.6s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default App;