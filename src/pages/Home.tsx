import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Globe,
  Leaf,
  Package,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const divisions = [
  {
    title: "Ceylon Tea",
    eyebrow: "Seven region character",
    description:
      "Single-origin teas, retail caddies, private-label blends, and export-ready bulk programs.",
    image: "/image2.jpeg",
    path: "/products",
  },
  {
    title: "Island Spices",
    eyebrow: "True Ceylon provenance",
    description:
      "Cinnamon, pepper, cloves, cardamom, nutmeg, turmeric, and ginger prepared for global buyers.",
    image: "/spices/image1.jpeg",
    path: "/spices",
  },
  {
    title: "Wellness Village",
    eyebrow: "Eden Harvest",
    description:
      "Ayurvedic retreats, organic gardens, eco-stays, and cultural wellness in Yodhakandiya.",
    image: "/welness/image1.PNG",
    path: "/wellness",
  },
];

const standards = [
  "ISO 22000:2018",
  "HACCP systems",
  "Ceylon Tea Board",
  "Private label packing",
  "Traceable sourcing",
  "Export documentation",
];

const workflow = [
  {
    icon: Leaf,
    title: "Selective Sourcing",
    text: "Direct supply relationships across tea, spice, and wellness-producing regions.",
  },
  {
    icon: Shield,
    title: "Quality Discipline",
    text: "Tasting, grading, sorting, and food-safety control before every export commitment.",
  },
  {
    icon: Package,
    title: "Tailored Packing",
    text: "Retail packs, tins, caddies, pouches, gift collections, and bulk formats.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    text: "Prepared for distributors, retailers, private labels, and hospitality partners.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fffaf0]">
      <section className="relative min-h-[96svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/image.png"
            alt="A. S. Exim Lanka tea estate"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,45,33,0.92)_0%,rgba(10,45,33,0.72)_38%,rgba(10,45,33,0.16)_72%,rgba(10,45,33,0.5)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#fffaf0] to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto flex min-h-[96svh] items-end px-6 pb-14 pt-36 md:pb-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 max-w-[18rem] text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#f7d789] sm:max-w-none sm:text-xs sm:tracking-[0.26em]">
                A. S. Exim Lanka - Ceylon export house
              </p>
              <h1 className="max-w-4xl text-balance font-serif text-[2.1rem] font-semibold leading-[1.04] text-[#fffaf0] min-[420px]:text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                Serenity from Sri Lanka, prepared for the world.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                Premium Ceylon tea, true island spices, and wellness hospitality
                shaped by heritage, disciplined sourcing, and refined presentation.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => navigate("/products")}
                  className="w-full rounded-md bg-[#d8b66f] px-6 py-6 text-sm font-bold uppercase tracking-[0.14em] text-[#103b2c] shadow-[0_18px_40px_rgba(216,182,111,0.26)] hover:bg-[#f0cf85] sm:w-auto sm:px-8 sm:tracking-[0.16em]"
                >
                  Explore Tea
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/contact")}
                  className="w-full rounded-md border-white/45 bg-white/10 px-6 py-6 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur hover:bg-[#fffaf0] hover:text-[#103b2c] sm:w-auto sm:px-8 sm:tracking-[0.16em]"
                >
                  Start an Inquiry
                </Button>
              </div>
            </div>

            <div className="border border-white/25 bg-[#fffaf0]/86 p-5 shadow-[0_24px_70px_rgba(15,58,42,0.2)] backdrop-blur-xl" style={{ borderRadius: 8 }}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a4b2f]">
                Export focus
              </p>
              <div className="mt-5 grid gap-4">
                {[
                  ["47", "years heritage"],
                  ["50+", "global markets"],
                  ["3", "core divisions"],
                ].map(([value, label]) => (
                  <div key={label} className="flex items-end justify-between border-b border-[#103b2c]/12 pb-4 last:border-0 last:pb-0">
                    <span className="font-serif text-5xl leading-none text-[#103b2c]">
                      {value}
                    </span>
                    <span className="max-w-[120px] text-right text-xs font-bold uppercase tracking-[0.14em] text-[#6b675b]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div data-reveal>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a4b2f]">
                  Three pillars
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#103b2c] md:text-6xl">
                  A refined platform for Ceylon origin products.
                </h2>
              </div>
              <p data-reveal className="max-w-2xl text-lg leading-8 text-[#6b675b] lg:ml-auto">
                The platform stays familiar: tea, spices, wellness, company story,
                and contact pathways. The design now presents those divisions as one
                premium export brand.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {divisions.map((division) => (
                <button
                  data-reveal
                  key={division.title}
                  onClick={() => navigate(division.path)}
                  className="group overflow-hidden border border-[#103b2c]/12 bg-[#fffdf7] text-left shadow-[0_18px_45px_rgba(31,33,28,0.08)] transition hover:-translate-y-1 hover:border-[#d8b66f]/70"
                  style={{ borderRadius: 8 }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={division.image}
                      alt={division.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a4b2f]">
                      {division.eyebrow}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl text-[#103b2c]">
                      {division.title}
                    </h3>
                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#6b675b]">
                      {division.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#103b2c]">
                      View division
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#103b2c] py-20 text-[#fffaf0] md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div data-reveal>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8b66f]">
                  Estate to export
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                  Quiet process. Exacting standards.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/70">
                  A luxury brand still has to perform operationally. The site now
                  frames the company around traceable sourcing, controlled packing,
                  and international buyer confidence.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {workflow.map((item) => (
                  <div
                    data-reveal
                    key={item.title}
                    className="border border-white/12 bg-white/[0.06] p-6"
                    style={{ borderRadius: 8 }}
                  >
                    <item.icon className="h-7 w-7 text-[#d8b66f]" />
                    <h3 className="mt-5 font-serif text-2xl text-[#f7e4b0]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div data-reveal className="relative">
                <img
                  src="/image5.jpeg"
                  alt="Premium Ceylon tea packaging"
                  className="aspect-[5/4] w-full object-cover shadow-[0_26px_70px_rgba(31,33,28,0.14)]"
                  style={{ borderRadius: 8 }}
                />
                <div className="absolute bottom-5 left-5 right-5 border border-white/35 bg-[#fffaf0]/88 p-5 backdrop-blur-xl" style={{ borderRadius: 8 }}>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a4b2f]">
                    Private label ready
                  </p>
                  <p className="mt-2 font-serif text-2xl text-[#103b2c]">
                    Caddies, tins, gift boxes, sachets, and bulk packs.
                  </p>
                </div>
              </div>

              <div data-reveal>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a4b2f]">
                  Global standards
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#103b2c] md:text-6xl">
                  Confidence buyers can see before the first sample.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#6b675b]">
                  Certifications, export readiness, and packaging flexibility are
                  elevated visually so international buyers can scan the company
                  strengths quickly.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {standards.map((standard) => (
                    <div key={standard} className="flex items-center gap-3 border border-[#103b2c]/10 bg-[#fffdf7] p-4" style={{ borderRadius: 8 }}>
                      <Award className="h-5 w-5 shrink-0 text-[#8a4b2f]" />
                      <span className="text-sm font-semibold text-[#344137]">
                        {standard}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0e4c9] py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-5xl text-center">
              <Sparkles data-reveal className="mx-auto h-9 w-9 text-[#8a4b2f]" />
              <h2 data-reveal className="mt-5 font-serif text-4xl leading-tight text-[#103b2c] md:text-6xl">
                Premium origin, presented with restraint.
              </h2>
              <p data-reveal className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6b675b]">
                The refreshed interface trades generic shine for editorial spacing,
                tactile imagery, warmer ivory surfaces, and a composed luxury palette
                inspired by the supplied reference.
              </p>
              <div data-reveal className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => navigate("/about")}
                  className="rounded-md bg-[#103b2c] px-8 py-6 text-sm font-bold uppercase tracking-[0.16em] text-[#fffaf0] hover:bg-[#8a4b2f]"
                >
                  Our Story
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/contact")}
                  className="rounded-md border-[#103b2c]/25 bg-[#fffaf0] px-8 py-6 text-sm font-bold uppercase tracking-[0.16em] text-[#103b2c] hover:bg-[#103b2c] hover:text-[#fffaf0]"
                >
                  Discuss Partnership
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
