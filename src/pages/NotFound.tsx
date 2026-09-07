import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-[#08271e] px-5 pb-16 pt-32 text-[#fff9ed] sm:px-8 lg:px-12">
      <img
        src="/image.png"
        alt="Sri Lankan tea country"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,31,23,0.96),rgba(5,31,23,0.78)_62%,rgba(5,31,23,0.52))]" />
      <div className="absolute inset-0 premium-grain opacity-[0.08]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <p className="premium-kicker premium-kicker-light">Page not found</p>
        <p className="mt-7 font-serif text-[clamp(7rem,18vw,17rem)] font-normal leading-[0.62] tracking-[-0.055em] text-white/12">
          404
        </p>
        <h1 className="mt-8 max-w-4xl font-serif text-[clamp(3.6rem,7vw,7.2rem)] font-normal leading-[0.86] tracking-[-0.035em] text-[#fff9ed]">
          This path ends here.
          <span className="mt-2 block italic text-[#e5c982]">The house is this way.</span>
        </h1>
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group mt-9 inline-flex items-center gap-4 border-b border-[#e1c27c]/70 pb-2 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Return to the house
        </button>
      </div>
    </div>
  );
};

export default NotFound;
