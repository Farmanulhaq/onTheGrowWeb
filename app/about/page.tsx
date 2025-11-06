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
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 pt-24 bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white overflow-hidden">
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight z-10"
        >
          We’re coaches, operators, and builders.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-2xl text-gray-100"
        >
          We’ve led real teams in real change, and we bring that experience to you.
        </motion.p>
      </section>

      {/* ================================================== OUR STORY ================================================== */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-6"
        >
          Our Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed"
        >
          Leadership done wrong hurts people and performance. We’ve seen both.
          OnTheGrow Leadership™ was built to eradicate destructive leadership and
          replace it with courageous, human, growth-creating leadership — one
          organization at a time.
        </motion.p>
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
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-12"
        >
          Meet the Team
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            [
              "Liz Corey",
              "Founder & Principal Coach",
              "Liz Corey is an accomplished Chief People Officer and executive leadership coach with a proven record of transforming organizations and building high-performance leadership systems. She has led HR and organizational development for private-equity-backed and growth-stage companies, earning national recognition including Comparably’s Best HR Team Award. Liz specializes in executive coaching, leadership enablement, organizational design, and culture transformation — all grounded in her belief that leadership should lift people and results together.",
            ],
            [
              "Bob Brill",
              "Partner, Leadership Advisor",
              "Bob Brill is a top-performing commercial and sales leader with decades of experience in dental, medical device, and tech sectors. He has built award-winning teams, led high-growth market expansions, and is known for developing leaders who sell with confidence, clarity, and customer-centered excellence. Bob brings practical operator insight to leadership coaching, ensuring leaders not only learn — they execute, perform, and grow.",
            ],
          ].map(([name, role, bio], i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#7F6BC9]"
            >
              <h3 className="text-2xl font-bold text-[#7F6BC9] mb-1">{name}</h3>
              <p className="text-[#2F8E91] font-medium mb-4">{role}</p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{bio}</p>
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
