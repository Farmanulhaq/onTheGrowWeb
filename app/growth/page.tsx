"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Growth() {
  return (
    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">
      <Navbar />

      {/* ================================================== HERO Section ================================================== */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-6 pt-24 bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white overflow-hidden">
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

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight z-10"
        >
          The practical framework leaders actually use.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-3xl text-gray-100"
        >
          Six steps that turn insight into action, and action into sustained growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10"
        >
          <Link
            href="#download"
            className="bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
          >
            Download the GROWTH™ Model Guide
          </Link>
        </motion.div>
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
          {[
            ["Goals", "Define outcomes that matter."],
            ["Reflection", "Get honest about what’s true now."],
            ["Opportunities", "Surface options and choose the best path."],
            ["What’s Next", "Decide, commit, calendar."],
            ["Tracking", "Measure and inspect what you expect."],
            ["Habits", "Build rhythms that sustain performance."],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#7F6BC9] hover:-translate-y-1 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-[#2F8E91] mb-3">{title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{desc}</p>
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
      <section
        id="download"
        className="py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Download the GROWTH™ Model Guide</h2>

        <p className="max-w-xl mx-auto mb-8 text-gray-100">
          Get the full framework, templates, and tools to implement the GROWTH™ system in your organization.
        </p>

        <a
          href="/growth-model-guide.pdf"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
          download
        >
          Download Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
