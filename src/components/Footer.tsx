import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const footerLinks = {
        SERVICES: ["Advocacy", "Media", "Marketing", "Mobility", "Advertising"],
        CONTENT: ["Advocacy", "Media", "Marketing", "Mobility", "Advertising"],
        COMPANY: ["Advocacy", "Media", "Marketing", "Mobility", "Advertising"],
        CONTACT: ["Advocacy", "Media", "Marketing", "Mobility", "Advertising"],
    };

    return (
        <footer className="bg-brand-dark-navy text-white px-16 pt-24 pb-12">
            <div className="grid grid-cols-12 gap-12 mb-20">
                {/* Brand Section */}
                <div className="col-span-4">
                    <Image src="/logo.png" alt="GTV AFRIK" width={110} height={35} className="mb-6 opacity-90" />
                    <p className="text-[12px] italic text-white/60 font-prompt font-light tracking-wide mb-8">
                        Accelerating African Narrative
                    </p>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 bg-white/20 rounded-md hover:bg-white/30 transition-colors cursor-pointer border border-white/5"></div>
                        ))}
                    </div>
                </div>

                {/* Links Sections */}
                <div className="col-span-8 grid grid-cols-4 gap-8">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8">{title}</h4>
                            <ul className="flex flex-col gap-5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-[11px] font-prompt font-medium text-white/50 hover:text-white transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="pt-10 border-t border-white/10 flex justify-between items-center text-[10px] font-prompt font-medium text-white/30 tracking-widest">
                <p>2026 GTVAFRIK. ALL RIGHTS RESERVED</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
                    <Link href="#" className="hover:text-white transition-colors">TERMS OF USE</Link>
                    <Link href="#" className="hover:text-white transition-colors">COOKIE POLICY</Link>
                </div>
            </div>
        </footer>
    );
}