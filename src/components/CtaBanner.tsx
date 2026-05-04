import Link from "next/link";

export default function CtaBanner() {
    return (
        <section className="bg-brand-vibrant-blue text-white px-16 py-16 flex items-center justify-between font-prompt">
            <div className="flex flex-col gap-2 max-w-[320px]">
                <h2 className="text-[22px] font-bold uppercase tracking-tight leading-none font-gudlak">Advertise with GTV AFRIK</h2>
                <p className="text-[9px] font-bold text-white/50 uppercase tracking-[0.3em]">Reach Africa's decision makers & global diaspora</p>
            </div>

            <div className="h-16 w-[1px] bg-white/10 mx-10"></div>

            <div className="flex flex-col gap-2 flex-1 max-w-[320px]">
                <h2 className="text-[22px] font-bold uppercase tracking-tight leading-none font-gudlak">Partner with us</h2>
                <p className="text-[9px] font-bold text-white/50 uppercase tracking-[0.3em]">Advocacy, Campaigns & Media Production</p>
            </div>

            <div className="flex gap-4 items-center">
                <button className="border border-white/20 text-white px-6 py-2.5 rounded-md font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                    Contact us
                </button>
                <button className="bg-brand-yellow text-brand-dark-navy px-6 py-2.5 rounded-md font-bold text-[10px] uppercase tracking-widest shadow-lg hover:brightness-110">
                    Book an Appointment
                </button>
            </div>
        </section>
    );
}