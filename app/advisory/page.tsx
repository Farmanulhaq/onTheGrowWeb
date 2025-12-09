"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Advisory() {
  const focusAreas = [
    { title: "Org & Operating Model Design", desc: "Structure, roles, decision rights." },
    { title: "Talent & Recruiting Systems", desc: "Pipelines, process, and selection tools." },
    { title: "Manager Effectiveness & Enablement", desc: "Playbooks, training, and feedback loops." },
    { title: "Culture, Engagement & Retention", desc: "Build trust, standards, and shared success." },
    { title: "People Analytics & Governance", desc: "Metrics, cadences, and accountability." },
  ];

  const howWeWork = [
    { title: "Assessment", desc: "Understand your current systems, leadership, and culture foundation." },
    { title: "Blueprint", desc: "Design the structures, tools, and strategies to drive alignment." },
    { title: "Pilot", desc: "Launch small-scale implementations to test and refine the approach." },
    { title: "Scale", desc: "Expand proven practices company-wide for lasting transformation." },
  ];

  return (
    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative flex flex-col md:flex-row items-center justify-center text-left min-h-[90vh] px-50 pt-24 bg-gradient-to-br from-[#7F6BC9] via-[#8D9CF0] to-[#00FF7A] text-white overflow-hidden">
        {/* Floating gradients */}
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

        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-xl md:max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Advisory that builds systems where people and performance scale together.
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-6">
            Hands-on operators who partner deeply from org design to change execution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
          >
            Talk to an Advisor
          </Link>
        </motion.div>

        {/* Right Column: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 md:mt-0 md:ml-12 flex-1 flex justify-center items-center"
        >
          <img
            src="/advisory.svg" // replace with a suitable illustration
            alt="Advisory Illustration"
            className="w-full max-w-lg rounded-xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* ================= FOCUS AREAS ================= */}
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
          {focusAreas.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#7F6BC9] hover:-translate-y-2 hover:scale-[1.02] group"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#7F6BC9] mb-3 transition-colors duration-300 group-hover:text-[#00FF7A]">{item.title}</h3>
              <p className="text-gray-700 text-sm md:text-base mt-2 transition-all duration-300 group-hover:text-gray-900">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED] relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-12"
        >
          How We Work
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {howWeWork.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md border-t-4 border-[#2F8E91] hover:-translate-y-2 hover:shadow-xl transition-all group"
            >
              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3 transition-colors duration-300 group-hover:text-[#00FF7A]">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mt-1 transition-all duration-300 group-hover:text-gray-800">{item.desc}</p>
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

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Talk to an Advisor
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-8 text-gray-100"
        >
          Let’s design people systems that drive alignment, growth, and sustainable performance.
        </motion.p>

        <Link
          href="https://calendly.com/liz-onthegrowleadership/30min"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Schedule a Call
        </Link>
      </section>

      <Footer />
    </main>
  );
}
