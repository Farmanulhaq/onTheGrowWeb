"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function OnTheGrowAI() {
  return (
    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">
      <Navbar />

      {/* ========================= HERO ========================= */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-6 pt-24 bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
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
          Your intelligent coaching companion human at the core.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-3xl text-gray-100"
        >
          AI-enabled prompts, reflections, and tracking that reinforce growth between sessions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
          >
            Request a Demo
          </Link>
        </motion.div>
      </section>

       {/* ========================= WHAT IT DOES ========================= */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-12"
        >
          What It Does
        </motion.h2>

        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Top row: 3 cards */}
          <div className="grid md:grid-cols-3 gap-8 w-full mb-10">
            {[
              ["Personalized Prompts", "Daily/weekly nudges aligned to goals."],
              ["Reflection & Insight", "Capture learning while it’s fresh."],
              ["Action & Tracking", "Convert intent into habits and measurable progress."],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#7F6BC9]"
              >
                <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 1 centered card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#7F6BC9] w-full md:w-1/3"
          >
            <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">Coach Connection</h3>
            <p className="text-gray-600">
              Keep momentum between sessions — without replacing the relationship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================= OUR STANCE ========================= */}
      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-8"
        >
          Our Stance on Tech
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed"
        >
          We leverage technology to accelerate growth — never to replace the human experience at the
          heart of leadership. <br />
          <span className="text-[#7F6BC9] font-medium">
            OnTheGrow.AI scales practice, not empathy.
          </span>
        </motion.p>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Grow?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-8 text-gray-100 text-lg"
        >
          Experience intelligent coaching that enhances human connection and performance.
        </motion.p>

        <Link
          href="/contact"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Request a Demo
        </Link>
      </section>

      <Footer />
    </main>
  );
}
