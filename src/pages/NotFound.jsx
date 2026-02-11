import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen w-screen bg-[#f6f2ec] text-[#111111] font-body flex items-center justify-center px-6 py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Space Grotesk', system-ui, sans-serif; }
        .font-body { font-family: 'Manrope', system-ui, sans-serif; }
        .panel {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 36px;
          box-shadow: 0 30px 70px -30px rgba(0,0,0,0.35);
        }
        .chip {
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.04);
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.55);
        }
      `}</style>

      <div className="panel w-full max-w-2xl p-10 md:p-12 text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <span className="chip">404</span>
          <span className="text-xs uppercase tracking-[0.45em] text-black/50 font-semibold">
            Page not found
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display">We lost this page.</h1>
        <p className="text-black/60 leading-relaxed">
          The page you are looking for does not exist or has moved. Use the
          button below to head back home.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="h-12 px-8 rounded-full bg-black text-white font-semibold flex items-center justify-center"
          >
            Back to home
          </Link>
          <Link
            to="/jerry"
            className="h-12 px-8 rounded-full border border-black/15 font-semibold flex items-center justify-center bg-white/70"
          >
            Explore Jerry
          </Link>
        </div>
      </div>
    </div>
  );
}
