import React from 'react';

const Statistics: React.FC = () => {
    return (
        <div className="w-full bg-[#111111] py-24 px-4 border-t border-b border-[#D4AF37]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
                        Global <span className="text-[#D4AF37]">Impact</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Our temporary email service is trusted worldwide to protect privacy and prevent spam. Here is a look at our global statistics and performance metrics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Chart 1: Spam Blocked */}
                    <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-[#D4AF37]/10 shadow-2xl relative group hover:border-[#D4AF37]/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full -z-10 group-hover:bg-[#D4AF37]/10 transition-all duration-500"></div>
                        <h3 className="text-[#D4AF37] text-sm font-black uppercase tracking-widest mb-2">Spam Blocked</h3>
                        <div className="text-4xl font-black text-white mb-8">2.4B+</div>
                        
                        {/* Simple Bar Chart */}
                        <div className="flex items-end gap-2 h-32 mt-auto">
                            {[40, 55, 45, 70, 65, 85, 100].map((height, i) => (
                                <div key={i} className="flex-1 bg-[#D4AF37]/20 rounded-t-md relative group-hover:bg-[#D4AF37]/30 transition-all duration-300" style={{ height: `${height}%` }}>
                                    <div className="absolute bottom-0 left-0 w-full bg-[#D4AF37] rounded-t-md transition-all duration-700" style={{ height: `${height * 0.8}%` }}></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-widest mt-4 font-bold">
                            <span>Mon</span>
                            <span>Sun</span>
                        </div>
                    </div>

                    {/* Chart 2: Active Users */}
                    <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-[#D4AF37]/10 shadow-2xl relative group hover:border-[#D4AF37]/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full -z-10 group-hover:bg-[#D4AF37]/10 transition-all duration-500"></div>
                        <h3 className="text-[#D4AF37] text-sm font-black uppercase tracking-widest mb-2">Daily Active Users</h3>
                        <div className="text-4xl font-black text-white mb-8">1.2M+</div>
                        
                        {/* Simple Line Chart (SVG) */}
                        <div className="h-32 mt-auto relative w-full">
                            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                <path d="M0,35 Q10,25 20,30 T40,20 T60,15 T80,25 T100,5" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_5px_5px_rgba(212,175,55,0.3)]" />
                                <path d="M0,40 L0,35 Q10,25 20,30 T40,20 T60,15 T80,25 T100,5 L100,40 Z" fill="url(#chart-gradient)" opacity="0.3" />
                                <defs>
                                    <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#D4AF37" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                                {/* Data Points */}
                                <circle cx="20" cy="30" r="2" fill="#111" stroke="#D4AF37" strokeWidth="1.5" />
                                <circle cx="40" cy="20" r="2" fill="#111" stroke="#D4AF37" strokeWidth="1.5" />
                                <circle cx="60" cy="15" r="2" fill="#111" stroke="#D4AF37" strokeWidth="1.5" />
                                <circle cx="80" cy="25" r="2" fill="#111" stroke="#D4AF37" strokeWidth="1.5" />
                                <circle cx="100" cy="5" r="2" fill="#111" stroke="#D4AF37" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-widest mt-4 font-bold">
                            <span>Last Month</span>
                            <span>Today</span>
                        </div>
                    </div>

                    {/* Chart 3: Emails Generated */}
                    <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-[#D4AF37]/10 shadow-2xl relative group hover:border-[#D4AF37]/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full -z-10 group-hover:bg-[#D4AF37]/10 transition-all duration-500"></div>
                        <h3 className="text-[#D4AF37] text-sm font-black uppercase tracking-widest mb-2">Emails Generated</h3>
                        <div className="text-4xl font-black text-white mb-8">50M+</div>
                        
                        {/* Simple Area Chart */}
                        <div className="flex items-end gap-1 h-32 mt-auto">
                            {[20, 25, 30, 28, 35, 45, 50, 60, 55, 70, 85, 100].map((height, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-[#D4AF37]/10 to-[#D4AF37]/40 rounded-t-sm relative group-hover:to-[#D4AF37]/60 transition-all duration-300" style={{ height: `${height}%` }}>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-widest mt-4 font-bold">
                            <span>Jan</span>
                            <span>Dec</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
