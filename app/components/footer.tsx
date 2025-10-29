import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1F1F1F] via-[#242424] to-[#2B2B2B] text-gray-300 py-14 px-8 md:px-16 overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2F8E91]/10 via-transparent to-[#7F6BC9]/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ================= Left Side ================= */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-semibold">OnTheGrow Leadership</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Leadership | Advisory | AI Coaching <br />
            Powered by the <span className="text-[#7F6BC9] font-medium">GROWTH™ Leadership Coaching Model</span> 
            and <span className="text-[#2F8E91] font-medium">OnTheGrow.AI</span> — The Intelligent Coaching System and Growth Companion™.
          </p>
        </div>

        {/* ================= Right Side ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="/mission" className="hover:text-[#7F6BC9] transition">Mission</a></li>
              <li><a href="/values" className="hover:text-[#2F8E91] transition">Values</a></li>
              <li><a href="/careers" className="hover:text-[#7F6BC9] transition">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-[#2F8E91] transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#7F6BC9] transition">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
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
                  href="mailto:contact@onthegrowleadership.com"
                  className="flex items-center gap-2 hover:text-[#7F6BC9] transition"
                >
                  <FaEnvelope size={16} /> Email
                </a>
              </li>
              <li>
                <a href="/media" className="hover:text-white transition">
                  Media
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= Divider & Copyright ================= */}
      <div className="relative z-10 mt-10 border-t border-gray-700/40 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} OnTheGrow Leadership. All rights reserved.</p>
        <p className="text-gray-500 text-xs">
          Designed with <span className="text-[#7F6BC9]">growth</span> in mind.
        </p>
      </div>
    </footer>
  );
}
