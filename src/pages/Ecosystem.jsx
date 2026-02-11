import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  Activity,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Waves,
  ArrowUpRight,
  BrainCircuit,
  Bluetooth,
  Layers,
  Radar,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import jerry from "../assets/jerry.png";
import ecosystem from "../assets/ecosystem.png";
import image2 from "../assets/image2.png";

export default function Ecosystem() {
  const navigate = useNavigate();
  const heroOrbitRef = useRef(null);
  const heroNodesRef = useRef([]);
  const marqueeTrackRef = useRef(null);
  const marqueeTweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let orbitTween;
      if (heroOrbitRef.current) {
        orbitTween = gsap.to(heroOrbitRef.current, {
          rotate: 360,
          duration: 55,
          repeat: -1,
          ease: "none",
        });
      }
      heroNodesRef.current.forEach((node, idx) => {
        if (!node) return;
        gsap.to(node, {
          y: idx % 2 === 0 ? -12 : 10,
          duration: 3.8 + idx * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      const keepUpright = () => {
        if (!heroOrbitRef.current) return;
        const rotation = gsap.getProperty(heroOrbitRef.current, "rotation");
        heroNodesRef.current.forEach((node) => {
          if (!node) return;
          gsap.set(node, { rotation: -rotation });
        });
      };
      gsap.ticker.add(keepUpright);

      return () => {
        if (orbitTween) orbitTween.kill();
        gsap.ticker.remove(keepUpright);
      };
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!marqueeTrackRef.current) return;
    const tween = gsap.to(marqueeTrackRef.current, {
      xPercent: -50,
      duration: 32,
      repeat: -1,
      ease: "none",
    });
    marqueeTweenRef.current = tween;
    return () => {
      tween.kill();
      marqueeTweenRef.current = null;
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const devices = [
    {
      icon: Sparkles,
      title: "Rings",
      text: "Precision control for daily productivity and effortless gestures.",
      tag: "Productivity",
    },
    {
      icon: HeartPulse,
      title: "Bands",
      text: "Advanced health tracking with a calm, minimal footprint.",
      tag: "Wellness",
    },
    {
      icon: ShieldCheck,
      title: "Safety",
      text: "Fast alerts, live status, and confidence when it matters most.",
      tag: "Protection",
    },
    {
      icon: Waves,
      title: "Everyday",
      text: "Lockets and essentials built to blend into any routine.",
      tag: "Lifestyle",
    },
  ];

  const pillars = [
    {
      icon: Bluetooth,
      label: "Shared App",
      title: "One place for every wearable.",
      text: "Your setup, data, and preferences live in a single ONYU home.",
    },
    {
      icon: BrainCircuit,
      label: "ONYU AI",
      title: "Always on, always connected.",
      text: "Summaries, insights, and controls follow you across devices.",
    },
    {
      icon: Layers,
      label: "Continuity",
      title: "Switch devices, keep the flow.",
      text: "Start with Jerry, move to a band, and never lose context.",
    },
  ];

  const orbit = [
    {
      label: "01",
      title: "Connect",
      text: "Pair once, auto-sync forever.",
    },
    {
      label: "02",
      title: "Share",
      text: "Health and motion data unify instantly.",
    },
    {
      label: "03",
      title: "Grow",
      text: "Add new devices without reset or re-learn.",
    },
  ];

  const streamCards = [
    {
      label: "Unified Data",
      title: "One timeline for every signal.",
      text: "Health, motion, and AI summaries stay connected across devices.",
    },
    {
      label: "Daily Sync",
      title: "Always in the background.",
      text: "Updates land instantly so your dashboard is always current.",
    },
    {
      label: "AI Summaries",
      title: "Highlights that follow you.",
      text: "Key moments are captured automatically across the ecosystem.",
    },
    {
      label: "Continuity",
      title: "Switch devices, keep context.",
      text: "Your preferences travel with you without re-setup.",
    },
    {
      label: "Scalable",
      title: "Add devices anytime.",
      text: "Rings, bands, lockets, and safety gear stay in sync.",
    },
    {
      label: "Privacy",
      title: "You control your data.",
      text: "Clear permissions and secure syncing across all wearables.",
    },
  ];

  return (
    <div className="relative w-screen bg-[#f6f1ea] text-[#111111] overflow-x-hidden font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
        :root { --paper: #f6f1ea; --ink: #111111; }
        .font-display { font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif; }
        .font-body { font-family: 'Manrope', system-ui, -apple-system, sans-serif; }
        .hero-field {
          background:
            radial-gradient(900px 520px at 12% 18%, rgba(0, 0, 0, 0.08), transparent 60%),
            radial-gradient(900px 520px at 88% 12%, rgba(0, 0, 0, 0.06), transparent 58%),
            linear-gradient(180deg, rgba(246,241,234,0) 0%, rgba(246,241,234,0.9) 62%, #f6f1ea 100%);
        }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.06;
        }
        .grid-haze {
          background-image: linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(circle at center, black 20%, transparent 70%);
          opacity: 0.3;
        }
        .floaty {
          animation: floaty 7s ease-in-out infinite;
        }
        .floaty-slow {
          animation: floaty 10s ease-in-out infinite;
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .pulse-orbit {
          position: relative;
        }
        .pulse-orbit::after {
          content: "";
          position: absolute;
          inset: -18px;
          border-radius: 999px;
          border: 1px dashed rgba(0,0,0,0.12);
          animation: spin 16s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(0,0,0,0.1);
          backdrop-filter: blur(16px);
        }
        .soft-shadow { box-shadow: 0 30px 70px -30px rgba(0,0,0,0.35); }
        .chip {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.04);
          padding: 7px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .hero-grid {
          background-image: linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at center, black 10%, transparent 70%);
          opacity: 0.2;
        }
        .hero-line {
          height: 1px;
          width: 120px;
          background: rgba(0,0,0,0.25);
        }
        .hero-frame {
          border-radius: 56px;
          background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.6));
          border: 1px solid rgba(0,0,0,0.12);
          box-shadow: 0 40px 90px -40px rgba(0,0,0,0.45);
        }
        .hero-frame-lite {
          border-radius: 48px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(0,0,0,0.12);
          box-shadow: 0 30px 70px -36px rgba(0,0,0,0.4);
        }
        .hero-strip {
          border-top: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.6);
        }
        .hero-orb {
          background: radial-gradient(circle, rgba(0,0,0,0.18), transparent 65%);
          filter: blur(2px);
        }
        .hero-rail {
          border: 1px dashed rgba(0,0,0,0.15);
          border-radius: 999px;
          padding: 10px 18px;
          text-transform: uppercase;
          letter-spacing: 0.35em;
          font-size: 10px;
          color: rgba(0,0,0,0.45);
        }
        .hero-pill {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.8);
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.55);
        }
        .hero-orbit {
          position: relative;
          width: min(560px, 90vw);
          height: min(560px, 90vw);
          margin: 0 auto;
        }
        .hero-orbit-ring {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          border: 1px dashed rgba(0,0,0,0.18);
        }
        .hero-core {
          position: absolute;
          inset: 18%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.95), rgba(255,255,255,0.7));
          border: 1px solid rgba(0,0,0,0.12);
          box-shadow: 0 40px 90px -40px rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
        }
        .hero-node {
          position: absolute;
          width: 160px;
          padding: 14px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(0,0,0,0.12);
          box-shadow: 0 20px 40px -20px rgba(0,0,0,0.35);
          text-align: center;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.55);
        }
        .hero-node strong {
          display: block;
          margin-top: 6px;
          font-size: 13px;
          letter-spacing: 0.1em;
          color: rgba(0,0,0,0.8);
        }
        .edge-slice {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }
        .dark-stage {
          background:
            radial-gradient(600px 400px at 12% 20%, rgba(255,255,255,0.08), transparent 60%),
            radial-gradient(900px 600px at 90% 10%, rgba(255,255,255,0.05), transparent 60%),
            #0f0f11;
        }
        .section-shell { border-top: 1px solid rgba(0,0,0,0.08); }
        .footer-shell {
          background:
            radial-gradient(900px 420px at 10% -10%, rgba(0, 0, 0, 0.04), transparent 60%),
            radial-gradient(900px 420px at 90% -10%, rgba(0, 0, 0, 0.03), transparent 60%),
            linear-gradient(180deg, rgba(246, 241, 234, 0) 0%, rgba(246, 241, 234, 0.9) 40%, #efe9e1 100%);
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
        .footer-icon:hover {
          background: rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        .marquee-shell {
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.65);
          border-radius: 40px;
        }
        .marquee-track {
          display: flex;
          gap: 18px;
          width: max-content;
        }
        .marquee-card {
          min-width: 280px;
          max-width: 320px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 26px;
          padding: 20px 22px;
          box-shadow: 0 20px 45px -24px rgba(0,0,0,0.35);
        }
      `}</style>

      <Navbar bgClass="bg-[#f6f1ea]/80" />

      <section className="relative min-h-screen pt-32 pb-20 hero-field overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center space-y-6"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-display leading-[0.95]"
            >
              A living ecosystem
              <br />
              that moves with you.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-black/60 leading-relaxed max-w-2xl mx-auto"
            >
              Rings, bands, lockets, and safety gear share the same AI and data
              layer, so your experience stays consistent everywhere.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/buy"
                className="h-14 px-8 rounded-full bg-black text-white font-semibold flex items-center gap-2 hover:-translate-y-1 transition-transform shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
              >
                Buy Jerry <ArrowUpRight size={18} />
              </Link>
              <Link
                to="/mission"
                className="h-14 px-8 rounded-full border border-black/15 text-black font-semibold flex items-center justify-center bg-white/70 hover:bg-white transition-colors"
              >
                Our mission
              </Link>
            </motion.div>
          </motion.div>

          <div className="mt-30 relative">
            <div className="hero-orbit">
              <div className="hero-core">
                <img
                  src={ecosystem}
                  alt="ONYU ecosystem devices"
                  className="w-full rounded-[50%] border border-black/10 bg-white/70"
                />
              </div>
              <div ref={heroOrbitRef} className="absolute inset-0">
                <div className="hero-orbit-ring" />
                {[
                { label: "Rings", value: "Control" },
                { label: "Bands", value: "Wellness" },
                { label: "Lockets", value: "Daily" },
                { label: "Safety", value: "Protect" },
                { label: "Shared AI", value: "Always on" },
                { label: "Unified Data", value: "One timeline" },
              ].map((node, idx) => (
                  <div
                    key={node.label}
                    ref={(el) => (heroNodesRef.current[idx] = el)}
                    className="hero-node"
                    style={{
                      top:
                        idx === 0 || idx === 1
                          ? "-6%"
                          : idx === 2 || idx === 3
                          ? "78%"
                          : "36%",
                      left:
                        idx === 0
                          ? "12%"
                          : idx === 1
                          ? "62%"
                          : idx === 2
                          ? "6%"
                          : idx === 3
                          ? "70%"
                          : idx === 4
                          ? "-4%"
                          : "78%",
                    }}
                  >
                    {node.label}
                    <strong>{node.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
              System Architecture
            </p>
            <h2 className="text-4xl md:text-6xl font-display mt-4">
              Built to scale
              <br />
              with your life.
            </h2>
            <p className="text-black/60 leading-relaxed mt-6 max-w-md">
              Every ONYU device speaks the same language. You can start with one
              wearable and grow without losing your setup.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="chip">Rings</span>
              <span className="chip">Bands</span>
              <span className="chip">Lockets</span>
              <span className="chip">Smart Watches</span>
            </div>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {devices.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="glass-card rounded-[30px] p-6 soft-shadow"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="text-black/60" />
                    <span className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <p className="font-display text-2xl mt-4">{item.title}</p>
                  <p className="text-sm text-black/60 mt-2">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 dark-stage text-[#f2efe9] edge-slice">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-white/60 font-semibold">
              Signal Flow <span className="w-10 h-[1px] bg-white/30" />
              ONYU AI
            </div>
            <h2 className="text-4xl md:text-6xl font-display leading-tight">
              One assistant,
              <br />
              everywhere.
            </h2>
            <p className="text-white/60 leading-relaxed max-w-md">
              The ONYU AI layer keeps your summaries, reminders, and insights
              synchronized across every wearable. One identity. One memory.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="grid gap-5"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.label}
                  variants={fadeUp}
                  className="rounded-[28px] border border-white/15 bg-white/5 p-6"
                >
                  <div className="flex items-center gap-3 text-white">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-semibold">
                        {pillar.label}
                      </p>
                      <p className="font-display text-xl">{pillar.title}</p>
                    </div>
                  </div>
                  <p className="text-white/60 mt-4">{pillar.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between gap-8 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
                Unified Data
              </p>
              <h2 className="text-4xl md:text-6xl font-display mt-4">
                One timeline.
                <br />
                Endless growth.
              </h2>
            </div>
            <div className="flex items-center gap-3 text-black/40">
              <Radar size={18} />
              <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                No reset required
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center mt-10">
            <div>
              <p className="text-black/60 leading-relaxed max-w-md">
                ONYU brings together health, activity, and AI summaries in a
                single, clean dashboard. Add devices anytime and keep your
                context intact.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                <StatCard label="Daily Sync" value="Instant" />
                <StatCard label="AI Summaries" value="Every day" />
                <StatCard label="Devices" value="Unlimited" />
                <StatCard label="Data Points" value="Millions" />
              </div>
            </div>
            <div className="relative">
              <img
                src={image2}
                alt="ONYU app dashboard"
                className="w-full rounded-[48px] soft-shadow border border-black/10 bg-white/70 floaty-slow"
              />
            </div>
          </div>

          <div
            className="mt-12 marquee-shell px-4 py-6"
            onMouseEnter={() => marqueeTweenRef.current?.pause()}
            onMouseLeave={() => marqueeTweenRef.current?.resume()}
          >
            <div ref={marqueeTrackRef} className="marquee-track">
              {[...streamCards, ...streamCards].map((card, idx) => (
                <div key={`${card.label}-${idx}`} className="marquee-card">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-semibold">
                    {card.label}
                  </p>
                  <h3 className="text-xl font-display mt-3">{card.title}</h3>
                  <p className="text-sm text-black/60 mt-2">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
              Featured Device
            </p>
            <h2 className="text-4xl md:text-6xl font-display mt-4">
              Jerry leads
              <br />
              the ecosystem.
            </h2>
            <p className="text-black/60 leading-relaxed mt-6 max-w-md">
              The smart gesture ring is the first chapter of ONYU. It controls
              every screen, tracks essential health, and anchors the shared AI
              experience.
            </p>
            <Link
              to="/jerry"
              className="mt-8 inline-flex h-14 px-8 rounded-full bg-black text-white font-semibold items-center gap-2"
            >
              Explore Jerry <ArrowUpRight size={18} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={jerry}
              alt="Jerry ring close-up"
              className="w-full rounded-[48px] soft-shadow border border-black/10 bg-white/70 floaty"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display"
          >
            Build your ONYU kit.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black/60"
          >
            Start with Jerry and expand into bands, lockets, and safety
            essentials when you are ready.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/buy"
              className="h-16 px-12 rounded-full bg-black text-white font-semibold text-lg flex items-center gap-3 justify-center hover:-translate-y-1 transition-transform shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
            >
              Buy Jerry <span className="opacity-50">|</span> ₹4,999
            </Link>
            <button
              onClick={() => navigate("/mission")}
              className="h-16 px-12 rounded-full border border-black/15 font-semibold flex items-center justify-center"
            >
              Our Mission
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SignalChip({ label }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
      {label}
    </span>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-4">
      <div className="h-10 w-10 rounded-xl bg-black/[0.06] flex items-center justify-center">
        <Activity size={18} className="text-black/70" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
          {label}
        </p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}
