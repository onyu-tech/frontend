import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Leaf,
  Hand,
  Globe2,
  Cpu,
  MapPin,
  Users2,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const pillars = [
  {
    icon: Hand,
    title: "Human-first control",
    text: "Technology should follow your natural gestures, not the other way around.",
  },
  {
    icon: Cpu,
    title: "Quiet intelligence",
    text: "AI that works in the background and surfaces only what matters.",
  },
  {
    icon: Globe2,
    title: "Accessible by design",
    text: "Premium capability at prices designed for real life in India.",
  },
];

const commitments = [
  {
    icon: ShieldCheck,
    label: "Trust",
    title: "Privacy is a product feature.",
    text: "Clear controls, transparent permissions, and respectful defaults.",
  },
  {
    icon: HeartPulse,
    label: "Wellness",
    title: "Health signals, not health anxiety.",
    text: "We focus on essential metrics that keep you aware and calm.",
  },
  {
    icon: Leaf,
    label: "Longevity",
    title: "Made to last and evolve.",
    text: "Durable materials and updates that keep devices useful longer.",
  },
];

const principles = [
  {
    step: "01",
    title: "Blend with the day",
    text: "Wearables should disappear into your routine while staying ready.",
  },
  {
    step: "02",
    title: "Reduce friction",
    text: "Setup should feel instant, controls should feel obvious.",
  },
  {
    step: "03",
    title: "Grow as you grow",
    text: "Start with one device and expand without losing context.",
  },
  {
    step: "04",
    title: "Celebrate everyday wins",
    text: "Small insights make the biggest difference in focus and health.",
  },
];

