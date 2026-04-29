export const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center gap-2 mb-8">
        <div className="w-1.5 h-6 bg-brand-yellow"></div>
        <h2 className="uppercase font-bold tracking-widest text-lg">{title}</h2>
    </div>
);