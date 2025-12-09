"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Growth() {
  const sixElements = [
    ["Goals", "Define outcomes that matter."],
    ["Reflection", "Get honest about what’s true now."],
    ["Opportunities", "Surface options and choose the best path."],
    ["What’s Next", "Decide, commit, calendar."],
    ["Tracking", "Measure and inspect what you expect."],
    ["Habits", "Build rhythms that sustain performance."],
  ];

  return (
    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">
      <Navbar />

      {/* ================================================== HERO ================================================== */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[85vh] px-50 pt-24 bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white overflow-hidden">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-xl md:max-w-2xl md:pr-12 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
          >
            The practical framework leaders actually use.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-100 mb-6"
          >
            Six steps that turn insight into action, and action into sustained growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/GROWTH-Model.pdf"
              download="GROWTH-Model.pdf"
              className="bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
            >
              Download the GROWTH™ Model Guide
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Illustration/Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 md:mt-0 md:ml-12 flex-1 flex justify-center items-center"
        >
          <motion.img
            src="/growth.svg" // Replace with your illustration
            alt="GROWTH Framework Mockup"
            className="w-full max-w-lg rounded-xl shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Floating Gradients */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
      </section>

      {/* ================================================== SIX ELEMENTS ================================================== */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-12"
        >
          The Six Elements of GROWTH™
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sixElements.map(([title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-lg border-t-4 border-[#7F6BC9]
                         transform transition-all duration-500 hover:-translate-y-3 hover:scale-[1.05] hover:shadow-2xl group relative overflow-hidden"
            >
              <span className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#7F6BC9] via-[#4A8FB5] to-[#00FF7A] transition-all duration-500 group-hover:w-full"></span>
              <h3 className="text-xl font-semibold text-[#2F8E91] mb-3 relative z-10 group-hover:text-[#00FF7A] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-700 mt-2 transition-all duration-300 group-hover:translate-y-1 group-hover:text-gray-900">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================== WHY IT WORKS ================================================== */}
      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED] relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-8"
        >
          Why It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-gray-700"
        >
          Simple, learnable, repeatable and designed for busy leaders in real conditions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-6 text-gray-700"
        >
          Tools: Templates, facilitation guides, and <span className="font-semibold text-[#7F6BC9]">OnTheGrow.AI</span> prompts.
        </motion.p>
      </section>

      {/* ================================================== CTA ================================================== */}
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Download the GROWTH™ Model Guide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-8 text-gray-100 text-lg"
        >
          Get the full framework, templates, and tools to implement the GROWTH™ system in your organization.
        </motion.p>

        <a
          href="/GROWTH-Model.pdf"
          download="GROWTH-Model.pdf"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Download Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
