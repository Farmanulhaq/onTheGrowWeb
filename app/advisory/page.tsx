"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Advisory() {
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
          Advisory that builds systems where people and performance scale together.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-3xl text-gray-100"
        >
          Hands-on operators who partner deeply from org design to change execution.
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
            Talk to an Advisor
          </Link>
        </motion.div>
      </section>

      {/* ================================================== FOCUS AREAS ================================================== */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-12"
        >
          Our Focus Areas
        </motion.h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {[
            ["Org & Operating Model Design", "Structure, roles, decision rights."],
            ["Talent & Recruiting Systems", "Pipelines, process, and selection tools."],
            ["Manager Effectiveness & Enablement", "Playbooks, training, and feedback loops."],
            ["Culture, Engagement & Retention", "Build trust, standards, and shared success."],
            ["People Analytics & Governance", "Metrics, cadences, and accountability."],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#7F6BC9] hover:-translate-y-1 hover:scale-[1.02]"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#7F6BC9] mb-3">{title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================== HOW WE WORK ================================================== */}
      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED] relative">
        <h2 className="text-3xl font-bold text-[#2F8E91] mb-12">How We Work</h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            ["Assessment", "Understand your current systems, leadership, and culture foundation."],
            ["Blueprint", "Design the structures, tools, and strategies to drive alignment."],
            ["Pilot", "Launch small-scale implementations to test and refine the approach."],
            ["Scale", "Expand proven practices company-wide for lasting transformation."],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md border-t-4 border-[#2F8E91] hover:-translate-y-2 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-gray-700 text-lg font-medium"
        >
          with measurable milestones and executive rhythm.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-700 italic"
        >
          <span className="font-semibold text-[#2F8E91]">Principle:</span> Human at the core. Technology as a force multiplier.
        </motion.p>
      </section>

      {/* ================================================== CTA ================================================== */}
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white">
        <h2 className="text-3xl font-bold mb-4">Talk to an Advisor</h2>

        <p className="max-w-xl mx-auto mb-8 text-gray-100">
          Let’s design people systems that drive alignment, growth, and sustainable performance.
        </p>

        <a
          href="https://calendly.com/liz-onthegrowleadership/30min"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Schedule a Call
        </a>
      </section>

      <Footer />
    </main>
  );
}
