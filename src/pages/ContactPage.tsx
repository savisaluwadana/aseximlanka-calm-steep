import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    interest: "Ceylon tea sourcing",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Website inquiry — ${formData.interest}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company || "Not provided"}`,
      `Country / region: ${formData.country || "Not provided"}`,
      `Interest: ${formData.interest}`,
      "",
      formData.message,
    ].join("\n");

    toast({
      title: "Opening your email app",
      description: "Your inquiry has been prepared for info@aseximlanka.com. Review it there before sending.",
    });

    window.location.href = `mailto:info@aseximlanka.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#14372b]">
      <section className="relative min-h-[72svh] overflow-hidden bg-[#08271e] text-[#fff9ed]">
        <img
          src="/image6.jpeg"
          alt="Sri Lankan tea landscape"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,31,23,0.96)_0%,rgba(5,31,23,0.82)_52%,rgba(5,31,23,0.35)_82%)]" />
        <div className="absolute inset-0 premium-grain opacity-[0.09]" />

        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-[1440px] items-end px-5 pb-16 pt-32 sm:px-8 md:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-5xl">
            <p className="premium-kicker premium-kicker-light">Start a conversation</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(4.2rem,8.5vw,8.4rem)] font-normal leading-[0.83] tracking-[-0.04em] text-[#fff9ed]">
              Tell us what
              <span className="mt-2 block italic text-[#e5c982]">you’re trying to create.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base font-light leading-8 text-white/70 md:text-lg">
              Tea sourcing, a private-label collection, Sri Lankan spices, or Eden Harvest—give us the brief and we’ll start from the product you actually need.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12">
          <aside data-reveal>
            <p className="premium-kicker">Direct contact</p>
            <h2 className="mt-6 max-w-md font-serif text-[clamp(3rem,4.7vw,5.3rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">
              A sourcing conversation should feel direct.
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-[#66695f]">
              You can use the inquiry brief or contact the house directly. The form prepares an email in your own mail app so nothing is falsely marked as “sent” before you actually send it.
            </p>

            <div className="mt-10 divide-y divide-[#14372b]/14 border-y border-[#14372b]/14">
              <a href="mailto:info@aseximlanka.com" className="group flex gap-4 py-6">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#8d5c3f]" />
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#9a7650]">Email</p>
                  <p className="mt-2 font-serif text-2xl text-[#14372b] group-hover:text-[#8d5c3f]">info@aseximlanka.com</p>
                </div>
              </a>

              <a href="tel:+94715524956" className="group flex gap-4 py-6">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#8d5c3f]" />
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#9a7650]">Phone</p>
                  <p className="mt-2 font-serif text-2xl text-[#14372b] group-hover:text-[#8d5c3f]">+94 71 552 4956</p>
                  <p className="mt-1 text-xs text-[#74756c]">Dinesh Saluwadana</p>
                </div>
              </a>

              <div className="flex gap-4 py-6">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#8d5c3f]" />
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#9a7650]">Sri Lanka office</p>
                  <p className="mt-2 max-w-sm font-serif text-xl leading-7 text-[#14372b]">
                    665/22/1 Gunawardana Mawatha,<br />Sri Jayawardenepura Kotte 10120,<br />Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <div data-reveal className="border border-[#14372b]/14 bg-[#f7f0e3] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="mb-9 border-b border-[#14372b]/14 pb-7">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#8d5c3f]">Inquiry brief</p>
              <h2 className="mt-3 font-serif text-4xl font-normal text-[#14372b] md:text-5xl">Give us the essentials.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#66695f]">
                A little context helps us respond more usefully—especially for sourcing, private label, and export conversations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#8d5c3f]">Name *</span>
                  <input
                    required
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    placeholder="Your name"
                    className="h-12 border border-[#14372b]/18 bg-[#fffaf0] px-4 text-sm outline-none"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#8d5c3f]">Email *</span>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    placeholder="you@company.com"
                    className="h-12 border border-[#14372b]/18 bg-[#fffaf0] px-4 text-sm outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#8d5c3f]">Company</span>
                  <input
                    value={formData.company}
                    onChange={(event) => setFormData({ ...formData, company: event.target.value })}
                    placeholder="Company or brand"
                    className="h-12 border border-[#14372b]/18 bg-[#fffaf0] px-4 text-sm outline-none"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#8d5c3f]">Country / region</span>
                  <input
                    value={formData.country}
                    onChange={(event) => setFormData({ ...formData, country: event.target.value })}
                    placeholder="Your market"
                    className="h-12 border border-[#14372b]/18 bg-[#fffaf0] px-4 text-sm outline-none"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#8d5c3f]">What are you interested in? *</span>
                <select
                  required
                  value={formData.interest}
                  onChange={(event) => setFormData({ ...formData, interest: event.target.value })}
                  className="h-12 border border-[#14372b]/18 bg-[#fffaf0] px-4 text-sm outline-none"
                >
                  <option>Ceylon tea sourcing</option>
                  <option>Private-label tea</option>
                  <option>Sri Lankan spices</option>
                  <option>Eden Harvest wellness</option>
                  <option>Distribution / partnership</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#8d5c3f]">Your brief *</span>
                <textarea
                  required
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  placeholder="Tell us about the product, market, format, expected volume, or idea you have in mind."
                  rows={7}
                  className="resize-y border border-[#14372b]/18 bg-[#fffaf0] p-4 text-sm leading-7 outline-none"
                />
              </label>

              <div className="flex flex-col gap-4 border-t border-[#14372b]/14 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-6 text-[#74756c]">
                  Submitting opens your default email application with the inquiry pre-filled. You remain in control of the final send.
                </p>
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#14372b] px-7 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#fff9ed] transition-colors hover:bg-[#8d5c3f]"
                >
                  Prepare inquiry
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#0a2e23] py-24 text-[#fff9ed] md:py-28">
        <div data-reveal className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
          <div>
            <p className="premium-kicker premium-kicker-light">For trade partners</p>
            <h2 className="mt-6 max-w-5xl font-serif text-[clamp(3.4rem,6vw,6.4rem)] font-normal leading-[0.88] tracking-[-0.035em] text-[#fff9ed]">
              Retail, distribution, hospitality, private label—<span className="italic text-[#e5c982]">bring us the brief.</span>
            </h2>
          </div>
          <a
            href="mailto:info@aseximlanka.com"
            className="group inline-flex items-center gap-4 border-b border-[#e1c27c]/70 pb-2 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]"
          >
            Email the house
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
