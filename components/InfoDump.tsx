import React, { useState } from 'react';
import { articles } from '../data/articles.tsx';
import { Article } from '../types.ts';
import { Icons } from './Icons.tsx';
import { useTranslation } from '../LanguageContext.tsx';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-black text-black mb-8 tracking-tighter leading-tight">{children}</h2>
);

const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 mt-12 tracking-tight">{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-gray-700 mb-6 leading-relaxed text-lg font-normal">{children}</p>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start mb-6 group">
        <div className="mr-5 mt-1 bg-[#D4AF37]/10 text-[#D4AF37] p-2 rounded-xl group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
            <Icons.Check className="w-4 h-4" />
        </div>
        <span className="text-gray-700 flex-1 text-lg leading-relaxed">{children}</span>
    </li>
);

interface InfoDumpProps {
    onSelectArticle: (article: Article) => void;
    onNavigateBlog: () => void;
}

const InfoDump: React.FC<InfoDumpProps> = ({ onSelectArticle, onNavigateBlog }) => {
    const { t } = useTranslation();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const faqItems = [
        { q: "Are temp mail safe to use?", a: "Yes, temp mail is generally safe for signing up for newsletters or testing services. Our platform ensures your real identity remains hidden and your primary inbox stays clean from spam." },
        { q: "What are temp mail services used for?", a: "Temp mail services are used to receive emails at a temporary address that self-destructs after a certain time. This is perfect for avoiding spam and protecting your privacy online." },
        { q: "Is it safe to use temp mail for social media?", a: "Many users use temp mail for Facebook, Instagram, and Discord to avoid linking their personal email to multiple accounts. However, remember that if you lose access to the temp mail, you might lose the account." },
        { q: "Does temp mail work for ChatGPT and AI platforms?", a: "Yes, our temp mail generator works perfectly with ChatGPT, Gemini, and other AI platforms that require email verification for sign-up." },
        { q: "How long does temp mail last?", a: "Our temp mail addresses last as long as you keep the browser tab open or until you manually delete them. Some services like 10 minute mail have a fixed timer, but we offer more flexibility." },
        { q: "Can temp mail send emails?", a: "Most temp mail services, including ours, are primarily for receiving emails to protect your privacy. Sending emails from a temp address is often restricted to prevent abuse." },
        { q: "Are temp mail emails reused?", a: "No, we generate unique addresses for every session to ensure that your private communications remain private and are never seen by others." },
        { q: "Are temp emails legal?", a: "Yes, using temporary or disposable email addresses is completely legal and is a common practice for privacy-conscious individuals worldwide." },
    ];

    return (
        <div className="bg-white text-gray-800 py-24 border-t border-[#D4AF37]/10 relative">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Introduction Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-8">
                        <SectionTitle>The Ultimate Temp Mail and Trash Mail Generator</SectionTitle>
                        
                        <Paragraph>
                            Experience the best <strong>temp mail</strong> and <strong>trash mail generator</strong>. Get free disposable email at temp mail instantly. Our service provides secure e-mail temporary services for everyone. Whether you need a <strong>10 minute mail</strong> or a long-term <strong>throwaway email</strong>, we have you covered.
                        </Paragraph>

                        <Paragraph>
                            Many forums, Wi-Fi owners, websites, and blogs ask visitors to register before they can view content. Our <strong>Temp Mail Generator</strong> is the most advanced <strong>throwaway email service</strong> that helps you avoid spam and stay safe with <strong>e-mail disposable</strong> addresses. It is also known as <strong>tempmail</strong>, <strong>10minutemail</strong>, <strong>10minmail</strong>, <strong>fake-mail</strong>, <strong>fake email generator</strong>, <strong>burner mail</strong>, or <strong>trash-mail</strong>.
                        </Paragraph>

                        <SubTitle>Why Choose Our Temp Mail Pro Service?</SubTitle>
                        <Paragraph>
                            Our platform is designed for speed and security. We provide a <strong>gmail temp mail alternative</strong> that is <strong>100% free</strong> and requires <strong>no signup</strong>. With our <strong>live anonymity system</strong>, your <strong>active burner ID</strong> is protected by industry-standard encryption.
                        </Paragraph>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                                "No Signup Required",
                                "100% Private & Secure",
                                "Bypass Platform Filters",
                                "Custom Domain Support",
                                "High-Speed Reception",
                                "Self-Destructing Inbox"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-[#FAFAFA] rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                    <span className="text-sm font-bold text-gray-800">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SEO Content Block */}
                <div className="mb-24 prose prose-lg max-w-none text-gray-600">
                    <h2 className="text-4xl font-black text-black mb-8">What is Disposable Temporary E-mail?</h2>
                    <p>
                        Disposable email - is a free email service that allows to receive email at a temporary address that self-destructed after a certain time elapses. It is also known by names like : tempmail, 10minutemail, 10minmail, throwaway email, fake-mail , fake email generator, burner mail or trash-mail. Many forums, Wi-Fi owners, websites and blogs ask visitors to register before they can view content, post comments or download something. Temp-Mail - is most advanced throwaway email service that helps you avoid spam and stay safe.
                    </p>

                    <h2 className="text-4xl font-black text-black mb-8">Popular Articles</h2>
                    <ul className="list-disc pl-6 mb-8">
                        <li>Private domains. How to get your own Temporary Email (2021)</li>
                        <li>How to receive SMS otp verification online in 5 min. Guide. (2021)</li>
                        <li>New Temp Mail app for Android (2021)</li>
                        <li>Top mobile games for Android and registration via anonymous email</li>
                        <li>What is ransomware. The differences between ransomware and viruses and how to protect yourself from ransomware</li>
                        <li>Disposable email for a Social media (Facebook, etc...)</li>
                        <li>Secure Online Shopping with Temp Mail (2026)</li>
                    </ul>

                    <h2 className="text-4xl font-black text-black mb-8">The Tech behind Disposable Email Addresses</h2>
                    <p>Everyone owns an email address each and every hour, for everything from connecting at work, with business prospects, reaching out to friends and colleagues using the email address as an online passport. Nearly 99% of all apps and services we sign-up today required an email address, likewise to most shoppers loyalty cards, contest and offer entries, and more.</p>
                    <p>We all enjoy having an email address, but getting tons of spam emails each day doesn’t feel comfortable. Furthermore, it’s entirely common for stores to have their databases hacked, leaving your business email address at risk and more likely to end up on spam lists. Still, nothing done online is 100% private. Thus you need to protect your email contact identity and best done using disposable emails address.</p>

                    <h2 className="text-4xl font-black text-black mb-8">So, What Is A Disposable Email Address?</h2>
                    <p>Recently, I found a bounce rate complex than usual on my latest email blast! I later realized the surge of users (or bots) signing up for my services hiding their real identity using disposable mail addresses.</p>
                    <p>Disposable email address (DEA) technically means an approach where a user’s with a unique email address gets a temporary email address for your current contact. The DEA allow the creation of an email address that passes validity need to sign-up for services and website without having to show your true identity.</p>
                    <p>Disposable emails address if compromised or used in connection with email abuse online, the owner can’t be tied to the abuse and quickly cancel its application without affecting other contacts. With temporary mail, you can you receive your emails from the fake emails in your genuine emails address for a specified time set. The fake email address is simply a through-away email, temporary email set and self-destructs email.</p>

                    <h2 className="text-4xl font-black text-black mb-8">Why would you need a fake email address?</h2>
                    <p>You must have noted services such as Amazon Prime, Hulu and Netflix allow limited-time test runs(trials), however, if still determined to use the services all you need is a disposable email address. Technically, you can extend your trial usage using a different email address linked to your original (genuine) after the trial period expires.</p>
                    <p>An offline or online retailer tend to demand an email address to take advantage of their offers, however, this result in an unwanted deluge of spam promotional emails that you could avoid. Temporary email address makes it easy to cut out those irritating messages you are still receiving.</p>
                    <p>Technically, the idea of a temporary email address conjures up with black hat hackers and underworld internet, but there are convincing reason to us fake email services.</p>
                    <p>If you are looking for legitimate reasons to use a disposable email address here’s a few:</p>
                    <ul className="list-disc pl-6 mb-8">
                        <li><strong>Sign-Up For Store Loyalty Card:</strong> If you don’t want to get promotional emails from the store adverting new products, use a disposable email address instead of your business email address, and you rule out spam emails. If the store gets hacked for email, you real email address won’t get stolen.</li>
                        <li><strong>Test Your App:</strong> You just completed coding a web app, and you want to test it comprehensively before releasing it for sale, you can easily get 100 disposable emails, create dummy accounts and test it yourself other than hiring unreliable users online to test the app.</li>
                        <li><strong>Sign-Up For Double Account With A Web App:</strong> You need another IFTTT account to program a second Twitter account run for your marketing site. A new account needs a different mail from your default, to rule out managing a new email inbox, get a new disposable email address at temp-mail.org</li>
                        <li><strong>Eliminate Spam:</strong> A Disposable email address is a very useful tool against spam, especially, for users who consistently access web forms, forums and discussion groups you can curb spam to an absolute minimum with a disposable email address.</li>
                    </ul>

                    <h2 className="text-4xl font-black text-black mb-8">How to Choose a Disposable Email?</h2>
                    <p>The best fake email provider should:</p>
                    <ul className="list-disc pl-6 mb-8">
                        <li>Allow users create temporary emails address at the click of a button.</li>
                        <li>No registration is registration or identity information about the user.</li>
                        <li>The email address should remain anonymous.</li>
                        <li>Offer more than one email address (as many as you may want).</li>
                        <li>Offers temporarily email stored (temporal email inbox at user’s disposal).</li>
                        <li>Straightforward and functional design to get a mundane email.</li>
                        <li>Provider random account and users can choose an address of choice.</li>
                    </ul>
                    <p>Thus stay spam free and save time with temp-mail.org your favorite email service.</p>

                    <h2 className="text-4xl font-black text-black mb-8">How to Use Disposable Email Address?</h2>
                    <p>Users choose to get disposable email address by creating a new email account with their current email provider’s such as Gmail, but the account comes with many challenges such as you will have to manage emails new account. Users, who opt for free mail services by creating a new account, put up with a new email address.</p>
                    <p>It’d work if you had one email address and a few disposable emails from temp-mail.org and managed one account inbox.</p>
                    <p>The amazing thing about a disposable email address is you can forward directly to your real email account. In case the disposable email address is compromised, and you are suspicious of one of your contacts you can have those emails sent directly to your trash, and for those necessary connections have them sent directly to your real email address inbox.</p>

                    <h2 className="text-4xl font-black text-black mb-8">To Conclude:</h2>
                    <p>Have a disposable mail address system set up in a fantastic way to make sure when you participate in online wikis, chat rooms, and file sharing services and bulletin boards forums your real identity is never disclosed and never sold to anyone to avoid mail spam with Temp mail generator.</p>
                </div>


                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <SectionTitle>{t('faqTitle')}</SectionTitle>
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden transition-all border border-gray-100 shadow-sm">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    className="w-full flex justify-between items-center text-left p-6 md:p-8 focus:outline-none"
                                >
                                    <h3 className="font-black text-lg text-black pr-8 tracking-tight">{item.q}</h3>
                                    <div className={`p-2 rounded-full border border-gray-100 transition-transform duration-500 ${openFaqIndex === index ? 'rotate-180 bg-[#D4AF37] text-white' : 'text-gray-400'}`}>
                                        <Icons.ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoDump;