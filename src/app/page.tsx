import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const SectionHeader = ({ title, light = false }: { title: string; light?: boolean }) => (
  <div className="flex items-center gap-2 mb-6">
    <div className="w-[2px] h-3.5 bg-brand-yellow"></div>
    <h2 className={`font-bold uppercase tracking-[0.15em] text-[9.5px] ${light ? 'text-white' : 'text-brand-dark-navy'}`}>{title}</h2>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-prompt selection:bg-brand-yellow selection:text-brand-dark-navy">
      <Navbar activePage="Home" />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Navy Background with Diagonal Split */}
        <div className="absolute inset-0 bg-brand-dark-navy" style={{ clipPath: 'polygon(0 0, 58% 0, 48% 100%, 0% 100%)' }}></div>

        <div className="container mx-auto px-16 relative z-10 grid grid-cols-12 items-center h-full">
          {/* Left Text Content */}
          <div className="col-span-6 text-white pr-10">
            <div className="inline-block bg-brand-yellow text-brand-dark-navy px-2.5 py-1 rounded-sm text-[8.5px] font-bold uppercase tracking-[0.2em] mb-8 mt-12">
              Accelerating African Narrative
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight mb-8">
              We Shape How Africa Is <br />
              <span className="text-brand-yellow">Seen, Heard</span> and Known.
            </h1>

            <p className="font-prompt font-light text-[14px] text-white/60 max-w-md mb-12 leading-relaxed">
              GTVAFRIK is a Pan-African media and communications company built to shape narratives, amplify voices, and We position brands where it matters most, deeply locally rooted, yet globally positioned.
            </p>

            <div className="flex gap-4 mb-20">
              <button className="bg-brand-yellow text-brand-dark-navy px-6 py-2.5 rounded-sm font-bold text-[9px] uppercase tracking-widest transition-all">
                Work with us
              </button>
              <button className="border border-white/20 text-white px-6 py-2.5 rounded-sm font-bold text-[9px] uppercase tracking-widest hover:bg-white/5 transition-all">
                Explore our work
              </button>
            </div>

            <div className="flex gap-12">
              <div>
                <h4 className="text-xl font-bold text-brand-yellow mb-1 tracking-tight">X+</h4>
                <p className="text-[8px] font-prompt font-medium uppercase tracking-widest text-white/30">Years of Impact</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-yellow mb-1 tracking-tight">XX+</h4>
                <p className="text-[8px] font-prompt font-medium uppercase tracking-widest text-white/30">Clients</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-yellow mb-1 tracking-tight">XX+</h4>
                <p className="text-[8px] font-prompt font-medium uppercase tracking-widest text-white/30">Clients</p>
              </div>
            </div>
          </div>

          {/* Right Visual Placeholder - SHARP CORNERS */}
          <div className="col-span-6 flex justify-end items-center h-full">
            {/* <div className="w-[90%] h-[75%] bg-[#F2F2F2] flex items-center justify-center border border-gray-100">
              <span className="text-gray-300 text-[10px] uppercase font-prompt tracking-[0.5em] font-medium">Main Visual Placeholder</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* --- PARTNERS LOGO STRIP --- */}
      <section className="bg-white py-14 border-b border-gray-50">
        <div className="px-16">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-dark-navy/25 font-prompt">Partners & Clients</p>
        </div>
      </section>

      {/* --- WHAT WE DO --- */}
      <section className="bg-brand-light-blue py-32 px-16 grid grid-cols-2 gap-24 items-center">
        <div>
          <SectionHeader title="What we do" />
          <div className="bg-brand-yellow text-brand-dark-navy px-2 py-0.5 rounded-sm inline-block text-[8px] font-bold uppercase tracking-widest mb-6">
            Media
          </div>
          <h2 className="text-[32px] font-bold text-brand-dark-navy leading-[1.1] mb-8">
            Where African Stories Meet <br /> World-Class Production.
          </h2>
          <p className="font-prompt font-light text-[14px] text-brand-dark-navy/50 leading-relaxed mb-10 max-w-md">
            From documentaries to digital content and commercial productions, we craft media that doesn't just inform, it resonates. We tell African stories with the depth, nuance, and artistry they deserve.
          </p>
          <div className="flex gap-4">
            <button className="bg-brand-yellow text-brand-dark-navy px-6 py-2.5 rounded-sm font-bold text-[9px] uppercase tracking-widest shadow-md">
              See more
            </button>
            <button className="border border-brand-dark-navy/10 text-brand-dark-navy px-6 py-2.5 rounded-sm font-bold text-[9px] uppercase tracking-widest">
              Contact us
            </button>
          </div>
        </div>
        <div className="h-[450px] bg-brand-vibrant-blue shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </section>

      {/* --- FEATURED CONTENT --- */}
      <section className="py-32 px-16 bg-white">
        <SectionHeader title="Featured Content" />
        <div className="flex gap-2.5 mb-14">
          {["All", "Latest Shows", "Documentaries", "Podcasts", "Short Films"].map((tab) => (
            <button key={tab} className={`px-5 py-1.5 rounded-full border text-[9px] font-bold uppercase tracking-widest transition-all ${tab === 'All' ? 'bg-brand-yellow text-brand-dark-navy border-brand-yellow' : 'border-gray-100 text-gray-400 hover:border-brand-dark-navy'}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[
            { tag: "Featured · Documentary", title: "Rethinking Travel in a Warming World — Africa's Climate Response" },
            { tag: "Podcast", title: "Chief Edward David Onoja: Reflecting on Leadership, Tinubu's Vision, and Nigeria's Future" },
            { tag: "Short Film", title: "They Didn't Steal Slaves — They Stole Kings" }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100/50 shadow-sm hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-brand-vibrant-blue relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-brand-dark-navy border-b-[5px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[8px] font-prompt font-bold text-brand-dark-navy/30 uppercase tracking-widest mb-3">{item.tag}</p>
                <h3 className="text-[14px] font-bold text-brand-dark-navy leading-snug mb-5">{item.title}</h3>
                <p className="text-[8px] font-prompt text-gray-300 uppercase tracking-widest font-medium">2 days ago</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GTV IMPACT --- */}
      <section className="bg-brand-dark-navy py-32 px-16 grid grid-cols-2 gap-10 items-center">
        <div></div>
        <div>
          <SectionHeader title="GTV Impact" light />
          <h2 className="text-[32px] font-bold text-white leading-tight mb-12">
            Measuring Our <span className="text-brand-yellow">Impact</span> Across the Continent.
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { val: "50k+", sub: "Youths reached" },
              { val: "120+", sub: "Project Delivered" },
              { val: "18+", sub: "Countries Reached" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-8">
                <h3 className="text-3xl font-bold text-brand-yellow mb-2">{stat.val}</h3>
                <p className="text-[9px] font-prompt font-medium uppercase tracking-widest text-white/20">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="bg-brand-vibrant-blue py-32 px-16">
        <div className="grid grid-cols-12 gap-16 items-center">
          <div className="col-span-7">
            <SectionHeader title="Ready to work together?" light />
            <h2 className="text-[44px] font-bold text-white leading-[1.05] mb-8">
              Let's Shape Africa's <br /> Story Together.
            </h2>
            <p className="font-prompt font-light text-[15px] text-white/60 max-w-md leading-relaxed mb-12">
              Whether you're a multinational, a government agency, or an African brand — GTV Afrik gives your message the reach, depth, and credibility it deserves.
            </p>
            <div className="flex gap-4">
              <button className="bg-brand-yellow text-brand-dark-navy px-8 py-3 rounded-sm font-bold text-[9px] uppercase tracking-widest">
                Book an Appointment
              </button>
              <button className="border border-white/10 text-white px-8 py-3 rounded-sm font-bold text-[9px] uppercase tracking-widest">
                Contact us
              </button>
            </div>
          </div>
          <div className="col-span-5 flex flex-col gap-3">
            {[
              { label: "ADVERTISE WITH US", sub: "Reach pan-African & diaspora audiences" },
              { label: "PARTNER WITH US", sub: "Advocacy, campaigns & media production" },
              { label: "BOOK AN APPOINTMENT", sub: "Talk to our team about your goals" }
            ].map((link, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-6 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-10 bg-gray-400/10"></div>
                  <div>
                    <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">{link.label}</h4>
                    <p className="text-[8px] font-prompt text-white/20 uppercase tracking-widest mt-1">{link.sub}</p>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform opacity-20">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}