"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Coaching()
{
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
          Great leaders aren’t born <br />they’re grown.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-3xl text-gray-100"
        >
          Our leadership coaching turns everyday managers into confident leaders
          who inspire thriving teams and drive real results.
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

      {/* ================================================== Pain Points Section ================================================== */}

      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-10"
        >
          The Challenge Modern Managers Face
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Unprepared Managers",
              desc: "Many new leaders are promoted without the tools to lead confidently or effectively.",
            },
            {
              title: "Employee Disengagement",
              desc: "Lack of strong leadership causes frustration, low morale, and poor performance.",
            },
            {
              title: "High Turnover",
              desc: "When leaders struggle, teams leave. Replacing talent costs time, money, and culture.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 border-t-4 border-[#7F6BC9]"
            >
              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================================================== Growth Model Section ================================================== */}

      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED]">

        <h2 className="text-3xl font-bold text-[#2F8E91] mb-6">
          Our GROWTH Coaching Model
        </h2>

        <p className="max-w-2xl mx-auto mb-12 text-gray-700">
          A simple, powerful framework that turns leadership challenges into
          actionable breakthroughs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["Goal", "Define what success looks like for you and your team."],
            ["Reflection", "Identify what’s working and what’s holding you back."],
            ["Options", "Explore creative paths to overcome leadership roadblocks."],
            ["What’s Next", "Commit to small, meaningful next steps."],
            ["Tactics", "Apply practical tools and leadership strategies."],
            ["Habits", "Build sustainable routines for long-term growth."],
          ].map(([title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md border-t-4 border-[#2F8E91] hover:-translate-y-2 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================================================== Tech Edge Section ================================================== */}

      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED]">

        <h2 className="text-3xl font-bold text-[#2F8E91] mb-4">Our Tech Edge</h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          Every coaching session is enhanced by <strong>OnTheGrow.AI</strong> — our
          AI-powered tool that helps you prepare, reflect, and stay accountable between sessions.
        </p>

        <a
          href="https://onthegrow.ai"
          target="_blank"
          className="inline-block mt-8 bg-[#2F8E91] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7F6BC9] transition shadow-md"
        >
          Explore OnTheGrow.AI
        </a>

      </section>

      {/* ================================================== Outcomes Section ================================================== */}

      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2] text-center">

        <h2 className="text-3xl font-bold text-[#2F8E91] mb-12">
          Results You Can Measure
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <AnimatedStat label="Leader Confidence" value={40} prefix="+" suffix="%" delay={0.1} />
          <AnimatedStat label="Employee Engagement" value={35} prefix="+" suffix="%" delay={0.2} />
          <AnimatedStat label="Team Performance" value={28} prefix="+" suffix="%" delay={0.3} />
          <AnimatedStat label="Turnover Reduction" value={20} prefix="-" suffix="%" delay={0.4} />
        </div>

      </section>

      <Footer />
    </main>
  );
}

{/* ================================================== Numbers Animated Component ================================================== */ }
interface AnimatedStatProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

function AnimatedStat({
  label,
  value,
  prefix = "",
  suffix = "",
  delay = 0,
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        delay,
        onUpdate: (v) => setCount(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-[#EDEFF2] p-8 rounded-2xl shadow-md hover:shadow-xl transition border-t-4 border-[#2F8E91]"
    >
      <h3 className="text-3xl font-bold text-[#7F6BC9] mb-2">
        {prefix}
        {count}
        {suffix}
      </h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}
