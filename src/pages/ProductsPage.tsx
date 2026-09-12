import { ArrowRight, ArrowUpRight, ClipboardCheck, Leaf, Package, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";

const teaFamilies = [
  {
    number: "01",
    name: "Ceylon Black Tea",
    description:
      "The classic expression of Ceylon: brisk, bright, aromatic, and adaptable across straight teas, breakfast styles, and signature blends.",
    image: "/image1.jpeg",
    grades: ["OP", "Pekoe", "BOP", "FBOP", "BOPF"],
  },
  {
    number: "02",
    name: "Ceylon Green Tea",
    description:
      "A fresher, lighter profile selected for clarity, balance, and contemporary tea programs that favour clean character.",
    image: "/image2.jpeg",
    grades: ["Sencha", "Gunpowder", "Young Hyson", "Chunmee"],
  },
  {
    number: "03",
    name: "Ceylon White Tea",
    description:
      "A delicate, limited style with a quieter cup and refined presentation for premium gifting and specialist collections.",
    image: "/image3.jpeg",
    grades: ["Silver Tips", "Silver Needle", "White Peony"],
  },
  {
    number: "04",
    name: "Bespoke Blends",
    description:
      "Blends composed around a target cup, customer, market, or brand brief—from classic profiles to flavoured and specialty formats.",
    image: "/image4.jpeg",
    grades: ["Signature blends", "Flavoured tea", "Infusions", "Private label"],
  },
];

const teaRegions = [
  "Nuwara Eliya",
  "Uda Pussellawa",
  "Uva",
  "Dimbula",
  "Kandy",
  "Sabaragamuwa",
  "Ruhuna",
];

const ProductsPage = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#14372b]">
      <section className="relative min-h-[82svh] overflow-hidden bg-[#08271e] text-[#fff9ed]">
        <img
          src="/image2.jpeg"
          alt="Ceylon tea leaves and tea presentation"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,31,23,0.97)_0%,rgba(5,31,23,0.85)_46%,rgba(5,31,23,0.34)_76%,rgba(5,31,23,0.6)_100%)]" />
        <div className="absolute inset-0 premium-grain opacity-[0.1]" />

        <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-[1440px] items-end px-5 pb-16 pt-32 sm:px-8 md:pb-20 lg:px-12 lg:pb-24">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-20">
            <div className="max-w-5xl">
              <p className="premium-kicker premium-kicker-light">The tea house</p>
              <h1 className="mt-7 max-w-5xl font-serif text-[clamp(4.2rem,9vw,9rem)] font-normal leading-[0.82] tracking-[-0.04em] text-[#fff9ed]">
                The Ceylon
                <span className="mt-2 block italic text-[#e5c982]">Tea Collection.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base font-light leading-8 text-white/70 md:text-lg">
                Black, green, white, and bespoke teas selected with origin, cup character, market fit, and presentation in mind.
              </p>
            </div>

            <div className="border-t border-white/20 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <Leaf className="h-6 w-6 text-[#e1c27c]" />
              <p className="mt-5 font-serif text-2xl leading-8 text-[#fff9ed]">
                Seven regions.<br />Many expressions.<br />One origin.
              </p>
              <button
                onClick={() => go("/contact")}
                className="group mt-7 inline-flex items-center gap-3 border-b border-[#e1c27c]/65 pb-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]"
              >
                Request a tea brief
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#14372b]/12 bg-[#f3e8d5]">
        <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 lg:px-12">
          <div className="flex gap-7 overflow-x-auto pb-1 scrollbar-none lg:grid lg:grid-cols-7 lg:overflow-visible">
            {teaRegions.map((region, index) => (
              <div key={region} className="min-w-max lg:min-w-0">
                <span className="text-[0.54rem] font-semibold uppercase tracking-[0.18em] text-[#9a7650]">0{index + 1}</span>
                <p className="mt-1 font-serif text-lg text-[#14372b]">{region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] py-24 md:py-32 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div data-reveal>
              <p className="premium-kicker">Collection architecture</p>
              <h2 className="mt-6 max-w-lg font-serif text-[clamp(3rem,4.8vw,5.3rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">
                Start with the cup, then build the product.
              </h2>
            </div>
            <div data-reveal className="self-end">
              <p className="max-w-2xl text-base leading-8 text-[#62665d]">
                Rather than forcing every buyer into the same catalogue, we frame tea around what the finished product needs to achieve—origin clarity, flavour profile, price point, pack format, shelf presence, or gifting occasion.
              </p>
            </div>
          </div>

          <div className="mt-16 divide-y divide-[#14372b]/14 border-y border-[#14372b]/14">
            {teaFamilies.map((tea, index) => (
              <article
                data-reveal
                key={tea.name}
                className="grid gap-8 py-10 md:py-14 lg:grid-cols-[90px_1fr_1.1fr] lg:items-center lg:gap-12"
              >
                <div className="flex items-center gap-3 lg:block">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#9a7650]">{tea.number}</span>
                  <span className="h-px w-9 bg-[#9a7650]/50 lg:mt-4 lg:block lg:w-12" />
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-3" : ""}`}>
                  <div className="overflow-hidden bg-[#14372b]">
                    <img
                      src={tea.image}
                      alt={tea.name}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[5/3] w-full object-cover transition duration-[1100ms] hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h3 className="font-serif text-[clamp(2.6rem,4vw,4.6rem)] font-normal leading-[0.94] tracking-[-0.025em] text-[#14372b]">
                    {tea.name}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#66695f]">{tea.description}</p>
                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#14372b]/12 pt-5">
                    {tea.grades.map((grade) => (
                      <span key={grade} className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-[#8d5c3f]">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a2e23] py-24 text-[#fff9ed] md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div data-reveal>
              <p className="premium-kicker premium-kicker-light">From brief to shipment</p>
              <h2 className="mt-6 max-w-xl font-serif text-[clamp(3.2rem,5vw,5.7rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#fff9ed]">
                Built for the realities of international buying.
              </h2>
            </div>

            <div className="grid gap-px bg-white/12 sm:grid-cols-2">
              {[
                {
                  icon: Leaf,
                  title: "Tea selection",
                  text: "Origin, grade, cup profile, blend direction, and target market considered together.",
                },
                {
                  icon: Scale,
                  title: "Buyer specifications",
                  text: "Product choices can be shaped around the commercial and quality requirements of the brief.",
                },
                {
                  icon: Package,
                  title: "Packing formats",
                  text: "Retail packs, caddies, pouches, sachets, gift formats, and bulk programs.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Export coordination",
                  text: "Packing, product information, and shipment documentation brought into one sourcing workflow.",
                },
              ].map((item) => (
                <div data-reveal key={item.title} className="bg-[#0a2e23] p-7 sm:p-8">
                  <item.icon className="h-6 w-6 text-[#e1c27c]" />
                  <h3 className="mt-6 font-serif text-3xl font-normal text-[#fff9ed]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/58">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efe2cc] py-24 md:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-12">
          <div data-reveal className="relative">
            <div className="absolute -bottom-5 -right-5 hidden h-full w-full border border-[#8d5c3f]/22 md:block" />
            <img
              src="/image5.jpeg"
              alt="Premium private-label tea presentation"
              loading="lazy"
              decoding="async"
              className="relative aspect-[5/4] w-full object-cover shadow-[0_30px_90px_rgba(20,55,43,0.13)]"
            />
          </div>

          <div data-reveal>
            <p className="premium-kicker">Private label</p>
            <h2 className="mt-6 font-serif text-[clamp(3.2rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#14372b]">
              Create a collection that feels <span className="italic text-[#8d5c3f]">owned, not outsourced.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#62665d]">
              A private-label tea should read as one idea from cup to shelf. We can begin from your existing brand, a target market, a reference product, or simply the kind of experience you want the tea to create.
            </p>
            <button
              onClick={() => go("/contact")}
              className="group mt-9 inline-flex items-center gap-4 bg-[#14372b] px-7 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#fff9ed] transition-colors hover:bg-[#8d5c3f]"
            >
              Build a private-label brief
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] py-24 md:py-28">
        <div data-reveal className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="premium-kicker">Start with what you need</p>
          <h2 className="mt-6 font-serif text-[clamp(3.4rem,6vw,6.5rem)] font-normal leading-[0.88] tracking-[-0.035em] text-[#14372b]">
            Tell us the cup.<br /><span className="italic text-[#8d5c3f]">We’ll work backwards.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#66695f]">
            Share the tea style, target customer, pack format, market, or reference you have in mind and we can shape the sourcing conversation around it.
          </p>
          <button
            onClick={() => go("/contact")}
            className="group mt-9 inline-flex items-center gap-4 bg-[#14372b] px-7 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#fff9ed] transition-colors hover:bg-[#8d5c3f]"
          >
            Start an inquiry
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
