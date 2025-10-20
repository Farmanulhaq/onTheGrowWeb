"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Resource() 
{
  return (

    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">

      <Navbar />

      {/* ================================================== Hero Section ================================================== */}

      <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] px-6 pt-24 bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white overflow-hidden">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight z-10"
        >
          Leadership Resources & Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-2xl text-gray-100"
        >
          Practical tools, insights, and templates to help you grow as a leader
          and strengthen your organization.
        </motion.p>

      </section>

      {/* ================================================== (Articles / Guides) Section ================================================== */}

      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-12"
        >
          Featured Articles & Guides
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            [
              "The GROWTH Model Playbook",
              "A practical guide to applying our leadership framework in daily work.",
              "/files/growth-playbook.pdf",
            ],
            [
              "Coaching Conversation Scripts",
              "Structured prompts to lead better 1:1s and team discussions.",
              "/files/coaching-scripts.pdf",
            ],
            [
              "Building a Leadership Culture",
              "How to embed leadership growth into your organizational DNA.",
              "/files/leadership-culture.pdf",
            ],
          ].map(([title, desc, link], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#7F6BC9]"
            >

              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">
                {title}
              </h3>

              <p className="text-gray-600 mb-4">{desc}</p>

              <a
                href={link}
                target="_blank"
                className="text-[#2F8E91] font-semibold hover:underline"
              >
                Download →
              </a>

            </motion.div>

          ))}
        </div>

      </section>

      {/* ================================================== Newsletter ================================================== */}

      <section className="relative py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Subscribe for Leadership Insights
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-10 text-gray-100 text-lg"
        >
          Join our newsletter for actionable strategies and leadership tools —
          straight to your inbox.
        </motion.p>

        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-5 py-3.5 rounded-full text-gray-800 bg-white/90 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9]"
          />

          <button
            type="submit"
            className="bg-white text-[#2F8E91] px-8 py-3.5 rounded-full font-semibold hover:bg-[#F4F5F7] transition shadow-md"
          >
            Subscribe
          </button>

        </form>

      </section>

      {/* ================================================== (Speaking & Events) Section ================================================== */}

      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED] text-center">
        
        <h2 className="text-3xl font-bold text-[#2F8E91] mb-6">
          Speaking & Events
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Book Liz Corey or our OnTheGrow team for keynotes, leadership
          workshops, or corporate retreats.
        </p>

        <a
          href="/contact"
          className="inline-block bg-[#7F6BC9] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6D5AC1] transition shadow-md"
        >
          Request Speaking Info
        </a>

      </section>

      <Footer />

    </main>
  );
}
