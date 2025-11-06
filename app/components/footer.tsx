import { FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1F1F1F] via-[#242424] to-[#2B2B2B] text-gray-300 py-14 px-8 md:px-16 overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2F8E91]/10 via-transparent to-[#7F6BC9]/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ================= Left Section ================= */}
        <div className="space-y-5">
          <h3 className="text-white text-lg font-semibold">OnTheGrow Leadership™</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Leadership | Advisory | AI Coaching <br />
            Powered by the{" "}
            <span className="text-[#7F6BC9] font-medium">GROWTH™ Leadership Coaching Model </span>
            and{" "}
            <span className="text-[#2F8E91] font-medium">OnTheGrow.AI</span> — The Intelligent Coaching System and Growth Companion™.
          </p>

          <p className="text-sm text-gray-400 italic">
            “When leaders grow, everyone wins.”
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-gray-400 mt-2">
            {["Human-Led", "AI-Enabled", "PE-Ready", "Values-Driven", "Outcomes-Focused"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 border border-gray-600 rounded-full bg-[#2B2B2B]/50 hover:border-[#7F6BC9] transition"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* ================= Right Section ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#7F6BC9] transition">Home</a></li>
              <li><a href="/coaching" className="hover:text-[#2F8E91] transition">Coaching</a></li>
              <li><a href="/advisory" className="hover:text-[#7F6BC9] transition">Advisory</a></li>
              <li><a href="/onTheGrow" className="hover:text-[#2F8E91] transition">OnTheGrow.AI</a></li>
              <li><a href="/growth" className="hover:text-[#7F6BC9] transition">GROWTH™ Model</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-[#2F8E91] transition">About</a></li>
              <li><a href="/resource" className="hover:text-[#7F6BC9] transition">Resources</a></li>
              <li><a href="/contact" className="hover:text-[#2F8E91] transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com/OnTheGrowLeadership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#1877F2] transition"
                >
                  <FaFacebook size={16} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#2F8E91] transition"
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:liz@onthegrowleadership.com"
                  className="flex items-center gap-2 hover:text-[#7F6BC9] transition"
                >
                  <FaEnvelope size={16} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= Divider & Legal ================= */}
      <div className="relative z-10 mt-10 border-t border-gray-700/40 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} OnTheGrow Leadership™. All rights reserved.{" "}
          <br className="md:hidden" />
          GROWTH™ Model and Growth Companion™ are trademarks of OnTheGrow Leadership.
        </p>
        <p className="text-gray-500">
          Designed with <span className="text-[#7F6BC9] font-medium">growth</span> in mind.
        </p>
      </div>
    </footer>
  );
}
