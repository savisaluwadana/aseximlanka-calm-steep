import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Tea", path: "/products" },
  { name: "Spices", path: "/spices" },
  { name: "Wellness", path: "/wellness" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between border border-[#d8b66f]/55 bg-[#fffaf0]/95 px-3 py-3 shadow-[0_22px_60px_rgba(20,34,26,0.22)] backdrop-blur-2xl transition-all duration-300 md:px-4 ${
          isScrolled ? "translate-y-0" : ""
        }`}
        style={{ borderRadius: 14 }}
      >
        <button
          onClick={() => handleNavigate("/")}
          className="group flex min-w-0 max-w-[calc(100%-56px)] items-center gap-3 text-left"
          aria-label="A. S. Exim Lanka home"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d8b66f]/70 bg-[#103b2c] font-serif text-base text-[#fffaf0] shadow-[0_12px_28px_rgba(16,59,44,0.25)]">
            AS
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-base leading-none text-[#103b2c] sm:text-lg md:text-xl">
              A. S. Exim Lanka
            </span>
            <span className="mt-1 block truncate text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#8a4b2f] sm:text-[0.68rem] sm:tracking-[0.22em]">
              Ceylon exports since 1977
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`rounded-md px-3 py-2 text-[0.78rem] font-extrabold uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? "bg-[#103b2c] text-[#fffaf0]"
                    : "text-[#1f3429] hover:bg-[#f0e4c9] hover:text-[#8a4b2f]"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => handleNavigate("/contact")}
          className="hidden rounded-md border border-[#d8b66f]/60 bg-[#8a4b2f] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] shadow-[0_14px_30px_rgba(138,75,47,0.2)] transition hover:bg-[#103b2c] lg:inline-flex"
        >
          Inquire
        </button>

        <button
          className="grid h-11 w-11 place-items-center rounded-md bg-[#103b2c] text-[#fffaf0] md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-7xl border border-[#d8b66f]/35 bg-[#fffaf0]/95 p-3 shadow-[0_22px_60px_rgba(20,34,26,0.16)] backdrop-blur-2xl md:hidden" style={{ borderRadius: 10 }}>
          <div className="grid gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`rounded-md px-4 py-3 text-left text-sm font-bold uppercase tracking-[0.14em] ${
                  location.pathname === item.path
                    ? "bg-[#103b2c] text-[#fffaf0]"
                    : "text-[#344137] hover:bg-[#f0e4c9]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
