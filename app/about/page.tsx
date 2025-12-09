"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">
      <Navbar />

      {/* ================================================== HERO Section ================================================== */}
<section className="relative flex flex-col md:flex-row items-center justify-center text-left min-h-[90vh] px-6 md:px-24 lg:px-40 xl:px-60 pt-24 bg-gradient-to-br from-[#7F6BC9] via-[#8D9CF0] to-[#00FF7A] text-white overflow-hidden">
  
  {/* Left Column: Text */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-xl md:max-w-2xl px-4 md:mr-12"
  >
    <motion.h1
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
    >
      We’re coaches, operators, and builders.
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl mb-4 text-gray-100"
    >
      We’ve led real teams in real change, and we bring that experience to you.
    </motion.p>

    <motion.div className="mt-6">
      <Link
        href="https://calendly.com/liz-onthegrowleadership/30min"
        target="_blank"
        className="bg-gradient-to-r from-[#7F6BC9] to-[#00FF7A] text-gray-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-md"
      >
        Book a Discovery Call
      </Link>
    </motion.div>
  </motion.div>

  {/* Right Column: Illustration */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="mt-12 md:mt-0 md:ml-12 flex-1 flex justify-center items-center"
  >
    <img
      src="/coaching.svg"
      alt="Coaching Illustration"
      className="w-full max-w-lg rounded-xl shadow-2xl"
    />
  </motion.div>

  {/* Floating shapes */}
  <motion.div
    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-20 left-16 w-52 h-52 bg-gradient-to-br from-[#7F6BC9]/30 via-[#2F8E91]/20 to-[#00FF7A]/20 rounded-full blur-3xl"
  />

  <motion.div
    animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-10 right-16 w-72 h-72 bg-gradient-to-br from-[#00FF7A]/10 via-[#4A8FB5]/20 to-[#7F6BC9]/10 rounded-full blur-3xl"
  />
</section>


      {/* ================================================== WHO WE SERVE ================================================== */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-6"
        >
          Who We Serve
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed"
        >
          Executives, founders, PE-backed and growth-stage companies, mission-driven
          organizations, and teams ready for healthy scale.
        </motion.p>
      </section>

      {/* ================================================== PHILOSOPHY ================================================== */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-6"
        >
          Our Philosophy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed"
        >
          Grace + Grit = Growth. Human first. Accountable always. Technology as a multiplier.
        </motion.p>
      </section>

      {/* ================================================== BIOS ================================================== */}
<section className="py-28 md:py-36 bg-white">
  <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">

    {/* Typed data array so TS is happy */}
    {(
      [
        {
          name: "Liz Corey",
          role: "Founder & Principal Coach",
          bio: "Liz Corey is an accomplished Chief People Officer and executive leadership coach with a proven record of transforming organizations and building high-performance leadership systems. She has led HR and organizational development for private-equity-backed and growth-stage companies, earning national recognition including Comparably’s Best HR Team Award. Liz specializes in executive coaching, leadership enablement, organizational design, and culture transformation — all grounded in her belief that leadership should lift people and results together.",
          timeline: ["PwC", "Velosio", "Pilgrim", "Moultrie", "OnTheGrow"]
        },
        {
          name: "Bob Brill",
          role: "Partner, Leadership Advisor",
          bio: "Bob Brill is a top-performing commercial and sales leader with decades of experience in dental, medical device, and tech sectors. He has built award-winning teams, led high-growth market expansions, and is known for developing leaders who sell with confidence, clarity, and customer-centered excellence. Bob brings practical operator insight to leadership coaching, ensuring leaders not only learn — they execute, perform, and grow.",
          timeline: null
        }
      ] as {
        name: string;
        role: string;
        bio: string;
        timeline: string[] | null;
      }[]
    ).map((item, i: number) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: i * 0.25, ease: "easeOut" }}
        viewport={{ once: true }}
        className="p-12 bg-[#EDEFF2] rounded-3xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#7F6BC9] relative overflow-hidden"
      >
        {/* Subtle animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#7F6BC9]/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        {/* -------- CARD CONTENT (unchanged) -------- */}
        <h3 className="text-3xl font-bold text-[#7F6BC9] mb-2 relative z-10">
          {item.name}
        </h3>

        <p className="text-[#2F8E91] font-medium mb-5 relative z-10">
          {item.role}
        </p>

        <p className="text-gray-700 leading-relaxed text-base mb-10 relative z-10">
          {item.bio}
        </p>
        {/* ------------------------------------------ */}

        {/* ============== TIMELINE (only if exists) ============== */}
        {item.timeline && (
          <motion.div
            className="relative z-10 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {/* Gradient Line */}
            <div className="absolute top-4 left-0 w-full h-1 bg-gradient-to-r from-[#7F6BC9] via-[#8b7ae0] to-[#7F6BC9] opacity-60 rounded-full"></div>

            <div className="flex justify-between text-xs md:text-sm font-semibold text-[#7F6BC9]">
              {item.timeline.map((company: string, index: number) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center relative cursor-pointer group"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {/* Glowing Dot */}
                  <motion.div
                    className="w-4 h-4 bg-[#7F6BC9] rounded-full shadow-lg group-hover:scale-125 transition-transform"
                    animate={{
                      boxShadow: [
                        "0 0 6px #7F6BC9",
                        "0 0 14px #7F6BC9",
                        "0 0 6px #7F6BC9"
                      ]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  />

                  <span className="mt-2 group-hover:text-[#5c49b6] transition-colors">
                    {company}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    ))}

  </div>
</section>


      {/* ================================================== CTA Section ================================================== */}
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white">
        <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>

        <p className="max-w-xl mx-auto mb-8 text-gray-100">
          Learn more about the people behind OnTheGrow Leadership™ and how we help
          leaders grow courage, clarity, and sustainable performance.
        </p>

        <a
          href="https://calendly.com/liz-onthegrowleadership/30min"
          target="_blank"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Connect with Us
        </a>
      </section>

      <Footer />
    </main>
  );
}
