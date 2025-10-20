"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Advisory() 
{
  type CaseHighlight = {
    title: string;
    wins: string[];
  };

  const caseHighlights: CaseHighlight[] = [
    {
      title: "Private Equity-Backed Portfolio",
      wins: [
        "Built scalable HR systems for 5 portfolio companies",
        "Reduced time-to-hire by 30%",
        "Improved leadership bench strength",
      ],
    },
    {
      title: "Senior Living Operator",
      wins: [
        "Designed competency-based leadership programs",
        "Increased engagement scores by 18%",
        "Reduced turnover 22%",
      ],
    },
    {
      title: "Tech Company",
      wins: [
        "Implemented people analytics dashboard",
        "Streamlined performance reviews",
        "Built remote-first culture framework",
      ],
    },
  ];

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
          Strong people systems and teams create strong businesses.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-3xl text-gray-100"
        >
          From HR transformation to M&A integration, we design scalable people
          strategies that grow leaders, strengthen cultures, and unlock
          performance.
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
            Book a Discovery Call
          </Link>

        </motion.div>

      </section>

      {/* ================================================== Focus Area Section ================================================== */}

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

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            ["HR Transformation", "Redesign HR processes, policies, and structures for modern impact."],
            ["Organization Design", "Build org charts and workflows that align people with strategy."],
            ["M&A People Advisory", "Seamlessly integrate talent, leadership, and culture post-acquisition."],
            ["Culture & Engagement", "Strengthen purpose, belonging, and performance across teams."],
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

      </section>

      {/* ================================================== Approach Section ================================================== */}

      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED] relative">

        <h2 className="text-3xl font-bold text-[#2F8E91] mb-6">Our Advisory Approach</h2>

        <p className="max-w-2xl mx-auto mb-16 text-gray-700">
          We partner with you through a structured, collaborative process that turns strategy into action.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-10 max-w-6xl mx-auto relative">

          {[
            ["Assess", "We audit your people systems, leadership practices, and culture health."],
            ["Design", "We co-create strategies, structures, and roadmaps tailored to your goals."],
            ["Implement", "We guide execution with hands-on support and measurable results."],
          ].map(([title, desc], i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center p-8 bg-[#EDEFF2] rounded-2xl shadow-md border-t-4 border-[#2F8E91] hover:-translate-y-2 hover:shadow-xl transition-all w-full md:w-1/3"
            >
              <div className="text-2xl font-bold text-[#7F6BC9] mb-3">{title}</div>
              <p className="text-gray-600 text-sm md:text-base">{desc}</p>

              {i < 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.3, duration: 0.6 }}
                  className="hidden md:flex items-center justify-center absolute right-[-45px] top-1/2 -translate-y-1/2 z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.4}
                    stroke="currentColor"
                    className="w-12 h-12 text-[#7F6BC9] animate-bounce-x"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </motion.div>
              )}
            </motion.div>

          ))}

        </div>

        <style jsx>{`
          @keyframes bounce-x {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(6px);
            }
          }
          .animate-bounce-x {
            animation: bounce-x 1.5s infinite;
          }
        `}</style>

      </section>

      {/* ================================================== Case Highlights Section ================================================== */}

      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">

        <h2 className="text-3xl font-bold text-[#2F8E91] mb-12">Client Impact Highlights</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">

          {caseHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition border-t-4 border-[#7F6BC9]"
            >

              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{item.title}</h3>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {item.wins.map((w, idx) => (
                  <li key={idx}>{w}</li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </section>

      {/* ================================================== Engagement Models Section ================================================== */}

      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED]">

        <h2 className="text-3xl font-bold text-[#2F8E91] mb-8">Flexible Engagement Models</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            ["Fractional CHRO", "Strategic HR leadership without full-time cost."],
            ["Project Based", "Focused, time-bound engagements for specific initiatives."],
            ["Retainer", "Ongoing advisory support to sustain growth and accountability."],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition border-t-4 border-[#2F8E91]"
            >
              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================================================== Call To Action Section ================================================== */}

      <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white">

        <h2 className="text-3xl font-bold mb-4">Partner with Us</h2>

        <p className="max-w-xl mx-auto mb-8 text-gray-100">
          Let's build people systems that power sustainable business growth.
          Book a consultation to get started.
        </p>

        <a
          href="https://calendly.com/yourusername/discovery-call"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Book a Discovery Call
        </a>

      </section>

      <Footer />
      
    </main>
  );
}
