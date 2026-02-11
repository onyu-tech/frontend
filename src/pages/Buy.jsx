import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Truck,
  Package,
  RotateCcw,
  Ruler,
  Sparkles,
  BadgeCheck,
  Zap,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import jerry from "../assets/jerry.png";
import fullset from "../assets/fullset.png";
import image2 from "../assets/image2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const benefits = [
  {
    icon: Truck,
    title: "Fast shipping",
    text: "Ships within 7–10 days across India with real-time tracking.",
  },
  {
    icon: ShieldCheck,
    title: "1-year warranty",
    text: "Coverage for manufacturing defects and service support.",
  },
  {
    icon: RotateCcw,
    title: "7-day returns",
    text: "Easy returns if the fit or feel is not right for you.",
  },
  {
    icon: BadgeCheck,
    title: "ONYU Care",
    text: "Priority support and setup guidance inside the app.",
  },
];

const specs = [
  { label: "Battery", value: "7 days" },
  { label: "Connectivity", value: "BLE 5.3" },
  { label: "Weight", value: "4.2g" },
  { label: "Material", value: "Titanium" },
];

const faqs = [
  {
    q: "What sizes are available?",
    a: "We offer sizes 6 to 12. Use the sizing kit or measure in the app for a perfect fit.",
  },
  {
    q: "Does Jerry work with iOS and Android?",
    a: "Yes. The ONYU app supports both iOS and Android with seamless pairing.",
  },
  {
    q: "What comes in the box?",
    a: "Jerry ring, smart charging case, USB-C cable, and quick-start guide.",
  },
  {
    q: "Is the AI case always listening?",
    a: "No. Audio capture is fully controlled in-app with clear indicators.",
  },
];

