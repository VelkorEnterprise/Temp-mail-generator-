import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { countries } from '../data/countries.ts';
import Hero from './Hero.tsx';
import InfoDump from './InfoDump.tsx';
import { useTranslation } from '../LanguageContext.tsx';

const CountryPage: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { t } = useTranslation();
  const country = countries.find(c => c.code === countryCode?.toLowerCase());

  const [randomKeywords, setRandomKeywords] = React.useState<string[]>([]);
  const [randomCountries, setRandomCountries] = React.useState<string[]>([]);

  useEffect(() => {
    if (country) {
      document.title = `Temp Mail ${country.name} - Free Disposable Email in ${country.nativeName} | Tempmail`;
    }
    window.scrollTo(0, 0);

    // Generate random internal links for SEO
    import('../keywords.ts').then(module => {
      const shuffledKeywords = [...module.keywords].sort(() => 0.5 - Math.random());
      setRandomKeywords(shuffledKeywords.slice(0, 12));
    });

    const shuffledCountries = [...countries].filter(c => c.code !== country?.code).sort(() => 0.5 - Math.random());
    setRandomCountries(shuffledCountries.slice(0, 8).map(c => c.code));

  }, [country]);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-black text-black mb-4 tracking-tighter">Country Not Found</h1>
          <Link to="/" className="text-[#D4AF37] font-bold hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const localizedContent = {
    en: {
      title: `Best Temp Mail in ${country.name}`,
      subtitle: `Get free disposable email in ${country.name} instantly.`,
      description: `Looking for a reliable **temp mail** service in **${country.name}**? Our **temp mail generator** provides the most secure and private **disposable email** solution for users in **${country.name}**. Protect your privacy and avoid spam today.`,
      why: `Why use Temp Mail in ${country.name}?`,
      whyText: `In **${country.name}**, online privacy is becoming increasingly important. By using a **trash mail** address, you can sign up for services without revealing your real identity. Our **10 minute mail** is perfect for local websites and international platforms alike.`,
      cta: `Generate Your ${country.name} Temp Mail Now`
    },
    es: {
      title: `El mejor correo temporal en ${country.nativeName}`,
      subtitle: `Obtenga correo electrónico desechable gratuito en ${country.nativeName} al instante.`,
      description: `¿Busca un servicio de **correo temporal** confiable en **${country.nativeName}**? Nuestro **generador de correo temporal** ofrece la solución de **correo electrónico desechable** más segura y privada para usuarios en **${country.nativeName}**. Proteja su privacidad y evite el spam hoy mismo.`,
      why: `¿Por qué usar correo temporal en ${country.nativeName}?`,
      whyText: `En **${country.nativeName}**, la privacidad en línea es cada vez más importante. Al usar una dirección de **correo basura**, puede registrarse en servicios sin revelar su identidad real. Nuestro **correo de 10 minutos** es perfecto tanto para sitios web locales como para plataformas internacionales.`,
      cta: `Genera tu correo temporal de ${country.nativeName} ahora`
    },
    fr: {
      title: `Meilleur Temp Mail en ${country.nativeName}`,
      subtitle: `Obtenez instantanément un e-mail jetable gratuit en ${country.nativeName}.`,
      description: `Vous recherchez un service **temp mail** fiable en **${country.nativeName}** ? Notre **générateur d'e-mails temporaires** offre la solution d'**e-mail jetable** la plus sûre et la plus privée pour les utilisateurs en **${country.nativeName}**. Protégez votre vie privée et évitez les spams dès aujourd'hui.`,
      why: `Pourquoi utiliser Temp Mail en ${country.nativeName} ?`,
      whyText: `En **${country.nativeName}**, la confidentialité en ligne devient de plus en plus importante. En utilisant une adresse **trash mail**, vous pouvez vous inscrire à des services sans révéler votre véritable identité. Notre **mail de 10 minutes** est parfait pour les sites Web locaux et les plateformes internationales.`,
      cta: `Générez votre e-mail temporaire ${country.nativeName} maintenant`
    },
    de: {
      title: `Beste temporäre E-Mail in ${country.nativeName}`,
      subtitle: `Erhalten Sie sofort eine kostenlose Einweg-E-Mail in ${country.nativeName}.`,
      description: `Suchen Sie einen zuverlässigen **Temp Mail**-Dienst in **${country.nativeName}**? Unser **temporärer E-Mail-Generator** bietet die sicherste und privateste **Einweg-E-Mail**-Lösung für Benutzer in **${country.nativeName}**. Schützen Sie noch heute Ihre Privatsphäre und vermeiden Sie Spam.`,
      why: `Warum Temp Mail in ${country.nativeName} verwenden?`,
      whyText: `In **${country.nativeName}** wird Online-Privatsphäre immer wichtiger. Durch die Verwendung einer **Trash Mail**-Adresse können Sie sich für Dienste anmelden, ohne Ihre wahre Identität preiszugeben. Unsere **10-Minuten-Mail** ist perfekt für lokale Websites und internationale Plattformen gleichermaßen.`,
      cta: `Erstellen Sie jetzt Ihre ${country.nativeName} Temp Mail`
    },
    zh: {
      title: `${country.nativeName}最好的临时邮箱`,
      subtitle: `立即在${country.nativeName}获取免费的一次性电子邮件。`,
      description: `在**${country.nativeName}**寻找可靠的**临时邮箱**服务？我们的**临时邮箱生成器**为**${country.nativeName}**的用户提供最安全、最私密的一次性电子邮件解决方案。立即保护您的隐私并避免垃圾邮件。`,
      why: `为什么在${country.nativeName}使用临时邮箱？`,
      whyText: `在**${country.nativeName}**，在线隐私变得越来越重要。通过使用**垃圾邮件**地址，您可以注册服务而无需透露您的真实身份。我们的**10分钟邮箱**非常适合本地网站和国际平台。`,
      cta: `立即生成您的${country.nativeName}临时邮箱`
    },
    ja: {
      title: `${country.nativeName}で最高のテンポラリーメール`,
      subtitle: `${country.nativeName}で無料の使い捨てメールを即座に取得。`,
      description: `**${country.nativeName}**で信頼できる**テンポラリーメール**サービスをお探しですか？当社の**テンポラリーメールジェネレーター**は、**${country.nativeName}**のユーザーに最も安全でプライベートな**使い捨てメール**ソリューションを提供します。今すぐプライバシーを保護し、スパムを回避しましょう。`,
      why: `${country.nativeName}でテンポラリーメールを使用する理由`,
      whyText: `**${country.nativeName}**では、オンラインプライバシーの重要性がますます高まっています。**トラッシュメール**アドレスを使用することで、本名を明かさずにサービスに登録できます。当社の**10分メール**は、ローカルサイトと国際的なプラットフォームの両方に最適です。`,
      cta: `今すぐ${country.nativeName}のテンポラリーメールを生成`
    }
  };

  const content = localizedContent[country.language as keyof typeof localizedContent] || localizedContent.en;

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="bg-[#D4AF37]/5 py-4 px-6 border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <Link to="/" className="hover:text-[#D4AF37]">Home</Link>
          <span>/</span>
          <span className="text-[#D4AF37]">{country.name}</span>
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
        <h1 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-tight">
          {content.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
          {content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-[3rem] border border-[#D4AF37]/20 shadow-xl shadow-[#D4AF37]/5">
            <h2 className="text-3xl font-black text-black mb-6 tracking-tight">{content.why}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {content.whyText}
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {['temp-mail', 'disposable-email', '10-minute-mail', 'trash-mail'].map(kw => (
                <Link key={kw} to={`/seo/${kw}`} className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest hover:underline">
                  #{kw.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
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
            <h2 className="text-3xl font-black mb-6 tracking-tight">Get Started in {country.name}</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Don't wait any longer. Protect your privacy today with our <strong>temp mail pro</strong> service. It's fast, free, and incredibly easy to use.
            </p>
            <Link to="/" className="inline-block px-8 py-4 bg-[#D4AF37] text-black font-black rounded-2xl hover:brightness-110 transition-all uppercase tracking-widest">
              {content.cta}
            </Link>
          </div>
        </div>

        <div className="my-12 p-8 bg-[#D4AF37]/5 rounded-[2rem] border border-[#D4AF37]/20">
          <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">Global Availability & Related Searches</h3>
          <p className="mb-6">Explore our service across different regions and related topics:</p>
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
      </div>

      <InfoDump onSelectArticle={() => {}} onNavigateBlog={() => {}} />

      <div className="bg-[#111] py-24 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Ready to protect your privacy?</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join millions of users in <strong>{country.name}</strong> who trust our <strong>temp mail generator</strong> for their daily privacy needs.
        </p>
        <Link to="/" className="inline-block px-12 py-6 bg-[#D4AF37] text-black font-black text-xl rounded-[2rem] hover:scale-105 transition-all uppercase tracking-widest shadow-2xl shadow-[#D4AF37]/20">
          Get Your Free Email Now
        </Link>
      </div>
    </div>
  );
};

export default CountryPage;
