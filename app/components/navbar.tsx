"use client";

import Logo from "../resources/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() 
{
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    ["Home", "/"],
    ["Coaching", "/coaching"],
    ["Advisory", "/advisory"],
    ["About", "/about"],
    ["Resources", "/resource"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* ================================================== Logo ================================================== */}
        <Link href="/">
          <Image src={Logo} alt="OnTheGrow.AI Logo" width={250} height={60} />
        </Link>

        {/* ================================================== Desktop LINKS ================================================== */}

        <div className="hidden md:flex gap-6 text-gray-800 font-medium">

          {links.map(([text, href]) => {
            const isActive =
              href === "/"
                ? pathname === "/" || pathname === "/home"
                : pathname.startsWith(href);

            return (

              <Link
                key={text}
                href={href}
                className={`relative px-1 transition ${
                  isActive
                    ? "text-[#2E8C92] font-semibold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#2E8C92] after:rounded-full"
                    : "hover:text-[#2E8C92]"
                }`}
              >
                {text}
              </Link>

            );
          })}

        </div>

        {/* ================================================== Mobile Menu BUTTON ================================================== */}

        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* === MOBILE MENU === */}


      {/* ================================================== Mobile Menu ================================================== */}

      {open && (
        <div className="md:hidden bg-white shadow-md py-4 flex flex-col items-center gap-4">
          {links.map(([text, href]) => {
            const isActive =
              href === "/"
                ? pathname === "/" || pathname === "/home"
                : pathname.startsWith(href);

            return (
              
              <Link
                key={text}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-base transition ${
                  isActive
                    ? "text-[#2E8C92] font-semibold underline underline-offset-4"
                    : "hover:text-[#2E8C92]"
                }`}
              >
                {text}
              </Link>

            );
          })}

        </div>

      )}

    </nav>
    
  );
}
