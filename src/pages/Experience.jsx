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
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/image.png";
import image2 from "../assets/image2.png";

export default function Experience() {
  const navigate = useNavigate();

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
        :root { --paper: #f6f2ec; --ink: #111111; }
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-body { font-family: 'Manrope', system-ui, sans-serif; }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.06;
        }
        .hero-slice {
          background:
            radial-gradient(900px 520px at 15% 15%, rgba(0,0,0,0.08), transparent 60%),
            radial-gradient(900px 520px at 85% 10%, rgba(0,0,0,0.06), transparent 60%);
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
        .hero-rail {
          border-top: 1px solid rgba(0,0,0,0.12);
          border-bottom: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.6);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 18px;
        }
        .hero-frame {
          border-radius: 56px;
          background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.6));
          border: 1px solid rgba(0,0,0,0.12);
          box-shadow: 0 40px 90px -40px rgba(0,0,0,0.45);
        }
        .strip {
          border-top: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.6);
        }
        .dark-panel {
          background:
            radial-gradient(600px 400px at 15% 20%, rgba(255,255,255,0.08), transparent 60%),
            #0f0f11;
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

      <section className="relative min-h-screen pt-32 pb-20 hero-slice overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <div className="hero-rail rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.45em] text-black/50 font-semibold inline-flex items-center gap-4 mx-auto">
                Experience • Help • Guides
              </div>
              <h1 className="text-5xl md:text-7xl font-display leading-[0.95]">
                Clear answers.
                <br />
                Zero confusion.
              </h1>
              <p className="text-lg text-black/60 leading-relaxed max-w-2xl mx-auto">
                Sizing, integrations, shipping, and setup — all in one place.
                Start with how Jerry works today, then move to app AI,
                ecosystem benefits, and subscriptions next.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/buy"
                  className="h-14 px-8 rounded-full bg-black text-white font-semibold flex items-center gap-2 hover:-translate-y-1 transition-transform shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  How Jerry Works <ArrowUpRight size={18} />
                </Link>
                <Link
                  to="/ecosystem"
                  className="h-14 px-8 rounded-full border border-black/15 text-black font-semibold flex items-center justify-center bg-white/70 hover:bg-white transition-colors"
                >
                  Explore ecosystem
                </Link>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
              <div className="glass rounded-[32px] p-8">
                <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-semibold">
                  Start Here
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      icon: MousePointer2,
                      title: "How Jerry works",
                      text: "Pair, map gestures, and control any screen in minutes.",
                    },
                    {
                      icon: Ruler,
                      title: "Sizing guide",
                      text: "Measure once and pick a fit that stays secure all day.",
                    },
                    {
                      icon: Laptop,
                      title: "Integrations",
                      text: "Mac, Windows, iOS, Android, and smart TVs supported.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-black/[0.06] flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-black/60 mt-1">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { label: "Shipping", text: "Track orders and delivery timelines." },
                  { label: "Returns", text: "Simple exchanges and easy support." },
                  { label: "FAQs", text: "Clear answers to common questions." },
                  { label: "Live Help", text: "Chat with our team in minutes." },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-[24px] p-6">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-semibold">
                      {item.label}
                    </p>
                    <p className="text-black/70 mt-3">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
                How It Works
              </p>
              <h2 className="text-4xl md:text-6xl font-display">
                Three moves to flow.
              </h2>
              <p className="text-black/60 leading-relaxed max-w-md">
                Start with quick setup, glide through gestures, and let AI
                capture what matters. Everything stays synced automatically.
              </p>
            </div>
            <div className="hero-grid">
              {[
                {
                  icon: MousePointer2,
                  title: "Pair & map",
                  text: "Connect Jerry and map gestures to your daily apps.",
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
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="glass rounded-[28px] p-6">
                    <div className="h-12 w-12 rounded-2xl bg-black/[0.06] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-2xl font-display mt-4">
                      {step.title}
                    </h3>
                    <p className="text-black/60 mt-3">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
              Measuring Guide
            </p>
            <h2 className="text-4xl md:text-6xl font-display mt-4">
              Fit that feels
              <br />
              just right.
            </h2>
            <p className="text-black/60 leading-relaxed mt-6 max-w-md">
              Wrap your finger, confirm in the app, and choose a size that stays
              secure without feeling tight.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Ruler, title: "Measure", text: "Wrap and mark length." },
                { icon: ScanFace, title: "Scan", text: "Confirm with the app." },
                { icon: MapPin, title: "Adjust", text: "Pick a snug fit." },
                { icon: ShieldCheck, title: "Secure", text: "Test daily wear." },
              ].map((tip) => {
                const Icon = tip.icon;
                return (
                  <div key={tip.title} className="glass rounded-[24px] p-5">
                    <Icon size={18} className="text-black/60" />
                    <p className="mt-3 font-semibold">{tip.title}</p>
                    <p className="text-sm text-black/60 mt-2">{tip.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <img
              src={image}
              alt="Measuring Jerry ring fit"
              className="w-full rounded-[48px] soft-shadow border border-black/10 bg-white/70"
            />
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
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
              { icon: Laptop, title: "Mac & Windows", text: "Cursor + shortcuts" },
              { icon: Smartphone, title: "iOS & Android", text: "App control" },
              { icon: Tv, title: "Smart TVs", text: "Media navigation" },
              { icon: Headphones, title: "Audio", text: "Call + playback" },
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

      <section className="py-24 dark-panel text-[#f3f1ec]">
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
                { icon: LifeBuoy, title: "Support", text: "24/7 help articles" },
                { icon: MessageCircle, title: "Live chat", text: "Talk to our team" },
                { icon: Mail, title: "Email us", text: "support@onyu.ai" },
                { icon: HeartPulse, title: "Wellness", text: "Health insights" },
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
            <div className="absolute -bottom-6 right-6 glass rounded-[22px] px-5 py-4 text-sm text-black">
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/50 font-semibold">
                Real-time help
              </p>
              <p className="mt-2 text-black/70">
                Average response in under 2 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 bg-white">
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
            {faqs.map((item) => (
              <details
                key={item.q}
                className="glass rounded-[24px] px-6 py-5 open:shadow-lg"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold">{item.q}</span>
                  <ChevronDown size={18} className="text-black/50" />
                </summary>
                <p className="text-black/60 mt-3">{item.a}</p>
              </details>
            ))}
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
