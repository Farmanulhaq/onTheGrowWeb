"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Resource() {
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
          Tools that turn learning into action.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-2xl text-gray-100"
        >
          Guides, templates, and articles for leaders who want to grow.
        </motion.p>
      </section>

      {/* ================================================== Resource Items ================================================== */}

      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-12"
        >
          Leadership Resources
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            [
              "GROWTH™ Model Guide",
              "A step-by-step framework for turning insight into sustained growth.",
              "/files/growth-model-guide.pdf",
            ],
            [
              "Coaching Conversation Prompts",
              "Structured prompts to help leaders guide meaningful, high-impact conversations.",
              "/files/coaching-prompts.pdf",
            ],
            [
              "Leadership Habits Tracker",
              "A daily and weekly tracker to help leaders build sustainable growth habits.",
              "/files/leadership-habits-tracker.pdf",
            ],
            [
              "Articles & Research",
              "Explore evidence-based insights on coaching ROI, AI in leadership, and manager effectiveness.",
              "/files/articles-research.pdf",
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

      {/* ================================================== CTA ================================================== */}

      <section className="relative py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Get the Guide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-10 text-gray-100 text-lg"
        >
          Download the GROWTH™ Model Guide and start turning learning into
          action today.
        </motion.p>

        <a
          href="/files/growth-model-guide.pdf"
          target="_blank"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3.5 rounded-full font-semibold hover:bg-[#F4F5F7] transition shadow-md"
        >
          Download Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