export default function Buy() {
  const navigate = useNavigate();
  const [finish, setFinish] = useState("Black");
  const [size, setSize] = useState("8");

  return (
    <div className="relative w-screen bg-[#f6f2ec] text-[#111111] overflow-x-hidden font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
        :root { --paper: #f6f2ec; --ink: #111111; }
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-body { font-family: 'Manrope', system-ui, sans-serif; }
        .hero-wash {
          background:
            radial-gradient(900px 520px at 12% 18%, rgba(0,0,0,0.08), transparent 60%),
            radial-gradient(900px 520px at 88% 12%, rgba(0,0,0,0.06), transparent 58%);
        }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.06;
        }
        .glass {
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(0,0,0,0.08);
          backdrop-filter: blur(14px);
        }
        .soft-shadow { box-shadow: 0 30px 70px -28px rgba(0,0,0,0.35); }
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
        .option-pill {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.8);
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.6);
          font-weight: 600;
        }
        .option-pill.active {
          background: #111111;
          color: white;
          border-color: #111111;
        }
        .summary-card {
          background: linear-gradient(140deg, rgba(255,255,255,0.95), rgba(255,255,255,0.7));
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 36px;
          box-shadow: 0 30px 70px -32px rgba(0,0,0,0.4);
        }
        .section-shell { border-top: 1px solid rgba(0,0,0,0.08); }
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

      <Navbar variant="buy" bgClass="bg-[#f6f2ec]/80" />

      <section className="relative min-h-screen pt-32 pb-20 hero-wash overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold"
            >
              Buy Jerry
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-display leading-[0.95]"
            >
              The smart ring,
              <br />
              ready for everyday control.
            </motion.h1>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <span className="text-3xl md:text-4xl font-display">₹4,999</span>
              <span className="chip">Ships in 5-7 days</span>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => navigate("/procedure")}
                className="h-14 px-8 rounded-full bg-black text-white font-semibold flex items-center gap-2 hover:-translate-y-1 transition-transform shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
              >
                Buy now <ArrowUpRight size={18} />
              </button>
              <Link
                to="/experience"
                className="h-14 px-8 rounded-full border border-black/15 text-black font-semibold flex items-center justify-center bg-white/70 hover:bg-white transition-colors"
              >
                See the experience
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="glass rounded-[40px] p-6 md:p-8 soft-shadow"
          >
            <img
              src={jerry}
              alt="Jerry ring"
              className="w-full rounded-[32px] border border-black/10 bg-white/70"
            />
            <div className="grid grid-cols-2 gap-3 mt-6">
              {specs.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3"
                >
                  <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold text-black">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
              Configure
            </p>
            <h2 className="text-4xl md:text-6xl font-display">
              Choose your
              <br />
              perfect fit.
            </h2>
            <p className="text-black/60 leading-relaxed max-w-md">
              Select a finish and size to match your style. We recommend using
              the ONYU sizing guide for the most accurate fit.
            </p>
            <div className="flex items-center gap-3 text-black/50">
              <Ruler size={18} />
              <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                Size guide inside the app
              </span>
            </div>
            <div className="glass rounded-[32px] p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.45em] text-black/50 font-semibold">
                  Includes
                </p>
                <Sparkles size={18} className="text-black/40" />
              </div>
              <div className="mt-4 grid gap-3 text-black/60">
                <div className="flex items-center gap-3">
                  <Package size={16} />
                  <span>Jerry ring in titanium finish</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={16} />
                  <span>AI smart charging case</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} />
                  <span>1-year warranty + ONYU Care</span>
                </div>
              </div>
            </div>
          </div>

          <div className="summary-card p-8 space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.45em] text-black/50 font-semibold">
                Your Order
              </p>
              <span className="text-sm font-semibold text-black">₹4,999</span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                  Colour
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Black", "Silver", "Graphite"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFinish(option)}
                      className={`option-pill ${finish === option ? "active" : ""}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                  Ring size
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["6", "7", "8", "9", "10", "11", "12"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSize(option)}
                      className={`option-pill ${size === option ? "active" : ""}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/80 px-5 py-4">
                <div className="flex items-center justify-between text-sm text-black/60">
                  <span>Subtotal</span>
                  <span className="text-black">₹4,999</span>
                </div>
                <div className="flex items-center justify-between text-sm text-black/60 mt-2">
                  <span>Shipping</span>
                  <span className="text-black">Free</span>
                </div>
              </div>
            </div>
            <Link
              to="/procedure"
              className="w-full h-14 rounded-full bg-black text-white font-semibold flex items-center justify-center gap-2"
            >
              Buy now <ArrowUpRight size={18} />
            </Link>{" "}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
                What you get
              </p>
              <h2 className="text-4xl md:text-6xl font-display mt-4">
                Everything you need
                <br />
                to get started.
              </h2>
            </div>
            <Link
              to="/ecosystem"
              className="h-12 px-6 rounded-full border border-black/15 font-semibold flex items-center gap-2"
            >
              Explore Ecosystem <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center mt-10">
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-[28px] border border-black/10 bg-[#f8f6f2] p-5"
                    >
                      <div className="h-11 w-11 rounded-2xl bg-black/[0.06] flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-xl font-display mt-4">
                        {item.title}
                      </h3>
                      <p className="text-black/60 mt-2 text-sm">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="glass rounded-[32px] p-6">
                <div className="flex items-center gap-3 text-black/50">
                  <Package size={18} />
                  <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                    In the box
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-black/60 text-sm">
                  <li>Jerry smart ring</li>
                  <li>AI charging case</li>
                  <li>USB-C cable</li>
                  <li>Quick-start guide</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src={fullset}
                alt="Jerry box contents"
                className="w-full rounded-[36px] border border-black/10 bg-white/70 soft-shadow"
              />
              <img
                src={image2}
                alt="ONYU app preview"
                className="w-full rounded-[36px] border border-black/10 bg-white/70 soft-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
                FAQs
              </p>
              <h2 className="text-4xl md:text-6xl font-display mt-4">
                Quick answers
                <br />
                before you buy.
              </h2>
            </div>
            <button
              onClick={() => navigate("/experience")}
              className="h-12 px-6 rounded-full border border-black/15 font-semibold"
            >
              See the experience
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass rounded-[30px] p-6 soft-shadow">
                <p className="font-display text-xl text-black">{faq.q}</p>
                <p className="text-black/60 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
