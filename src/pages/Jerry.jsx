import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MousePointer2,
  Mic,
  BatteryCharging,
  BrainCircuit,
  Move3d,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import image from "../assets/image.png";
import jerry from "../assets/jerry.png";
import fullset from "../assets/fullset.png";
import image2 from "../assets/image2.png";

gsap.registerPlugin(ScrollTrigger);

export default function Jerry() {
  const rootRef = useRef(null);
  const heroImageRef = useRef(null);
  const glowRef = useRef(null);
  const floatCardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(heroImageRef.current, {
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 80,
        scale: 1.04,
        ease: "none",
      });

      gsap.to(glowRef.current, {
        scrollTrigger: {
          trigger: glowRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        rotate: 120,
        scale: 1.15,
        opacity: 0.5,
        ease: "none",
      });

      floatCardsRef.current.forEach((el, idx) => {
        if (!el) return;
        gsap.to(el, {
          y: idx % 2 === 0 ? -18 : 18,
          duration: 3.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: idx * 0.2,
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const features = useMemo(
    () => [
      {
        icon: Move3d,
        title: "Spatial gestures",
        text: "Precise hand tracking translates movement into intuitive control across devices.",
      },
      {
        icon: BrainCircuit,
        title: "AI memory case",
        text: "Record, capture, and summarize key moments with always-ready AI.",
      },
      {
        icon: ShieldCheck,
        title: "Everyday wellness",
        text: "Essential health signals in the background so you stay focused on life.",
      },
    ],
    [],
  );

  const specs = useMemo(
    () => [
      { label: "Weight", value: "4.2g", detail: "Aerospace titanium" },
      { label: "Connectivity", value: "BLE 5.3", detail: "Low-latency sync" },
      { label: "Battery", value: "7 days", detail: "Fast charge case" },
      {
        label: "Sensors",
        value: "Health basics",
        detail: "HR, sleep, activity",
      },
    ],
    [],
  );

  const ecosystem = useMemo(() => ["Rings", "Bands", "Safety", "Everyday"], []);

  return (
    <div
      ref={rootRef}
      className="relative w-screen bg-[#f7f4ef] text-[#111111] font-body overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
        :root {
          --ink: #101010;
          --muted: rgba(17, 17, 17, 0.6);
          --paper: #f7f4ef;
          --glass: rgba(255, 255, 255, 0.72);
        }
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-body { font-family: 'Manrope', system-ui, sans-serif; }
        .hero-gradient {
          background: radial-gradient(800px 500px at 20% 20%, rgba(0,0,0,0.06), transparent 60%),
                      radial-gradient(900px 520px at 85% 10%, rgba(0,0,0,0.05), transparent 60%);
        }
        .hero-aurora {
          background:
            radial-gradient(900px 600px at 12% 18%, rgba(0,0,0,0.08), transparent 60%),
            radial-gradient(900px 600px at 90% 10%, rgba(0,0,0,0.06), transparent 58%),
            linear-gradient(180deg, rgba(247,244,239,0) 0%, rgba(247,244,239,0.85) 65%, #f7f4ef 100%);
        }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.06;
        }
        .glass { background: var(--glass); backdrop-filter: blur(18px); border: 1px solid rgba(0,0,0,0.08); }
        .ring-glow {
          background: radial-gradient(circle, rgba(0,0,0,0.12), transparent 70%);
          filter: blur(1px);
        }
        .hero-glow {
          background: radial-gradient(circle, rgba(0,0,0,0.16), transparent 70%);
          filter: blur(2px);
        }
        .hero-panel {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 40px 80px -30px rgba(0,0,0,0.28);
        }
        .hero-frame {
          border-radius: 54px;
          background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.65));
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 45px 90px -35px rgba(0,0,0,0.35);
        }
        .hero-chip {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.03);
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .hero-card {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(0,0,0,0.1);
          box-shadow: 0 20px 45px -22px rgba(0,0,0,0.35);
          border-radius: 20px;
        }
        .hero-stat {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.7);
          border-radius: 18px;
          padding: 12px 16px;
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .hero-line {
          width: 24px;
          height: 2px;
          background: rgba(0,0,0,0.2);
        }
        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #111111;
          box-shadow: 0 0 0 6px rgba(0,0,0,0.08);
        }
        .soft-shadow { box-shadow: 0 30px 60px -22px rgba(0,0,0,0.25); }
        .section-shell { border-top: 1px solid rgba(0,0,0,0.08); }
        .dark-panel {
          background: radial-gradient(600px 400px at 15% 20%, rgba(255,255,255,0.08), transparent 60%),
                      #0f0f10;
        }
        .footer-shell {
          background:
            radial-gradient(900px 420px at 10% -10%, rgba(0, 0, 0, 0.04), transparent 60%),
            radial-gradient(900px 420px at 90% -10%, rgba(0, 0, 0, 0.03), transparent 60%),
            linear-gradient(180deg, rgba(247, 244, 239, 0) 0%, rgba(247, 244, 239, 0.9) 40%, #f0ece6 100%);
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
          background: rgba(0,  0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.12);
          color: #111111;
        }
        .footer-input::placeholder {
          color: rgba(0, 0, 0, 0.45);
        }
        .footer-pill {
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: rgba(0, 0, 0, 0.03);
        }
        .footer-link {
          color: rgba(17, 17, 17, 0.7);
        }
        .footer-link:hover {
          color: #111111;
        }
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
        .footer-icon:hover {
          background: rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
      `}</style>

      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-[#f7f4ef]/80 backdrop-blur-md">
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

      <section className="relative min-h-screen pt-32 pb-16 hero-aurora overflow-hidden flex items-center">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div
          ref={glowRef}
          className="absolute -top-28 right-8 w-[560px] h-[560px] rounded-full hero-glow opacity-70"
        />
        <div className="absolute -bottom-28 left-[-12%] w-[420px] h-[420px] rounded-full hero-glow opacity-35" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="space-y-9">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.45em] font-semibold text-black/60">
                Onyu / Jerry
                <span className="hero-line" />
                Smart gesture ring
              </div>
              <h1 className="text-5xl md:text-7xl font-display leading-[0.95]">
                Jerry —
                <span className="block text-black/70">Move with motion.</span>
              </h1>
              <p className="text-lg text-black/60 max-w-xl leading-relaxed">
                One ring replaces your mouse, clicker, and shortcuts. Control
                laptops, phones, and screens with subtle finger motions, while
                the AI case captures the moments that matter.
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/buy"
                className="h-14 px-8 rounded-full bg-black text-white font-semibold flex items-center gap-2 hover:-translate-y-1 transition-transform shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
              >
                Buy Jerry <ArrowUpRight size={18} />
              </Link>
              <Link
                to="/ecosystem"
                className="h-14 px-8 rounded-full border border-black/15 text-black font-semibold flex items-center justify-center bg-white/60 hover:bg-white transition-colors"
              >
                Explore ecosystem
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="hero-stat">
                <span className="text-xs uppercase tracking-[0.2em] text-black/50 font-semibold">
                  Battery
                </span>
                <span className="font-display text-lg">7 days</span>
              </div>
              <div className="hero-stat">
                <span className="text-xs uppercase tracking-[0.2em] text-black/50 font-semibold">
                  Weight
                </span>
                <span className="font-display text-lg">4.2g</span>
              </div>
              <div className="hero-stat">
                <span className="text-xs uppercase tracking-[0.2em] text-black/50 font-semibold">
                  Sync
                </span>
                <span className="font-display text-lg">BLE 5.3</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <img
              ref={heroImageRef}
              src={jerry}
              alt="Jerry smart ring"
              className="
      relative
      w-full
      h-[480px]
      rounded-[80px]
      shadow-[0_20px_20px_rgba(0,0,0,0.1)]
      transition-transform
      duration-500
      ease-out
      hover:scale-[1.015]
    "
            />
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <SectionLabel text="Gesture Control" />
            <h2 className="text-4xl md:text-6xl font-display leading-tight">
              Move once.
              <br />
              Every device follows.
            </h2>
            <p className="text-lg text-black/60 max-w-md leading-relaxed">
              Jerry translates micro-gestures into precise cursor control, slide
              navigation, and media commands with zero friction.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <MiniFeature
                icon={MousePointer2}
                title="Air Mouse"
                text="Fluid control with no surface required."
              />
              <MiniFeature
                icon={Sparkles}
                title="Custom Gestures"
                text="Map actions to the apps you use every day."
              />
            </div>
          </div>
          <div className="relative">
            <img
              src={image2}
              alt="Gesture control with Jerry"
              className="w-80px rounded-[40px] soft-shadow object-center aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-6 md:mx-12 rounded-[56px] dark-panel text-[#f3f1ec] px-8 md:px-16 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <SectionLabel text="AI Case" light />
              <h2 className="text-4xl md:text-6xl font-display leading-tight">
                It captures
                <br />
                what matters.
              </h2>
              <p className="text-lg text-white/60 max-w-md leading-relaxed">
                The charging case records conversations and summarizes key
                points with ONYU AI, so nothing slips through.
              </p>
              <div className="space-y-4">
                <Pill icon={Mic} text="Dual mic array for clean audio" />
                <Pill icon={BrainCircuit} text="Instant AI summaries" />
                <Pill icon={BatteryCharging} text="Fast charge + 7 day power" />
              </div>
            </div>
            <div className="relative">
              <img
                src={fullset}
                alt="Jerry AI charging case"
                className="w-full h-auto object-contain drop-shadow-[0_45px_60px_rgba(0,0,0,0.5)] border border-white/20 rounded-[40px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between flex-wrap gap-6 mb-10">
            <div>
              <SectionLabel text="Ecosystem" />
              <h2 className="text-4xl md:text-5xl font-display">
                One app. Many wearables.
              </h2>
            </div>
            <Link
              to="/ecosystem"
              className="h-12 px-6 rounded-full border border-black/15 text-sm font-semibold flex items-center gap-2"
            >
              Explore everything <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {ecosystem.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass rounded-[28px] p-6 soft-shadow"
              >
                <Sparkles className="text-black/60" />
                <p className="font-display text-2xl mt-4">{item}</p>
                <p className="text-sm text-black/60 mt-2">
                  Built for a unique purpose, connected by ONYU AI.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-display">
            The future
            <br />
            is on you.
          </h2>
          <p className="text-lg text-black/60">
            Jerry ships with the smart charging case and ONYU app access.
            Pre-order today for early ecosystem access.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/buy"
              className="h-16 px-12 rounded-full bg-black text-white font-semibold text-lg flex items-center gap-3 justify-center hover:-translate-y-1 transition-transform shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
            >
              Buy Jerry <span className="opacity-50">|</span> ₹4,999
            </Link>
            <Link
              to="/mission"
              className="h-16 px-12 rounded-full border border-black/15 font-semibold flex items-center justify-center"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SectionLabel({ text, light = false }) {
  return (
    <p
      className={`text-[10px] font-semibold uppercase tracking-[0.4em] ${
        light ? "text-white/50" : "text-black/50"
      }`}
    >
      {text}
    </p>
  );
}

function MiniFeature({ icon: Icon, title, text }) {
  return (
    <div className="glass rounded-[26px] p-5">
      <Icon size={18} className="text-black/60" />
      <p className="mt-3 font-semibold text-lg">{title}</p>
      <p className="text-sm text-black/60 mt-2">{text}</p>
    </div>
  );
}

function Pill({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <Icon size={18} className="text-white/50" />
      <span className="text-sm text-white/80">{text}</span>
    </div>
  );
}
