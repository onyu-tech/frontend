import { Link, useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const navigate = useNavigate();

  return (
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
              <button type="button" className="block footer-link">
                Help Center
              </button>
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
                <button className="footer-icon" type="button" aria-label="Instagram">
                  <FaInstagram />
                </button>
                <button className="footer-icon" type="button" aria-label="Facebook">
                  <FaFacebookF />
                </button>
                <button className="footer-icon" type="button" aria-label="YouTube">
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
  );
}
