import { Link } from "react-router-dom";

export default function Navbar({ variant = "default", bgClass = "" }) {
  if (variant === "home") {
    return (
      <nav className="flex items-center justify-between py-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-black/20 flex items-center justify-center">
            <div className="h-3 w-3 bg-black rounded-full" />
          </div>
          <span className="text-xl font-display uppercase tracking-[0.22em]">
            <b>Onyu</b>
          </span>
        </div>
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
    );
  }

  if (variant === "buy") {
    return (
      <nav
        className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 ${bgClass} backdrop-blur-md`}
      >
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
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 ${bgClass} backdrop-blur-md`}
    >
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
  );
}
