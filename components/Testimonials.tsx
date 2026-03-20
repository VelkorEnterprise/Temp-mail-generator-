import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Privacy Advocate",
      text: "Temp Mail Pro saved my primary inbox from endless spam. The instant 10-minute mail feature is incredibly fast, dependable, and 100% secure. Highly recommended for anyone valuing their digital privacy.",
      rating: 5,
      date: "2026-03-15"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      text: "The best disposable email generator on the market. I use it daily for QA testing and bypassing aggressive social media verifications. No signup required makes it a frictionless experience.",
      rating: 5,
      date: "2026-03-10"
    },
    {
      name: "Elena Rodriguez",
      role: "Digital Marketer",
      text: "I've tried dozens of trash mail services, but this one is unmatched in speed and reliability. The premium custom domains ensure my burner emails are never blocked by major platforms like ChatGPT.",
      rating: 5,
      date: "2026-03-18"
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tighter uppercase">Trusted by Millions Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">See why over 1,000,000+ users rely on our disposable email service daily for their privacy and security needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <article key={i} className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100 border border-gray-100 relative" itemScope itemType="https://schema.org/Review">
              <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication">
                <meta itemProp="name" content="Temp Mail Generator" />
              </div>
              <div className="flex items-center gap-1 mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={String(t.rating)} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed" itemProp="reviewBody">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-black text-gray-400">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-black text-black block" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{t.name}</span>
                  </cite>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
              <meta itemProp="datePublished" content={t.date} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
