import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tea", path: "/products" },
    { name: "Spices", path: "/spices" },
    { name: "Wellness", path: "/wellness" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#102f25] text-[#fffaf0]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8b66f] to-transparent" />
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1.2fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#d8b66f]/70 bg-[#fffaf0] font-serif text-[#103b2c]">
                AS
              </span>
              <div>
                <h3 className="font-serif text-2xl leading-none text-[#f7e4b0]">
                  A. S. Exim Lanka
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8b66f]/80">
                  Ceylon exports since 1977
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/70">
              Premium Ceylon tea, authentic island spices, and wellness experiences
              shaped by heritage, traceability, and export discipline.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-white/75 transition hover:border-[#d8b66f]/60 hover:bg-[#d8b66f] hover:text-[#103b2c]"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-lg text-[#f7e4b0]">Platform</h4>
            <ul className="grid gap-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavigate(item.path)}
                    className="text-white/70 transition hover:text-[#d8b66f]"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-lg text-[#f7e4b0]">Divisions</h4>
            <ul className="grid gap-3 text-sm text-white/70">
              <li>Premium Ceylon Tea</li>
              <li>Ceylon Spices</li>
              <li>Private Label Exports</li>
              <li>Eden Harvest Wellness</li>
              <li>Bulk & Retail Packing</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-lg text-[#f7e4b0]">Contact</h4>
            <ul className="grid gap-4 text-sm">
              <li className="flex gap-3 text-white/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b66f]" />
                <span>Dinesh Saluwadana: +94715524956</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b66f]" />
                <span>info@aseximlanka.com</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b66f]" />
                <span>
                  1, 665/22, 1 Gunawardana Mawatha, Sri Jayawardenepura Kotte
                  10120, Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 A. S. Exim Lanka (Pvt) Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="transition hover:text-[#d8b66f]">Privacy Policy</a>
            <a href="#" className="transition hover:text-[#d8b66f]">Terms</a>
            <a href="#" className="transition hover:text-[#d8b66f]">Certifications</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
