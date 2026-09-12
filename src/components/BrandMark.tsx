type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
  className?: string;
};

const BrandMark = ({ inverted = false, compact = false, className = "" }: BrandMarkProps) => {
  const ink = inverted ? "text-[#fff9ed]" : "text-[#0d3327]";
  const muted = inverted ? "text-[#d8bd7a]" : "text-[#8d5c3f]";
  const frame = inverted ? "border-[#d8bd7a]/60" : "border-[#9b7748]/55";
  const line = inverted ? "bg-[#d8bd7a]/75" : "bg-[#9b7748]/75";

  return (
    <span className={`inline-flex min-w-0 items-center gap-3.5 ${className}`}>
      <span
        className={`relative grid h-12 w-12 shrink-0 place-items-center border ${frame} ${ink}`}
        aria-hidden="true"
      >
        <span className="font-serif text-[1.2rem] font-medium italic tracking-[-0.08em]">AS</span>
        <span className={`absolute bottom-[7px] h-px w-5 ${line}`} />
        <span className={`absolute -right-[3px] top-[7px] h-3 w-px ${line}`} />
        <span className={`absolute -right-[3px] top-[7px] h-px w-3 ${line}`} />
      </span>

      {!compact && (
        <span className="min-w-0 leading-none">
          <span className={`block truncate font-serif text-[1.12rem] font-medium tracking-[0.025em] ${ink}`}>
            A. S. Exim Lanka
          </span>
          <span className={`mt-1.5 flex items-center gap-2 truncate text-[0.53rem] font-semibold uppercase tracking-[0.28em] ${muted}`}>
            <span className={`h-px w-4 shrink-0 ${line}`} />
            Ceylon origin house
          </span>
        </span>
      )}
    </span>
  );
};

export default BrandMark;
