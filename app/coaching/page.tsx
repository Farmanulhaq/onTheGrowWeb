"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Coaching() {
  return (
    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">
      <Navbar />

      {/* ================================================== HERO Section ================================================== */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 pt-24 bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-16 w-52 h-52 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-16 w-72 h-72 bg-white/5 rounded-full blur-3xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight z-10"
        >
          Coaching that changes leaders and the outcomes they create.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-3xl text-gray-100"
        >
          High-trust, high-accountability coaching that blends strength with humanity.
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

      {/* ================================================== WHAT YOU'LL GET ================================================== */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-10"
        >
          What You’ll Get
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Clarity", desc: "Define what matters and align around it." },
            { title: "Courage", desc: "Say and do the hard, right things." },
            { title: "Consistency", desc: "Build habits that turn values into results." },
            { title: "Capability", desc: "Scale leadership across teams and levels." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 border-t-4 border-[#7F6BC9]"
            >
              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================== PROGRAMS ================================================== */}
      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-6"
        >
          Coaching Programs
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
          {[
            {
              title: "Executive Coaching (1:1)",
              desc: "6–12 month engagements with laser-focused goals, leadership 360s, stakeholder input, and ROI metrics.",
            },
            {
              title: "Team Coaching",
              desc: "Build trust, accountability, and execution discipline across intact teams.",
            },
            {
              title: "Emerging Leader Lab",
              desc: "Cohort-based program that accelerates readiness with practice, feedback, and on-the-job application.",
            },
            {
              title: "Accelerators",
              desc: "Intensive sprints for pivotal moments new role, turnaround, M&A, or hyper-growth.",
            },
          ].map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md border-t-4 border-[#2F8E91] hover:-translate-y-2 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{prog.title}</h3>
              <p className="text-gray-600">{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================== GROWTH BACKBONE ================================================== */}
      <section className="relative py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-br from-[#E2E3E7] via-[#E9EAED] to-[#DADDE2] text-center">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,107,201,0.15),transparent_70%)]"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#2F8E91] mb-8"
          >
            The <span className="text-[#7F6BC9]">GROWTH™</span> Backbone
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-700 text-lg mb-12"
          >
            Goals • Reflection • Opportunities • What’s Next • Tracking • Habits
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg"
          >
            <p>
              Tools: <span className="font-medium text-[#2F8E91]">Journal prompts</span>,{" "}
              <span className="font-medium text-[#7F6BC9]">action plans</span>,{" "}
              <span className="font-medium text-[#4A8FB5]">KPI dashboards</span>, and{" "}
              <span className="font-medium text-[#2F8E91]">OnTheGrow.AI</span> reinforcement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================== OUTCOMES ================================================== */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-12"
        >
          Outcomes We Target
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Higher engagement and retention",
            "Faster, clearer decision-making",
            "Stronger manager effectiveness",
            "Healthier conflict resolution",
            "Measurable business impact",
          ].map((outcome, i) => (
            <motion.div
              key={outcome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 border-t-4 border-[#7F6BC9]"
            >
              <p className="text-gray-700 font-medium">{outcome}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================== CTA ================================================== */}
      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Ready to grow your leadership impact?
        </motion.h2>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Book a Discovery Call
        </Link>
      </section>

      <Footer />
    </main>
  );
}
