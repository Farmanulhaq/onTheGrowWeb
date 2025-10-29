"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

/* --- Motion variants --- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any} },
};
const subtleFloat = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as any},
};

export default function Home() {
  return (
    <main className="bg-[#F1F2F4] text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* ========================= HERO ========================= */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24 bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white overflow-hidden">
        {/* decorative orbs */}
        <motion.div
          {...subtleFloat}
          className="absolute top-24 left-8 w-56 h-56 bg-white/6 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -20, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-12 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center px-4"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[0_6px_22px_rgba(0,0,0,0.25)]"
          >
            Leadership that lift, where people thrive, results follow, and everyone wins.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl mt-6 max-w-2xl text-gray-100"
          >
            We develop bold, human leaders through coaching, advisory, and AI-enabled
            development grounded in grit and grace.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform-gpu hover:-translate-y-1 transition"
            >
              Book a Discovery Call
            </Link>

            <Link
              href="/growth-model"
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#7F6BC9] transition shadow-md hover:-translate-y-1 transform-gpu"
            >
              Explore the GROWTH™ Model
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 w-full max-w-3xl bg-white/10 backdrop-blur-sm rounded-full p-3 flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between text-sm md:text-base"
          >
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="px-3 text-gray-100/90"
            >
              Trusted by private-equity backed and growth-stage organizations
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="px-3 text-gray-100/90 border-l border-white/20"
            >
              Executive coaches & operators with real-world track records
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="px-3 text-gray-100/90 border-l border-white/20"
            >
              AI-enabled leadership tools — human at the core
            </motion.span>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================= WHY OnTheGrow ========================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED]"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#2F8E91] mb-6">
          Leadership has lost its way. We’re here to restore it.
        </motion.h2>

        <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-gray-700 text-lg">
          Too often, managers drive results but break spirits, or protect comfort and call it culture.
          Both destroy potential. We help leaders balance grace and grit so teams feel seen, accountability
          becomes empowerment, and growth becomes standard.
        </motion.p>
      </motion.section>

      {/* ========================= WHAT WE DO ========================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2]"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#2F8E91] mb-12">
          Coaching. Advisory. AI-Enabled Development.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Executive & Team Coaching",
              desc: "Practical, high-trust coaching that builds courage, clarity, and consistent follow-through.",
            },
            {
              title: "Advisory & Transformation",
              desc: "Hands-on partnership to design orgs, fix systems, and scale healthy performance.",
            },
            {
              title: "OnTheGrow.AI",
              desc: "An intelligent coaching companion that accelerates learning never replacing the human.",
            },
          ].map((svc, i) => (
            <motion.article
              key={svc.title}
              variants={fadeUp}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 border-t-4 border-[#2F8E91]"
            >
              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{svc.title}</h3>
              <p className="text-gray-600 mb-4">{svc.desc}</p>
              <div className="mt-4">
                <Link
                  href="/programs"
                  className="inline-flex items-center text-[#2F8E91] font-semibold hover:underline"
                >
                  See Programs & Packages →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* ========================= MISSION & VISION ========================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#DADDE2] to-[#E2E3E7] text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#2F8E91] mb-8">
          Mission & Vision
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} className="p-6 bg-white rounded-2xl shadow-md">
            <h4 className="font-semibold text-[#7F6BC9] mb-2">Mission</h4>
            <p className="text-gray-700">We grow leaders who elevate people and performance without compromise.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="p-6 bg-white rounded-2xl shadow-md">
            <h4 className="font-semibold text-[#7F6BC9] mb-2">Vision</h4>
            <p className="text-gray-700">A world where leadership lift, where people thrive, results follow, and everyone wins.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================= PRINCIPLES ========================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-20 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white"
      >
        <motion.div variants={fadeUp} className="max-w-3xl mx-auto space-y-3">
          <p className="text-lg">Grace without grit is weakness.</p>
          <p className="text-lg">Grit without grace is harmful.</p>
          <p className="text-lg">Growth without both is impossible.</p>
          <p className="font-semibold mt-4 text-xl">
            Leadership demands all three grace to understand, grit to act, and growth to transform.
          </p>
        </motion.div>
      </motion.section>

      {/* ========================= VALUES ========================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-24 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED]"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#2F8E91] mb-6">
          Our Values
        </motion.h2>

        <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-gray-700 mb-10">
          Our values ensure clients don’t just learn leadership, they feel the impact of it. We leverage
          technology to accelerate growth, never to replace the human experience.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Client Dedication", desc: "We meet every leader and team where they are and stay until results are real." },
            { title: "Courage", desc: "Empathy + truth. We say what matters and act on it." },
            { title: "Ownership", desc: "No excuses. We deliver measurable outcomes." },
            { title: "Clarity", desc: "We simplify complexity and align action to priorities." },
            { title: "Growth", desc: "Humility, discipline, and habits that sustain success." },
          ].map((val, i) => (
            <motion.div
              key={val.title}
              variants={fadeUp}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 border-t-4 border-[#7F6BC9]"
            >
              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ========================= GROWTH MODEL TEASER ========================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2]"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#2F8E91] mb-6">
          The GROWTH™ Leadership Coaching Model
        </motion.h2>

        <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-gray-700 mb-8">
          A practical framework that turns insight into action: Goals • Reflection • Opportunities •
          What’s Next • Tracking • Habits. Built for real leaders in the real world.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link href="/growth-model" className="inline-flex items-center bg-white/90 text-[#2F8E91] px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition">
            Explore the GROWTH™ Model →
          </Link>
        </motion.div>
      </motion.section>

      {/* ========================= OnTheGrow.AI TEASER ========================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-20 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-6">
          Technology that multiplies transformation, not replaces it.
        </motion.h2>

        <motion.p variants={fadeUp} className="max-w-3xl mx-auto mb-8 text-gray-100 text-lg">
          OnTheGrow.AI is your intelligent coaching companion: prompts, reflections, and tracking to
          reinforce growth between sessions. Human coaching first. AI as a force multiplier.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            href="/onthegrow-ai"
            className="bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
          >
            Meet OnTheGrow.AI
          </Link>
        </motion.div>
      </motion.section>

      {/* ========================= RESULTS TEASER ========================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E2E3E7]"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#2F8E91] mb-6">
          When leaders grow, everyone wins.
        </motion.h2>

        <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-gray-700 mb-8">
          See how we’ve helped organizations reduce turnover, increase engagement, and scale healthy performance.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link href="/results" className="text-[#2F8E91] font-semibold hover:underline">
            View Results →
          </Link>
        </motion.div>
      </motion.section>

      {/* ========================= CLOSING CTA ========================= */}
      <section className="relative py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#FFFFFF22] rounded-full blur-3xl" />

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="relative z-10">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to build the kind of leadership the world deserves?
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform-gpu hover:-translate-y-1 transition"
            >
              Book a Discovery Call
            </Link>

            <Link
              href="/growth-guide"
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#7F6BC9] transition shadow-md hover:-translate-y-1 transform-gpu"
            >
              Download the GROWTH™ Guide
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
