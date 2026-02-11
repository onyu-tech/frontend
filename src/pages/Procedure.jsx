import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  User,
  Mail,
  Phone,
  MapPin,
  Home,
  Building2,
  CreditCard,
  Lock,
  Package,
  Truck,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const steps = [
  { id: 0, title: "Customer info", desc: "Name, email, phone" },
  { id: 1, title: "Shipping address", desc: "Delivery details" },
  { id: 2, title: "Payment", desc: "Secure checkout" },
  { id: 3, title: "Review", desc: "Confirm your order" },
  { id: 4, title: "Success", desc: "Product bought" },
];

const panelVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.98 },
};

const pop = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function Procedure() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const goNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

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
        .stage {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px;
        }
        .panel {
          width: min(920px, 92vw);
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 40px 90px -40px rgba(0,0,0,0.4);
          position: relative;
          overflow: hidden;
        }
        .panel-inner { padding: 36px 42px; }
        .panel-glow {
          position: absolute;
          inset: -30%;
          background: radial-gradient(circle, rgba(0,0,0,0.07), transparent 60%);
          opacity: 0.3;
          pointer-events: none;
          animation: glow 10s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .step-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .step-chip {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.04);
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.6);
        }
        .step-index {
          height: 42px;
          width: 42px;
          border-radius: 14px;
          background: rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.6);
          font-weight: 700;
        }
        .progress {
          height: 6px;
          border-radius: 999px;
          background: rgba(0,0,0,0.08);
          overflow: hidden;
        }
        .progress > span {
          display: block;
          height: 100%;
          background: #111111;
          width: 0%;
          transition: width 0.4s ease;
        }
        .form-field {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.95);
          border-radius: 18px;
          padding: 12px 16px;
          width: 100%;
          font-size: 15px;
          height: 54px;
        }
        .form-field::placeholder { color: rgba(0,0,0,0.4); }
        .input-with-icon { position: relative; }
        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(0,0,0,0.35);
          pointer-events: none;
        }
        .input-with-icon .form-field { padding-left: 46px; }
        .cta-btn {
          height: 54px;
          padding: 0 26px;
          border-radius: 999px;
          font-weight: 600;
        }
        .summary-card {
          background: linear-gradient(140deg, rgba(255,255,255,0.95), rgba(255,255,255,0.7));
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 28px;
          padding: 18px 20px;
        }
        .accent-0 { background: radial-gradient(600px 300px at 10% 0%, rgba(0,0,0,0.06), transparent 60%); }
        .accent-1 { background: radial-gradient(600px 300px at 90% 0%, rgba(0,0,0,0.06), transparent 60%); }
        .accent-2 { background: radial-gradient(600px 300px at 50% -10%, rgba(0,0,0,0.06), transparent 60%); }
        .accent-3 { background: radial-gradient(600px 300px at 20% 0%, rgba(0,0,0,0.06), transparent 60%); }
        .accent-4 { background: radial-gradient(600px 300px at 80% 0%, rgba(0,0,0,0.06), transparent 60%); }
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

      <Navbar bgClass="bg-[#f6f2ec]/80" />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="stage">
          <div className="panel">
            <div className={`panel-glow accent-${step}`} />
            <div className="panel-inner">
              <div className="step-header">
                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-black/40 font-bold">
                    Checkout
                  </p>
                  <h1 className="text-3xl md:text-5xl font-display mt-2">
                    {steps[step].title}
                  </h1>
                  <p className="text-black/60 mt-2">{steps[step].desc}</p>
                </div>
                <div className="step-index">{String(Math.min(step + 1, 4)).padStart(2, "0")}</div>
              </div>

              <div className="progress mt-6">
                <span style={{ width: `${Math.min((step / 4) * 100, 100)}%` }} />
              </div>

              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step-0"
                    variants={panelVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="mt-8 space-y-8"
                  >
                    <motion.div variants={pop} initial="hidden" animate="visible" className="summary-card flex items-center gap-3">
                      <User size={18} className="text-black/50" />
                      <div className="text-sm text-black/60">We will only use this for order updates.</div>
                    </motion.div>

                    <div className="grid gap-5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                          Full name
                        </p>
                        <input className="form-field mt-2" placeholder="Enter your full name" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                            Email
                          </p>
                          <div className="input-with-icon mt-2">
                            <Mail size={16} className="input-icon" />
                            <input className="form-field" placeholder="you@email.com" />
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                            Phone
                          </p>
                          <div className="input-with-icon mt-2">
                            <Phone size={16} className="input-icon" />
                            <input className="form-field" placeholder="+91 00000 00000" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="text-xs text-black/50">Next: shipping address</div>
                      <button onClick={goNext} className="cta-btn bg-black text-white flex items-center gap-2">
                        Continue <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step-1"
                    variants={panelVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="mt-8 space-y-8"
                  >
                    <motion.div variants={pop} initial="hidden" animate="visible" className="summary-card flex items-center gap-3">
                      <MapPin size={18} className="text-black/50" />
                      <div className="text-sm text-black/60">We ship across India in 7–10 days.</div>
                    </motion.div>

                    <div className="grid gap-5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                          Address line
                        </p>
                        <input className="form-field mt-2" placeholder="Street address" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                            City
                          </p>
                          <input className="form-field mt-2" placeholder="City" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                            State
                          </p>
                          <input className="form-field mt-2" placeholder="State" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                            Pin code
                          </p>
                          <input className="form-field mt-2" placeholder="000000" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                            Address type
                          </p>
                          <div className="flex gap-2 mt-2">
                            <button type="button" className="form-field flex items-center justify-center gap-2">
                              <Home size={16} /> Home
                            </button>
                            <button type="button" className="form-field flex items-center justify-center gap-2">
                              <Building2 size={16} /> Work
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <button onClick={goBack} className="cta-btn border border-black/15">
                        Back
                      </button>
                      <button onClick={goNext} className="cta-btn bg-black text-white flex items-center gap-2">
                        Continue <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    variants={panelVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="mt-8 space-y-8"
                  >
                    <motion.div variants={pop} initial="hidden" animate="visible" className="summary-card flex items-center gap-3">
                      <Lock size={18} className="text-black/50" />
                      <div className="text-sm text-black/60">Encrypted and secure payment.</div>
                    </motion.div>

                    <div className="grid gap-5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                          Card holder name
                        </p>
                        <input className="form-field mt-2" placeholder="Name on card" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                          Card number
                        </p>
                        <input className="form-field mt-2" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                            Expiry
                          </p>
                          <input className="form-field mt-2" placeholder="MM/YY" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 font-semibold">
                            CVV
                          </p>
                          <input className="form-field mt-2" placeholder="***" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <button onClick={goBack} className="cta-btn border border-black/15">
                        Back
                      </button>
                      <button onClick={goNext} className="cta-btn bg-black text-white flex items-center gap-2">
                        Review <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step-3"
                    variants={panelVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="mt-8 space-y-8"
                  >
                    <motion.div variants={pop} initial="hidden" animate="visible" className="summary-card flex items-center gap-3">
                      <Package size={18} className="text-black/50" />
                      <div className="text-sm text-black/60">Review before confirming your order.</div>
                    </motion.div>

                    <div className="summary-card space-y-4">
                      <div className="flex items-center justify-between text-sm text-black/60">
                        <span>Jerry Smart Ring</span>
                        <span className="text-black">₹4,999</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-black/60">
                        <span>Shipping</span>
                        <span className="text-black">Free</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <button onClick={goBack} className="cta-btn border border-black/15">
                        Back
                      </button>
                      <button onClick={goNext} className="cta-btn bg-black text-white flex items-center gap-2">
                        Place order <Truck size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step-4"
                    variants={panelVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className="mt-8 space-y-8"
                  >
                    <motion.div
                      variants={pop}
                      initial="hidden"
                      animate="visible"
                      className="summary-card flex items-center gap-3"
                    >
                      <Sparkles size={18} className="text-black/50" />
                      <div className="text-sm text-black/60">Order confirmed successfully.</div>
                    </motion.div>

                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-black text-white flex items-center justify-center">
                        <Check size={20} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.45em] text-black/50 font-semibold">
                          Product bought
                        </p>
                        <h2 className="text-2xl font-display mt-2">
                          Thank you for your purchase.
                        </h2>
                      </div>
                    </div>

                    <div className="summary-card space-y-3">
                      <div className="flex items-center justify-between text-sm text-black/60">
                        <span>Order total</span>
                        <span className="text-black">₹4,999</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-black/60">
                        <span>Delivery</span>
                        <span className="text-black">7–10 days</span>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate("/")}
                      className="cta-btn bg-black text-white flex items-center gap-2"
                    >
                      Back to home <ArrowUpRight size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
