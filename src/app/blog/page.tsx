import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const SectionHeader = ({ title, light = false }: { title: string; light?: boolean }) => (
    <div className="flex items-center gap-2 mb-8">
        <div className="w-[2.5px] h-3.5 bg-brand-yellow"></div>
        <h2 className={`font-bold uppercase tracking-[0.2em] text-[10px] ${light ? 'text-white' : 'text-brand-dark-navy'}`}>{title}</h2>
    </div>
);

const PlayButton = () => (
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[11px] border-l-brand-dark-navy border-b-[6px] border-b-transparent ml-1"></div>
        </div>
    </div>
);

export default function BlogPage() {
    const categories = ["All", "Headlines", "Breaking News", "GTV Content", "Politics", "International", "Entertainment", "Health", "Sports"];

    return (
        <div className="min-h-screen bg-white font-gudlak overflow-x-hidden selection:bg-brand-yellow selection:text-brand-dark-navy">
            {/* --- TOP BAR --- */}
            <div className="bg-[#0B1530] text-white/60 px-16 py-2.5 flex justify-between items-center text-[9px] font-prompt font-medium tracking-wider border-b border-white/5">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-brand-yellow rounded-full"></div>
                        <span>Monday, April 27, 2026</span>
                    </div>
                    <span>Abuja, Nigeria</span>
                    <span>32C</span>
                    <span className="ml-4 opacity-30 italic font-light tracking-normal">Accelerating African Narrative</span>
                </div>
                <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-6 h-6 bg-white/5 rounded flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer border border-white/5">
                            <div className="w-3 h-3 bg-white/40 rounded-sm"></div>
                        </div>
                    ))}
                </div>
            </div>

            <Navbar activePage="Blog" />

            {/* --- MEDIA HERO --- */}
            <section className="bg-brand-dark-navy text-white px-16 pt-12 pb-24">
                <div className="text-[9px] uppercase tracking-[0.25em] text-white/20 mb-6 font-prompt font-bold">
                    Home <span className="mx-2">›</span> What we do <span className="mx-2">›</span> <span className="text-brand-yellow">Blog</span>
                </div>

                <h1 className="text-4xl font-bold mb-4 tracking-tight">Blog</h1>
                <p className="text-white/70 text-[15px] max-w-xl mb-12 font-prompt font-light leading-relaxed">
                    Stories that shape narratives. Content that moves people across Africa and beyond.
                </p>

                <div className="flex flex-wrap gap-2 mb-16">
                    {categories.map((cat) => (
                        <button key={cat} className={`px-6 py-2 rounded-full border text-[9.5px] font-bold uppercase tracking-wider transition-all ${cat === 'All' ? 'bg-brand-yellow text-brand-dark-navy border-brand-yellow' : 'border-white/10 text-white/60 hover:border-white hover:text-white'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-12 gap-5 h-[450px]">
                    <div className="col-span-8 bg-brand-vibrant-blue rounded-xl shadow-2xl"></div>
                    <div className="col-span-4 flex flex-col gap-5">
                        <div className="flex-1 bg-brand-vibrant-blue rounded-xl"></div>
                        <div className="flex-1 bg-brand-vibrant-blue rounded-xl"></div>
                    </div>
                </div>
            </section>

            {/* --- RED TICKER --- */}
            <div className="bg-[#D42027] text-white py-4 px-16 flex items-center overflow-hidden">
                <div className="bg-white text-[#D42027] font-black px-2.5 py-1 text-[9px] rounded-sm tracking-tight mr-8 shrink-0">BREAKING</div>
                <div className="flex gap-16 whitespace-nowrap text-[12px] font-prompt font-medium tracking-tight">
                    <span>Uganda Airlines flight makes emergency return after bird strike ·</span>
                    <span>AI Health Messaging in Kenya and Nigeria: A Surprising Verdict ·</span>
                    <span>Airbus Races to Fix Major Software Glitch in A32...</span>
                </div>
            </div>

            {/* --- BREAKING NEWS --- */}
            <section className="px-16 py-28 bg-[#F8F9FF]">
                <SectionHeader title="Breaking News" />
                <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-5 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="aspect-video bg-brand-vibrant-blue relative p-4">
                            <span className="bg-[#D42027] text-white text-[8px] px-3 py-1 rounded-sm font-bold uppercase tracking-widest font-prompt">Breaking News</span>
                        </div>
                        <div className="p-10">
                            <h3 className="text-[22px] font-bold text-brand-dark-navy mb-6 leading-tight">Rethinking Travel in a Warming World</h3>
                            <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest font-prompt">Climate • 2 days ago</p>
                        </div>
                    </div>

                    <div className="col-span-7 grid grid-cols-2 gap-x-12 gap-y-12">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex gap-5 pb-6 border-b border-gray-100 last:border-0 hover:bg-white transition-colors cursor-pointer group">
                                <div className="w-24 h-24 bg-gray-200 rounded-xl shrink-0 group-hover:scale-95 transition-transform"></div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-brand-vibrant-blue font-bold text-[8.5px] uppercase tracking-widest mb-2 font-prompt">Media</span>
                                    <h4 className="text-[13px] font-bold text-brand-dark-navy leading-snug">World Autism Day: Specialised school shortage hinders education</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- GTV CONTENT --- */}
            <section className="bg-brand-dark-navy px-16 py-28 text-white">
                <SectionHeader title="GTV Content" light />
                <div className="grid grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                            <div className="aspect-video bg-brand-vibrant-blue relative">
                                <PlayButton />
                            </div>
                            <div className="p-8 text-brand-dark-navy">
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3 font-prompt">Politics · Videos</p>
                                <h3 className="text-[15px] font-bold leading-snug mb-5">Chief Edward David Onoja: Reflecting on Leadership, Tinubu's Vision...</h3>
                                <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest font-prompt">2 days ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- POLITICS --- */}
            <section className="px-16 py-28 bg-[#F8F9FF]">
                <SectionHeader title="Politics" />
                <div className="grid grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
                            <div className="h-56 bg-gray-300"></div>
                            <div className="p-8">
                                <p className="text-[9px] font-bold text-brand-dark-navy uppercase tracking-widest mb-3 font-prompt">Politics</p>
                                <h3 className="text-[15px] font-bold text-brand-dark-navy leading-snug mb-5">PDP Convention Shows True Power Is Structure, Not Social Media Noise</h3>
                                <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest font-prompt">2 days ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- INTERNATIONAL --- */}
            <section className="px-16 py-28 bg-white">
                <SectionHeader title="International" />
                <div className="grid grid-cols-12 gap-16">
                    <div className="col-span-5 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="aspect-video bg-brand-vibrant-blue"></div>
                        <div className="p-10">
                            <p className="text-[9px] font-bold text-brand-dark-navy uppercase tracking-widest mb-4 font-prompt">International · Aviation</p>
                            <h3 className="text-[20px] font-bold text-brand-dark-navy mb-5 leading-tight">Uganda Airlines Emergency Return. What Aviation Experts Say</h3>
                            <p className="text-gray-500 font-prompt text-[13px] mb-8 leading-relaxed font-light">Specialists weigh in on bird strike risks and safety protocols across East Africa.</p>
                            <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest font-prompt">2 days ago</p>
                        </div>
                    </div>
                    <div className="col-span-7 grid grid-cols-2 gap-x-12 gap-y-12">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex gap-5 pb-6 border-b border-gray-100 last:border-0">
                                <div className="w-24 h-24 bg-gray-200 rounded-xl shrink-0"></div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-brand-vibrant-blue font-bold text-[8.5px] uppercase tracking-widest mb-2 font-prompt">Science · Global</span>
                                    <h4 className="text-[13px] font-bold text-brand-dark-navy leading-snug">AI Health Messaging in Kenya and Nigeria: A Surprising Verdict</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ENTERTAINMENT & HEALTH --- */}
            <section className="px-16 py-28 bg-[#F8F9FF] grid grid-cols-2 gap-20">
                <div>
                    <SectionHeader title="Entertainment" />
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 mb-10">
                        <div className="aspect-video bg-brand-vibrant-blue relative"><PlayButton /></div>
                        <div className="p-8">
                            <p className="text-[9px] font-bold text-brand-dark-navy uppercase tracking-widest mb-3 font-prompt">Music · Culture</p>
                            <h3 className="text-[16px] font-bold text-brand-dark-navy leading-snug">Tributes Flow for Late Musician Yullander</h3>
                        </div>
                    </div>
                    <div className="space-y-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex gap-5 pb-6 border-b border-gray-200 last:border-0">
                                <div className="w-20 h-20 bg-gray-200 rounded-xl shrink-0"></div>
                                <h4 className="text-[13px] font-bold text-brand-dark-navy leading-snug self-center">AI Health Messaging in Kenya and Nigeria...</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <SectionHeader title="Health" />
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 mb-10">
                        <div className="aspect-video bg-brand-vibrant-blue relative"><PlayButton /></div>
                        <div className="p-8">
                            <p className="text-[9px] font-bold text-brand-dark-navy uppercase tracking-widest mb-3 font-prompt">Health · SDGs</p>
                            <h3 className="text-[16px] font-bold text-brand-dark-navy leading-snug">World Autism Day: Specialised Schools Shortage</h3>
                        </div>
                    </div>
                    <div className="space-y-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex gap-5 pb-6 border-b border-gray-200 last:border-0">
                                <div className="w-20 h-20 bg-gray-200 rounded-xl shrink-0"></div>
                                <h4 className="text-[13px] font-bold text-brand-dark-navy leading-snug self-center">AI Health Messaging in Kenya and Nigeria...</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SPORTS --- */}
            <section className="bg-brand-dark-navy px-16 py-28 text-white">
                <SectionHeader title="Sports" light />
                <div className="grid grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden">
                            <div className="h-48 bg-brand-vibrant-blue"></div>
                            <div className="p-8 text-brand-dark-navy">
                                <p className="text-[9px] font-bold text-brand-dark-navy uppercase tracking-widest mb-3 font-prompt">Football</p>
                                <h3 className="text-[15px] font-bold leading-tight">Bruno Fernandes Applauds Fans After Crucial Victory</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- COMPACT CTA BANNER --- */}
            <div className="bg-brand-vibrant-blue text-white px-20 py-24 flex items-center justify-between font-prompt">
                <div className="flex flex-col gap-3 max-w-[300px]">
                    <h2 className="text-[26px] font-bold uppercase tracking-tight leading-none font-gudlak">Advertise with GTV AFRIK</h2>
                    <p className="text-[8.5px] font-bold text-white/50 uppercase tracking-[0.35em]">Reach Africa's decision makers & global diaspora</p>
                </div>

                <div className="h-20 w-[1px] bg-white/10 mx-12"></div>

                <div className="flex flex-col gap-3 flex-1 max-w-[300px]">
                    <h2 className="text-[26px] font-bold uppercase tracking-tight leading-none font-gudlak">Partner with us</h2>
                    <p className="text-[8.5px] font-bold text-white/50 uppercase tracking-[0.35em]">Advocacy, Campaigns & Media Production</p>
                </div>

                <div className="flex gap-5 items-center">
                    <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">Contact us</button>
                    <button className="bg-brand-yellow text-brand-dark-navy px-8 py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-xl">Book an Appointment</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}