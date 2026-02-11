import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  Waves,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    if (!document.querySelector("script[src*='model-viewer']")) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
      document.body.appendChild(s);
    }

    const timer = setTimeout(() => setIsLoaded(true), 100);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.to(modelRef.current, {
        duration: 1,
        attr: { "camera-orbit": "90deg 75deg 105%" },
        xPercent: 30,
        scale: 0.8,
      })
        .to(modelRef.current, {
          duration: 1,
          attr: { "camera-orbit": "-180deg 90deg 120%" },
          xPercent: 0,
          opacity: 0.4,
        })
        .to(modelRef.current, {
          duration: 1,
          attr: { "camera-orbit": "45deg 55deg 80%" },
          opacity: 0.15,
          scale: 1.2,
        });
    }, containerRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen bg-[#f9f7f2] text-[#111111] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');
        
        :root {
          --paper: #f9f7f2;
          --ink: #111111;
        }

        .font-display,
        .font-body {
          font-family: 'Sora', system-ui, -apple-system, sans-serif;
        }

        .hero-gradient {
          color: var(--ink);
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(0,0,0,0.08);
        }

        .nebula {
          background:
            radial-gradient(900px 520px at 15% 15%, rgba(0, 0, 0, 0.04), transparent 60%),
            radial-gradient(900px 520px at 85% 10%, rgba(0, 0, 0, 0.03), transparent 55%);
        }

        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.08;
        }

        .footer-shell {
          background:
            radial-gradient(900px 420px at 10% -10%, rgba(0, 0, 0, 0.04), transparent 60%),
            radial-gradient(900px 420px at 90% -10%, rgba(0, 0, 0, 0.03), transparent 60%),
            linear-gradient(180deg, rgba(249, 247, 242, 0) 0%, rgba(249, 247, 242, 0.9) 40%, #f2efe9 100%);
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

        /* Essential for GSAP ScrollTrigger stability */
        model-viewer {
          transition: opacity 0.5s ease;
          --poster-color: transparent;
        }
      `}</style>

      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <model-viewer
          ref={modelRef}
          src="/ring.glb"
          auto-rotate
          rotation-per-second="45deg"
          auto-rotate-delay="0"
          exposure="1.2"
          shadow-intensity="1"
          environment-image="neutral"
          camera-orbit="0deg 75deg 105%"
          style={{ width: "100%", height: "85vh" }}
        />
      </div>

      <div className="relative z-10 font-body">
        <section className="min-h-screen flex flex-col px-6 md:px-12 relative nebula">
          <div className="absolute inset-0 grain pointer-events-none" />
          <Navbar variant="home" />

          <div className="flex-1 grid lg:grid-cols-2 items-center gap-16 py-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display leading-[0.9] mb-6">
                Tech that <br />{" "}
                <span className="hero-gradient">just fits.</span>
              </h1>
              <p className="max-w-md text-lg text-black/70 leading-relaxed mb-10">
                <b>ONYU</b> builds everyday accessories with intelligence inside
                them, so people can control and interact with technology
                naturally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/jerry"
                  className="h-14 px-8 rounded-full bg-black text-white font-semibold flex items-center gap-2 hover:-translate-y-1 transition-transform"
                >
                  Meet Jerry <ArrowUpRight size={18} />
                </Link>

                <Link
                  to="/ecosystem"
                  className="h-14 px-8 rounded-full border border-black/20 text-black font-semibold flex items-center justify-center "
                >
                  Explore ecosystem
                </Link>
              </div>
            </motion.div>

            <div className="hidden lg:flex flex-col gap-4 items-end">
              <StatRow
                icon={Activity}
                label="Gesture Control"
                val="Air Mouse"
              />
              <StatRow icon={Waves} label="Ecosystem Sync" val="One App" />
              <StatRow icon={Zap} label="Fast Setup" val="30 Sec" />
            </div>
          </div>
        </section>

        <section className="min-h-screen py-32 px-6 md:px-12 flex items-center">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-black/60">
              First Product
            </span>
            <h2 className="text-5xl md:text-6xl font-display mt-4 mb-8">
              Jerry, the smart gesture ring.
            </h2>
            <div className="space-y-6">
              <FeatureCard
                icon={ShieldCheck}
                title="Control by gesture"
                text="Use simple hand movements to control laptops, phones, and more."
              />
              <FeatureCard
                icon={HeartPulse}
                title="Everyday health basics"
                text="Tracks essential wellness signals alongside productivity."
              />
            </div>
          </div>
        </section>

        <section className="min-h-screen py-32 px-6">
          <div className="max-w-6xl mx-auto rounded-[60px] bg-white text-[#111111] p-16 md:p-24 glass-panel border-black/5 shadow-2xl">
            <div className="grid lg:grid-cols-1 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-display leading-none mb-6">
                  Smart charging, smarter notes.
                </h2>
                <p className="text-black/60 text-lg leading-relaxed mb-10">
                  Jerry ships with a <b>smart charging case</b> that records
                  audio and uses AI to summarise important information.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-3xl bg-black/[0.03] border border-black/10">
                    <p className="text-xs opacity-80 font-bold uppercase mb-2">
                      Case AI
                    </p>
                    <p className="text-2xl font-bold text-black">Summaries</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-black/[0.03] border border-black/10">
                    <p className="text-xs opacity-80 font-bold uppercase mb-2">
                      Sync
                    </p>
                    <p className="text-2xl font-bold text-black">ONYU App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen py-32 px-6 md:px-12">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.5em] text-black mb-4 font-bold">
              Ecosystem
            </p>
            <h2 className="text-5xl md:text-6xl font-display">
              One app. Many wearables.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {["Rings", "Bands", "Safety", "Everyday"].map((mode, i) => (
              <div
                key={mode}
                className="p-10 md:p-12 rounded-[40px] bg-white border border-black/5 shadow-sm hover:shadow-2xl transition-all"
              >
                <Sparkles className="text-black mb-4" />
                <h3 className="text-2xl font-display mb-2">{mode}</h3>
                <p className="text-black/60">
                  Built for different purposes, unified by the same AI and data.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 bg-white text-[#111111] rounded-t-[80px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-display mb-8 leading-[0.95]">
              Accessible innovation, made in India.
            </h2>
            <p className="text-lg text-black/70 leading-relaxed mb-10">
              ONYU’s mission is to make advanced wearable technology affordable
              and accessible, while blending it seamlessly into daily life.
            </p>

            <Link to="/mission">
              <button className="h-16 px-10 rounded-full bg-black text-white font-semibold text-lg shadow-2xl hover:scale-105 transition-all flex items-center gap-3 mx-auto">
                Read Our Mission <ArrowUpRight />
              </button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

function StatRow({ icon: Icon, label, val }) {
  return (
    <div className="glass-panel p-4 rounded-2xl flex items-center gap-6 min-w-[280px] hover:translate-x-[-10px] transition-all cursor-default shadow-sm">
      <div className="h-12 w-12 rounded-xl bg-black/[0.05] flex items-center justify-center text-black">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold">
          {label}
        </p>
        <p className="text-xl font-bold text-black">{val}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-6 group">
      <div className="h-12 w-12 rounded-2xl bg-black/[0.06] text-black flex items-center justify-center shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-display text-2xl text-black">{title}</h4>
        <p className="text-black/60 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
