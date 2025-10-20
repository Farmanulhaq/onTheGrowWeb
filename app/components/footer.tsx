import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer() 
{
  
  return (

    <footer className="relative bg-gradient-to-br from-[#1F1F1F] via-[#242424] to-[#2B2B2B] text-gray-300 py-14 px-6 md:px-16 text-sm overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-t from-[#2F8E91]/10 via-transparent to-[#7F6BC9]/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">

        {/* ================================================== Links Grid ================================================== */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center md:text-left">

          <div>

            <h3 className="text-white font-semibold mb-3 text-base">Explore</h3>

            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Coaching", "/coaching"],
                ["Advisory", "/advisory"],
              ].map(([text, href]) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="hover:text-[#7F6BC9] transition duration-200"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          <div>

            <h3 className="text-white font-semibold mb-3 text-base">Resources</h3>
            
            <ul className="space-y-2">
              {[
                ["Resources", "/resource"],
                ["Blog", "/blog"],
                ["Privacy Policy", "/privacy"],
                ["Terms of Service", "/terms"],
              ].map(([text, href]) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="hover:text-[#2F8E91] transition duration-200"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          <div>

            <h3 className="text-white font-semibold mb-3 text-base">Sister Brands</h3>

            <ul className="space-y-2">

              <li>

                <a
                  href="https://rekrewter.com"
                  target="_blank"
                  className="hover:text-[#7F6BC9] transition duration-200"
                >
                  REKREWTER
                </a>

              </li>

              <li>

                <a
                  href="https://onthegrow.ai"
                  target="_blank"
                  className="hover:text-[#2F8E91] transition duration-200"
                >
                  OnTheGrow.AI
                </a>

              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-white font-semibold mb-3 text-base">Connect</h3>

            <ul className="flex gap-4 justify-center md:justify-start">

              <li>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-gray-400 hover:text-[#2F8E91] transition"
                >
                  <FaLinkedin size={20} />
                </a>

              </li>

              <li>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-gray-400 hover:text-[#7F6BC9] transition"
                >
                  <FaInstagram size={20} />
                </a>

              </li>

              <li>

                <a
                  href="https://onthegrowleadership.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaGlobe size={20} />
                </a>

              </li>

            </ul>

          </div>

        </div>

        {/* ================================================== Divider ================================================== */}

        <div className="border-t border-gray-700/40" />

        {/* ================================================== Copyright Row ================================================== */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white">OnTheGrow Leadership</span>. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs">
            Designed with <span className="text-[#7F6BC9]">growth</span> in mind.
          </p>

        </div>

      </div>
      
    </footer>
  );
}
