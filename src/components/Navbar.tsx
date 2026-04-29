import Image from "next/image";
import Link from "next/link";

export default function Navbar({ activePage }: { activePage?: string }) {
    const navItems = [
        "Home", "MAMMA Framework", "About Us", "Content", "Services", "Media Hub", "Careers", "Blog", "Contact"
    ];

    return (
        <nav className="flex justify-between items-center px-16 py-6 bg-brand-dark-navy sticky top-0 z-50">
            <Link href="/">
                <Image src="/logo.png" alt="GTV AFRIK" width={90} height={30} className="object-contain" />
            </Link>

            <div className="flex gap-5 items-center">
                {navItems.map((item) => (
                    <Link
                        key={item}
                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`text-[9px] font-bold uppercase tracking-[0.15em] transition-colors ${activePage === item ? "text-brand-yellow" : "text-white/60 hover:text-white"
                            }`}
                    >
                        {item}
                    </Link>
                ))}
            </div>

            <button className="bg-brand-yellow text-brand-dark-navy px-5 py-2 rounded-sm font-bold text-[8.5px] uppercase tracking-widest hover:brightness-110 transition-all">
                Book an Appointment
            </button>
        </nav>
    );
}