export default function Mission() {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen bg-[#f6f2ec] text-[#111111] overflow-x-hidden font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
        :root { --paper: #f6f2ec; --ink: #111111; }
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-body { font-family: 'Manrope', system-ui, sans-serif; }
        .mission-sky {
          background:
            radial-gradient(900px 520px at 15% 15%, rgba(17, 17, 17, 0.08), transparent 60%),
            radial-gradient(900px 520px at 85% 10%, rgba(17, 17, 17, 0.05), transparent 58%),
            linear-gradient(180deg, rgba(246,242,236,0.2) 0%, rgba(246,242,236,0.9) 45%, #f6f2ec 100%);
        }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.06;
        }
        .mission-grid {
          background-image: linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(circle at center, black 30%, transparent 75%);
          opacity: 0.2;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(0,0,0,0.1);
          backdrop-filter: blur(16px);
        }
        .soft-shadow { box-shadow: 0 30px 70px -30px rgba(0,0,0,0.35); }
        .halo {
          border-radius: 36px;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 28px 60px -30px rgba(0,0,0,0.4);
        }
        .chip {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.04);
          padding: 7px 14px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .timeline {
          position: relative;
          padding-left: 26px;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 8px;
          top: 6px;
          bottom: 6px;
          width: 2px;
          background: rgba(0,0,0,0.12);
        }
        .timeline-dot {
          height: 12px;
          width: 12px;
          border-radius: 999px;
          background: #111111;
          box-shadow: 0 0 0 6px rgba(0,0,0,0.08);
        }
        .cta-panel {
          background: linear-gradient(140deg, rgba(255,255,255,0.95), rgba(255,255,255,0.72));
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 46px;
          box-shadow: 0 40px 90px -40px rgba(0,0,0,0.45);
        }
        .principles-panel {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 40px;
          padding: 28px;
          box-shadow: 0 28px 60px -34px rgba(0,0,0,0.35);
        }
        .principles-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 28px;
          padding: 22px;
          box-shadow: 0 18px 40px -28px rgba(0,0,0,0.35);
        }
        .principles-index {
          height: 40px;
          width: 40px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.55);
          font-weight: 700;
        }
        .principles-divider {
          height: 1px;
          width: 100%;
          background: rgba(0,0,0,0.08);
        }
        .footer-shell {
          background:
            radial-gradient(900px 420px at 10% -10%, rgba(0, 0, 0, 0.04), transparent 60%),
            radial-gradient(900px 420px at 90% -10%, rgba(0, 0, 0, 0.03), transparent 60%),
            linear-gradient(180deg, rgba(246, 242, 236, 0) 0%, rgba(246, 242, 236, 0.9) 40%, #efe9e1 100%);
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }
        .footer-cta {
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08);
        }
        .footer-card {
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
        }
        .footer-input {
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.12);
          color: #111111;
        }
        .footer-input::placeholder { color: rgba(0, 0, 0, 0.45); }
        .footer-link { color: rgba(17, 17, 17, 0.7); }
        .footer-link:hover { color: #111111; }
        .footer-icon {
          height: 40px;
          width: 40px;
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: rgba(0, 0, 0, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .footer-icon:hover { background: rgba(0, 0, 0, 0.08); transform: translateY(-2px); }
      `}</style>

      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-[#f6f2ec]/80 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-black/20 flex items-center justify-center">
            <div className="h-3 w-3 bg-black rounded-full" />
          </div>
          <span className="text-xl font-display uppercase tracking-[0.22em]">
            <b>Onyu</b>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.4em] text-black/60">
          <Link to="/experience" className="hover:text-black transition-colors">
            Experience
          </Link>
          <Link to="/ecosystem" className="hover:text-black transition-colors">
            Ecosystem
          </Link>
          <Link to="/buy">
            <button className="bg-black text-white px-6 py-2 rounded-full font-semibold">
              Buy Jerry
            </button>
          </Link>
        </div>
      </nav>

      <section className="relative min-h-screen pt-32 pb-20 mission-sky overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="absolute inset-0 mission-grid pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] uppercase tracking-[0.5em] text-black/50 font-semibold"
            >
              Our Mission
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-display leading-[0.95]"
            >
              Every interaction designed for simplicity.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-black/60 leading-relaxed max-w-xl"
            >
              ONYU designs everyday wearables that respond to the way you move,
              speak, and live. We start with Jerry, but we are building a
              complete ecosystem that helps people feel in control without
              feeling overwhelmed.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/buy"
                className="h-14 px-8 rounded-full bg-black text-white font-semibold flex items-center gap-2 hover:-translate-y-1 transition-transform shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
              >
                Buy Jerry <ArrowUpRight size={18} />
              </Link>
              <Link
                to="/ecosystem"
                className="h-14 px-8 rounded-full border border-black/15 text-black font-semibold flex items-center justify-center bg-white/70 hover:bg-white transition-colors"
              >
                Explore Ecosystem
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="halo p-8 md:p-10 space-y-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.45em] text-black/50 font-semibold">
                Mission Priorities
              </p>
              <Sparkles size={20} className="text-black/40" />
            </div>
            <div className="grid gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="glass-card rounded-3xl p-5 flex gap-4 items-start"
                  >
                    <div className="h-10 w-10 rounded-2xl bg-black/[0.06] text-black flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-display text-xl text-black">
                        {pillar.title}
                      </p>
                      <p className="text-sm text-black/60 mt-1">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="space-y-6"
            >
              <div className="principles-panel space-y-6">
                <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
                  Our Principles
                </p>
                <h2 className="text-4xl md:text-5xl font-display">
                  Built to blend
                  <br />
                  into everyday life.
                </h2>
                <p className="text-black/60 leading-relaxed max-w-md">
                  We design wearables that are subtle, capable, and always
                  ready. The experience should feel natural the moment you put
                  it on.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="grid gap-6"
            >
              {principles.map((item) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  className="principles-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="principles-index">{item.step}</div>
                    <div>
                      <h3 className="text-2xl font-display text-black mt-2">
                        {item.title}
                      </h3>
                      <p className="text-black/60 mt-3">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
                Commitments
              </p>
              <h2 className="text-4xl md:text-6xl font-display mt-4">
                Responsible innovation
                <br />
                at every step.
              </h2>
            </div>
            <div className="flex items-center gap-3 text-black/40">
              <MapPin size={18} />
              <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                Made for India
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[32px] border border-black/10 bg-[#f8f6f2] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl bg-black/[0.06] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display mt-4">{item.title}</h3>
                  <p className="text-black/60 mt-3">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
              Community
            </p>
            <h2 className="text-4xl md:text-6xl font-display">
              Built with people,
              <br />
              not just for them.
            </h2>
            <p className="text-black/60 leading-relaxed max-w-md">
              We are building in India with a growing community of designers,
              engineers, creators, and early users. Every release reflects what
              real people need to feel focused, safe, and connected.
            </p>
            <div className="flex items-center gap-3 text-black/50">
              <Users2 size={18} />
              <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                Community-led roadmap
              </span>
            </div>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="timeline space-y-8"
          >
            {[
              "Field tests in 5 cities",
              "Local manufacturing partnerships",
              "Accessibility reviews with real users",
              "Open feedback loops for every update",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <div className="timeline-dot mt-1" />
                <div>
                  <p className="font-display text-xl text-black">{item}</p>
                  <p className="text-black/60 text-sm mt-1">
                    We treat feedback as a product input, not an afterthought.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="footer-shell px-6 md:px-12 pb-20 pt-24 text-[#111111]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
            <div className="footer-card rounded-[36px] p-8 md:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full border border-black/20 flex items-center justify-center">
                  <div className="h-3 w-3 bg-black rounded-full" />
                </div>
                <span className="text-2xl font-display uppercase tracking-[0.22em]">
                  <b>Onyu</b>
                </span>
              </div>
              <p className="text-black/60 leading-relaxed max-w-md">
                Everyday wearables that feel effortless — designed to work
                together, built to last, and priced for real life.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/jerry"
                  className="h-11 px-6 rounded-full bg-black text-white font-semibold text-sm flex items-center hover:-translate-y-1 transition-transform"
                >
                  Buy Jerry
                </Link>
                <button
                  onClick={() => navigate("/mission")}
                  className="h-11 px-6 rounded-full border border-black/15 text-black font-semibold text-sm"
                >
                  Our Mission
                </button>
              </div>
            </div>

            <div className="footer-cta rounded-[36px] p-8 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.45em] text-black/50 font-semibold">
                  Stay in the loop
                </p>
                <h3 className="text-3xl md:text-4xl font-display mt-4 leading-tight text-black">
                  Receive articles, tips, and offers from ONYU.
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  className="footer-input h-12 px-5 rounded-full w-full text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="Email address"
                />
                <button className="h-12 px-6 rounded-full bg-black text-white font-semibold flex items-center justify-center">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="footer-card rounded-[36px] p-8 md:p-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold">
                  Our Company
                </p>
                <Link to="/mission" className="block footer-link">
                  About Us
                </Link>
                <Link to="/careers" className="block footer-link">
                  Careers
                </Link>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold">
                  Support
                </p>
                <span className="block footer-link">Help Center</span>
                <span className="block footer-link">Sizing</span>
                <span className="block footer-link">Contact</span>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold">
                  Partner With Us
                </p>
                <span className="block footer-link">For Organizations</span>
                <span className="block footer-link">Partnerships</span>
                <span className="block footer-link">Developers</span>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold">
                  Connect
                </p>
                <div className="flex flex-wrap gap-3 text-black">
                  <button
                    className="footer-icon"
                    type="button"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </button>
                  <button
                    className="footer-icon"
                    type="button"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </button>
                  <button
                    className="footer-icon"
                    type="button"
                    aria-label="YouTube"
                  >
                    <FaYoutube />
                  </button>
                  <button className="footer-icon" type="button" aria-label="X">
                    <FaXTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
