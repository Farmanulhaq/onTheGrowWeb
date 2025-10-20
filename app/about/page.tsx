"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() 
{
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
          Everyone deserves to be led well.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-2xl text-gray-100"
        >
          At OnTheGrow Leadership, our mission is to cultivate leaders who
          inspire growth, build belonging, and drive sustainable results,
          because great leadership changes everything.
        </motion.p>

      </section>

      {/* ================================================== Bio Section ================================================== */}
      
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-12"
        >
          Meet Our Founders
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {[
            [
              "Liz Corey",
              "Founder & Leadership Coach",
              "Liz brings 20+ years of experience developing leaders and shaping high-performing cultures. She helps managers become confident, authentic, and growth-minded leaders who elevate their teams and organizations.",
            ],
            [
              "Bob Brill",
              "Co-Founder & Strategic Advisor",
              "Bob has led executive teams through transformation, mergers, and organizational growth. His pragmatic, people-first approach bridges business goals with human potential for lasting impact.",
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
              <p className="text-gray-700 leading-relaxed">{bio}</p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* ================================================== Brand Family Section ================================================== */}

      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED]">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-12"
        >
          Our Brand Family
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">

          <Link
            href="https://rekrewter.com"
            target="_blank"
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition border-t-4 border-[#7F6BC9] w-72"
          >

            <h3 className="text-xl font-semibold text-[#7F6BC9] mb-2">
              REKREWTER
            </h3>

            <p className="text-gray-600 text-sm">
              Our recruiting brand — connecting mission-driven companies with
              exceptional talent.
            </p>

          </Link>

          <Link
            href="https://onthegrow.ai"
            target="_blank"
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition border-t-4 border-[#2F8E91] w-72"
          >

            <h3 className="text-xl font-semibold text-[#2F8E91] mb-2">
              OnTheGrow.AI
            </h3>

            <p className="text-gray-600 text-sm">
              Our AI-powered leadership tool is helping managers prepare smarter
              and grow faster.
            </p>

          </Link>

        </div>

      </section>

      {/* ================================================== CTA Section ================================================== */}

      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white">

        <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>

        <p className="max-w-xl mx-auto mb-8 text-gray-100">
          Whether you’re growing leaders, transforming culture, or scaling your
          people strategy — we’d love to partner with you.
        </p>

        <a
          href="https://calendly.com/yourusername/discovery-call"
          target="_blank"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Book a Discovery Call
        </a>

      </section>

      <Footer />

    </main>

  );
}
