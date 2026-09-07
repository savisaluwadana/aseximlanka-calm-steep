type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
  className?: string;
};

const BrandMark = ({ inverted = false, compact = false, className = "" }: BrandMarkProps) => {
  const ink = inverted ? "text-[#fff9ed]" : "text-[#0d3327]";
  const muted = inverted ? "text-[#d8bd7a]" : "text-[#8d5c3f]";
  const ring = inverted ? "border-[#d8bd7a]/55" : "border-[#b79554]/45";

  return (
    <span className={`inline-flex min-w-0 items-center gap-3 ${className}`}>
      <span
        className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-full border ${ring} ${ink}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none">
          <path
            d="M37.3 10.9C29.4 11.6 21 15.3 16.6 21.8c-3.2 4.7-3.4 10.1-.8 15.3 5.8-1 11.2-3.7 15-8.1 4.4-5.2 6.2-11.1 6.5-18.1Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M14 38c5.4-8.7 11.6-14.8 19.2-19.1M23.3 27.2c-.2-2.8.2-5.2 1.2-7.3M23.3 27.2c2.8.2 5.2-.2 7.3-1.2"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {!compact && (
        <span className="min-w-0 leading-none">
          <span className={`block truncate font-serif text-[1.15rem] font-medium tracking-[0.015em] ${ink}`}>
            A. S. Exim Lanka
          </span>
          <span className={`mt-1.5 block truncate text-[0.56rem] font-semibold uppercase tracking-[0.25em] ${muted}`}>
            Ceylon origin house
          </span>
        </span>
      )}
    </span>
  );
};

export default BrandMark;
