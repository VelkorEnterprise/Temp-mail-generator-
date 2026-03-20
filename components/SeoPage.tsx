import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { keywords } from '../keywords.ts';
import Hero from './Hero.tsx';
import InfoDump from './InfoDump.tsx';
import { useTranslation } from '../LanguageContext.tsx';

const SeoPage: React.FC = () => {
  const { keyword } = useParams<{ keyword: string }>();
  const { t } = useTranslation();
  const decodedKeyword = keyword?.replace(/-/g, ' ') || 'temp mail';

  const [randomKeywords, setRandomKeywords] = React.useState<string[]>([]);
  const [randomCountries, setRandomCountries] = React.useState<string[]>([]);

  useEffect(() => {
    document.title = `${decodedKeyword.charAt(0).toUpperCase() + decodedKeyword.slice(1)} - Free Temp Mail Pro`;
    window.scrollTo(0, 0);

    // Generate random internal links for SEO
    const shuffledKeywords = [...keywords].sort(() => 0.5 - Math.random());
    setRandomKeywords(shuffledKeywords.slice(0, 12));

    const countryCodes = ['us', 'gb', 'ca', 'au', 'de', 'fr', 'es', 'it', 'jp', 'cn', 'ru', 'br', 'in', 'kr', 'nl'];
    const shuffledCountries = [...countryCodes].sort(() => 0.5 - Math.random());
    setRandomCountries(shuffledCountries.slice(0, 8));

  }, [decodedKeyword]);

  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#D4AF37]/5 py-4 px-6 border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <Link to="/" className="hover:text-[#D4AF37]">Home</Link>
          <span>/</span>
          <span className="text-[#D4AF37]">{decodedKeyword}</span>
        </div>
      </div>

      <Hero 
        emailAccount={null}
        onDeleteEmail={() => {}}
        onNewEmail={() => window.location.href = '#/'}
        onNavigateBlog={() => {}}
        isCreating={false}
        isDeleting={false}
        loadingMessage=""
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-tight capitalize">
          {decodedKeyword}
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
          Looking for <strong>{decodedKeyword}</strong>? You've come to the right place. Our <strong>temp mail generator</strong> provides the most secure and reliable <strong>disposable email</strong> service on the web. Whether you're trying to avoid spam, protect your privacy, or sign up for multiple accounts, our <strong>trash mail</strong> solution is perfect for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-[3rem] border border-[#D4AF37]/20 shadow-xl shadow-[#D4AF37]/5">
            <h2 className="text-3xl font-black text-black mb-6 tracking-tight">Why use {decodedKeyword}?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Using a <strong>{decodedKeyword}</strong> allows you to maintain complete anonymity online. In an era where data is the new gold, protecting your primary email address is more important than ever. Our service ensures that your real identity is never exposed to third-party trackers or malicious actors.
            </p>
            <ul className="space-y-4">
              {["100% Free Forever", "No Registration Required", "Instant Email Generation", "Secure & Encrypted"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <span className="font-bold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] p-10 rounded-[3rem] text-white shadow-2xl">
            <h2 className="text-3xl font-black mb-6 tracking-tight">Get Started Now</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Don't wait any longer. Protect your privacy today with our <strong>temp mail pro</strong> service. It's fast, free, and incredibly easy to use.
            </p>
            <Link to="/" className="inline-block px-8 py-4 bg-[#D4AF37] text-black font-black rounded-2xl hover:brightness-110 transition-all uppercase tracking-widest">
              Generate New Email
            </Link>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 mb-24">
          <h2 className="text-4xl font-black text-black mb-8">The Importance of {decodedKeyword} in 2026</h2>
          <p>
            As we move further into 2026, the need for <strong>{decodedKeyword}</strong> has never been greater. With the rise of AI-driven marketing and sophisticated phishing attacks, your email address is a prime target. By using our <strong>temp mail and trash mail generator</strong>, you're taking a proactive step in securing your digital life.
          </p>
          <p>
            Our <strong>10 minute mail</strong> technology is constantly evolving to bypass the latest filters and security measures. We provide a <strong>gmail temp mail alternative</strong> that is not only faster but also more private.
          </p>

          <div className="my-12 p-8 bg-[#D4AF37]/5 rounded-[2rem] border border-[#D4AF37]/20">
            <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">Global Availability & Related Searches</h3>
            <p className="mb-6">Explore our <strong>{decodedKeyword}</strong> service across different regions and related topics:</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {randomCountries.map(code => (
                <Link key={code} to={`/country/${code}`} className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold hover:border-[#D4AF37] transition-colors uppercase">
                  {code} Temp Mail
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {randomKeywords.map(kw => (
                <Link key={kw} to={`/seo/${kw.replace(/\s+/g, '-')}`} className="px-4 py-2 bg-[#111] text-[#D4AF37] border border-[#D4AF37]/30 rounded-xl text-xs font-bold hover:bg-[#222] transition-colors capitalize">
                  {kw}
                </Link>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-black mt-12 mb-6">Frequently Asked Questions about {decodedKeyword}</h3>
          <div className="space-y-6">
            <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100">
              <h4 className="text-xl font-black text-black mb-3">Is {decodedKeyword} really free?</h4>
              <p>Yes, our service is 100% free to use. We believe that privacy should be a right, not a privilege. You can generate as many <strong>disposable email</strong> addresses as you need without ever paying a cent.</p>
            </div>
            <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100">
              <h4 className="text-xl font-black text-black mb-3">Can I use {decodedKeyword} for social media?</h4>
              <p>Absolutely! Our <strong>temp mail</strong> addresses are perfect for <strong>facebook verification</strong>, <strong>instagram sign up</strong>, and <strong>discord</strong>. We ensure that you receive your OTP or verification link instantly.</p>
            </div>
          </div>
        </div>
      </div>

      <InfoDump onSelectArticle={() => {}} onNavigateBlog={() => {}} />

      <div className="bg-[#111] py-24 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Ready to protect your privacy?</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join millions of users who trust our <strong>temp mail generator</strong> for their daily privacy needs.
        </p>
        <Link to="/" className="inline-block px-12 py-6 bg-[#D4AF37] text-black font-black text-xl rounded-[2rem] hover:scale-105 transition-all uppercase tracking-widest shadow-2xl shadow-[#D4AF37]/20">
          Get Your Free Email Now
        </Link>
      </div>
    </div>
  );
};

export default SeoPage;
