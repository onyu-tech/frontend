import React, { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  MousePointer2,
  Mic,
  ShieldCheck,
  HeartPulse,
  Smartphone,
  Laptop,
  Tv,
  Headphones,
  MapPin,
  Ruler,
  ScanFace,
  LifeBuoy,
  MessageCircle,
  Mail,
  ChevronDown,
  Package,
  Truck,
  RotateCcw,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import measuringguide from "../assets/measuringguide.png";
import image2 from "../assets/image2.png";

export default function Experience() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);
  const howRef = useRef(null);
  const faqs = [
    {
      q: "Does Jerry work with both laptops and phones?",
      a: "Yes. Jerry supports laptops, phones, and tablets through the ONYU app and Bluetooth pairing.",
    },
    {
      q: "How long does the battery last?",
      a: "Jerry lasts up to 7 days with the smart case providing fast top-ups.",
    },
    {
      q: "Is the AI case always listening?",
      a: "No. You control when audio capture is enabled, with clear indicators inside the app.",
    },
    {
      q: "Can I add more devices later?",
      a: "Absolutely. Your data and preferences stay intact as you add bands, lockets, or safety gear.",
    },
  ];

  return (
    <div className="relative w-screen bg-[#f6f2ec] text-[#111111] overflow-x-hidden font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        :root { --paper: #f6f2ec; --ink: #111111; }
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-body { font-family: 'Manrope', system-ui, sans-serif; }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.06;
        }
        .hero-wash {
          background:
            radial-gradient(900px 520px at 12% 18%, rgba(0,0,0,0.08), transparent 60%),
            radial-gradient(900px 520px at 88% 12%, rgba(0,0,0,0.06), transparent 58%);
        }
        .glass {
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(0,0,0,0.08);
          backdrop-filter: blur(14px);
        }
        .soft-shadow { box-shadow: 0 30px 70px -28px rgba(0,0,0,0.35); }
        .section-shell { border-top: 1px solid rgba(0,0,0,0.08); }
        .chip {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.04);
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .rail {
          border-top: 1px solid rgba(0,0,0,0.12);
          border-bottom: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.6);
        }
        .step-rail {
          position: relative;
          display: grid;
          grid-template-columns: 36px 1fr;
          gap: 18px;
        }
        .step-rail::before {
          content: "";
          position: absolute;
          left: 16px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(0,0,0,0.12);
        }
        .step-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 28px;
          padding: 20px 22px 22px 22px;
          box-shadow: 0 20px 45px -24px rgba(0,0,0,0.35);
        }
        .step-dot {
          height: 12px;
          width: 12px;
          border-radius: 999px;
          background: #111111;
          box-shadow: 0 0 0 6px rgba(0,0,0,0.08);
          flex-shrink: 0;
        }
        .step-index {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.45);
        }
        .step-panel {
          background: linear-gradient(140deg, rgba(255,255,255,0.92), rgba(255,255,255,0.7));
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 36px;
          padding: 26px;
          box-shadow: 0 30px 70px -30px rgba(0,0,0,0.3);
        }
        .step-card2 {
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: 28px;
          padding: 20px 22px;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 18px 40px -24px rgba(0,0,0,0.35);
        }
        .step-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.04);
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.55);
        }
        .how-shell {
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 48px;
          padding: 28px;
        }
        .process-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 28px;
          padding: 22px;
          box-shadow: 0 20px 45px -24px rgba(0,0,0,0.35);
        }
        .dark-panel {
          background:
            radial-gradient(600px 400px at 15% 20%, rgba(255,255,255,0.08), transparent 60%),
            #0f0f11;
        }
        .measure-panel {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 40px;
          padding: 18px;
          box-shadow: 0 30px 70px -30px rgba(0,0,0,0.3);
        }
        .measure-step {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.85);
          border-radius: 24px;
          padding: 16px 18px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .measure-line {
          width: 1px;
          background: rgba(0,0,0,0.12);
          margin: 10px auto;
          height: 22px;
        }
        .measure-band {
          position: relative;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.8);
          overflow: hidden;
        }
        .measure-track {
          display: flex;
          gap: 18px;
          width: max-content;
          animation: measureSlide 18s linear infinite;
          padding: 10px 16px;
          text-transform: uppercase;
          letter-spacing: 0.35em;
          font-size: 10px;
          color: rgba(0,0,0,0.5);
          font-weight: 600;
        }
        @keyframes measureSlide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .measure-card {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.9);
          border-radius: 26px;
          padding: 18px 20px;
          box-shadow: 0 18px 40px -24px rgba(0,0,0,0.35);
          transition: transform 0.25s ease;
        }
        .measure-card:hover {
          transform: translateY(-4px);
        }
        .faq-item {
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 22px;
          background: rgba(255,255,255,0.85);
          padding: 18px 20px;
        }
        .faq-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.35s ease;
        }
        .faq-content.open {
          max-height: 240px;
          opacity: 1;
        }
        .ticker {
          overflow: hidden;
          border-top: 1px solid rgba(0,0,0,0.12);
          border-bottom: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.6);
        }
        .ticker-track {
          display: flex;
          gap: 32px;
          white-space: nowrap;
          width: max-content;
          animation: ticker 24s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
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
          border: 1px solid rgba(0,  0, 0, 0.12);
          background: rgba(0,  0, 0, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .footer-icon:hover {
          background: rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        .tape-ring {
          border: 1px dashed rgba(0,0,0,0.18);
          border-radius: 999px;
          padding: 14px;
        }
        .pulse-dot {
          height: 10px;
          width: 10px;
          border-radius: 999px;
          background: #111111;
          box-shadow: 0 0 0 6px rgba(0,0,0,0.08);
        }
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

      <section className="relative min-h-screen pt-32 pb-20 hero-wash overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              className="space-y-8"
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-5xl md:text-6xl font-display leading-[0.95]"
              >
                Experience the innovation of smart wearables.
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-lg text-black/60 leading-relaxed max-w-xl"
              >
                A single hub for sizing, setup, integrations, shipping, and
                support. Start with how Jerry works today, then explore AI in
                the app, ecosystem benefits, and subscriptions next.
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#how-jerry-works"
                  className="h-14 px-8 rounded-full bg-black text-white font-semibold flex items-center gap-2 hover:-translate-y-1 transition-transform shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  How Jerry Works <ArrowUpRight size={18} />
                </a>
                <a
                  href="#sizing-guide"
                  className="h-14 px-8 rounded-full border border-black/15 text-black font-semibold flex items-center justify-center bg-white/70 hover:bg-white transition-colors"
                >
                  Sizing Guide
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              className="glass rounded-[36px] p-8 space-y-6"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-semibold">
                  Start Here
                </p>
                <h3 className="text-2xl font-display mt-3">
                  Quick answers, fast.
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Setup in minutes", href: "#how-jerry-works" },
                  { label: "Sizing & fit", href: "#sizing-guide" },
                  { label: "Shipping + returns", href: "#shipping" },
                  { label: "Live support", href: "#help-center" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between border border-black/10 rounded-2xl px-4 py-3 bg-white/70 hover:-translate-y-1 transition-transform"
                  >
                    <span className="text-sm font-semibold">{item.label}</span>
                    <ArrowUpRight size={16} className="text-black/50" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div
            className="mt-10 ticker w-screen py-3"
            style={{ marginLeft: "50%", transform: "translateX(-50%)" }}
          >
            <div className="ticker-track text-[11px] uppercase tracking-[0.35em] text-black/50 font-semibold">
              {[
                "Sizing in 60 seconds",
                "Order tracking live",
                "Setup in minutes",
                "24/7 help center",
                "Works across devices",
                "Hassle-free returns",
              ]
                .concat([
                  "Sizing in 60 seconds",
                  "Order tracking live",
                  "Setup in minutes",
                  "24/7 help center",
                  "Works across devices",
                  "Hassle-free returns",
                ])
                .map((item, idx) => (
                  <span
                    key={`${item}-${idx}`}
                    className="flex items-center gap-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-jerry-works" className=" pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="how-shell grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
                How It Works
              </p>
              <h2 className="text-4xl md:text-6xl font-display leading-[0.95]">
                Three steps,
                <br />
                zero friction.
              </h2>
              <p className="text-black/60 leading-relaxed max-w-md">
                Set it up once, move naturally, and let Jerry keep everything in
                sync — quietly, in the background.
              </p>
              <div className="pt-4 space-y-3 text-sm text-black/60">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-black/40" />
                  Works across laptops, phones, and TVs
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-black/40" />
                  Context follows you device to device
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-black/40" />
                  AI case captures and summarizes key moments
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: MousePointer2,
                  title: "Pair & map",
                  text: "Connect Jerry once and map gestures to the apps you use daily.",
                },
                {
                  icon: Sparkles,
                  title: "Move naturally",
                  text: "Air gestures replace your mouse, clicker, and shortcuts.",
                },
                {
                  icon: Mic,
                  title: "Capture moments",
                  text: "Use the AI case to record and summarize key moments.",
                },
                {
                  icon: ShieldCheck,
                  title: "Stay in control",
                  text: "Privacy-first settings let you decide when data is captured.",
                },
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={`${step.title}-${idx}`} className="process-card">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                      Step 0{idx + 1}
                      <span className="h-[1px] w-6 bg-black/20" />
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-black/[0.06] flex items-center justify-center mt-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-2xl font-display mt-4">{step.title}</h3>
                    <p className="text-black/60 mt-3">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="sizing-guide" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-10">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
            <div className="measure-panel">
              <img
                src={measuringguide}
                alt="Measuring Jerry ring fit"
                className="w-full rounded-[32px] border border-black/10 bg-white/70"
              />
              <div className="strip mt-4 rounded-full px-6 py-3 flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-black/50 font-semibold">
                <span>Measure</span>
                <span>Scan</span>
                <span>Adjust</span>
                <span>Secure</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
                Measuring Guide
              </p>
              <h2 className="text-4xl md:text-6xl font-display mt-4">
                Fit that feels
                <br />
                just right.
              </h2>
              <p className="text-black/60 leading-relaxed max-w-md">
                Use the simple 4-step guide to find a fit that stays secure all
                day — comfortable, snug, and effortless.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Ruler,
                    title: "Measure",
                    text: "Wrap and mark the length at the base of your finger.",
                  },
                  {
                    icon: ScanFace,
                    title: "Scan",
                    text: "Confirm your size quickly inside the ONYU app.",
                  },
                  {
                    icon: MapPin,
                    title: "Adjust",
                    text: "Choose a fit that feels secure without tightness.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Secure",
                    text: "Test the fit during daily movement and activity.",
                  },
                ].map((tip, idx) => {
                  const Icon = tip.icon;
                  return (
                    <div key={`${tip.title}-${idx}`} className="measure-card">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                        Step 0{idx + 1}
                        <span className="h-[1px] w-6 bg-black/20" />
                      </div>
                      <div className="h-10 w-10 rounded-2xl bg-black/[0.06] flex items-center justify-center mt-3">
                        <Icon size={18} className="text-black/60" />
                      </div>
                      <p className="mt-3 font-semibold">{tip.title}</p>
                      <p className="text-sm text-black/60 mt-1">{tip.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integrations" className="section-shell py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between gap-6 flex-wrap mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
                Integrations
              </p>
              <h2 className="text-4xl md:text-6xl font-display mt-4">
                Control your
                <br />
                daily stack.
              </h2>
            </div>
            <p className="text-black/60 max-w-md">
              Works across devices and platforms with a single gesture language.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Laptop,
                title: "Mac & Windows",
                text: "Cursor + shortcuts",
              },
              { icon: Smartphone, title: "iOS & Android", text: "App control" },
              { icon: Tv, title: "Smart TVs", text: "Media navigation" },
              {
                icon: Headphones,
                title: "Meetings",
                text: "Control calls + playback",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass rounded-[26px] p-6">
                  <Icon size={20} className="text-black/60" />
                  <p className="font-display text-xl mt-4">{item.title}</p>
                  <p className="text-sm text-black/60 mt-2">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="shipping" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
              Shipping & Returns
            </p>
            <h2 className="text-4xl md:text-6xl font-display mt-4">
              Clear delivery
              <br />
              from day one.
            </h2>
            <p className="text-black/60 leading-relaxed mt-6 max-w-md">
              Track orders, manage exchanges, and get delivery updates in the
              ONYU app.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Package,
                  title: "Order status",
                  text: "Track in real time",
                },
                {
                  icon: Truck,
                  title: "Delivery",
                  text: "Transparent timelines",
                },
                { icon: RotateCcw, title: "Returns", text: "Simple exchanges" },
                {
                  icon: ShieldCheck,
                  title: "Coverage",
                  text: "Warranty support",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="glass rounded-[24px] p-5">
                    <Icon size={18} className="text-black/60" />
                    <p className="mt-3 font-semibold">{item.title}</p>
                    <p className="text-sm text-black/60 mt-2">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="glass rounded-[40px] p-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-semibold">
              Delivery Promise
            </p>
            <h3 className="text-2xl font-display mt-4">
              Fast, transparent updates.
            </h3>
            <p className="text-black/60 mt-3">
              Every shipment is tracked with proactive notifications so you know
              exactly when your product arrives.
            </p>
          </div>
        </div>
      </section>

      <section id="help-center" className="py-24 dark-panel text-[#f3f1ec]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60 font-semibold">
              Help Center
            </p>
            <h2 className="text-4xl md:text-6xl font-display leading-tight">
              Support that
              <br />
              feels personal.
            </h2>
            <p className="text-white/60 leading-relaxed max-w-md">
              Setup guides, gesture tips, AI case help, and real humans when you
              need them.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: LifeBuoy,
                  title: "Support",
                  text: "24/7 help articles",
                },
                {
                  icon: MessageCircle,
                  title: "Live chat",
                  text: "Talk to our team",
                },
                { icon: Mail, title: "Email us", text: "support@onyu.ai" },
                {
                  icon: HeartPulse,
                  title: "Wellness",
                  text: "Health insights",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                  >
                    <Icon size={18} className="text-white/60" />
                    <p className="mt-3 font-semibold">{item.title}</p>
                    <p className="text-sm text-white/60 mt-2">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <img
              src={image2}
              alt="ONYU app dashboard"
              className="w-full rounded-[48px] border border-white/10 bg-white/10"
            />
          </div>
        </div>
      </section>

      <section id="faqs" className="section-shell py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
              FAQs
            </p>
            <h2 className="text-4xl md:text-6xl font-display mt-4">
              Answers you can trust.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className="faq-item">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold">{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-black/50 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div className={`faq-content ${isOpen ? "open" : ""}`}>
                    <p className="text-black/60 mt-3">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
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
