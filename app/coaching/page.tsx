"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLightbulb, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Coaching() {
  const benefits = [
    { icon: <FaLightbulb size={30} className="text-[#7F6BC9]" />, title: "Clarity", desc: "Define what matters and align around it." },
    { icon: <FaShieldAlt size={30} className="text-[#4A8FB5]" />, title: "Courage", desc: "Say and do the hard, right things." },
    { icon: <FaChartLine size={30} className="text-[#7F6BC9]" />, title: "Consistency", desc: "Build habits that turn values into results." },
    { icon: <FaUsers size={30} className="text-[#4A8FB5]" />, title: "Capability", desc: "Scale leadership across teams and levels." },
  ];

  const programs = [
    { icon: <FaUsers size={28} className="text-[#7F6BC9]" />, title: "Executive Coaching", desc: "6–12 month engagements with laser-focused goals, leadership 360s, stakeholder input, and ROI metrics." },
    { icon: <FaUsers size={28} className="text-[#4A8FB5]" />, title: "Team Coaching", desc: "Build trust, accountability, and execution discipline across intact teams." },
    { icon: <FaUsers size={28} className="text-[#4A8FB5]" />, title: "Emerging Leader Lab", desc: "Cohort-based program that accelerates readiness with practice, feedback, and on-the-job application." },
    { icon: <FaUsers size={28} className="text-[#7F6BC9]" />, title: "Accelerators", desc: "Intensive sprints for pivotal moments, new role, turnaround, M&A, or hyper-growth." },
  ];

  return (
    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">
      <Navbar />

{/* ================================================== HERO Section ================================================== */}
<section className="relative flex flex-col md:flex-row items-center justify-center text-left min-h-[90vh] px-60 pt-24 bg-gradient-to-br from-[#7F6BC9] via-[#8D9CF0] to-[#00FF7A] text-white overflow-hidden">
  
  {/* Left Column: Text */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-xl md:max-w-2xl px-4 md:mr-12"
  >
    <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
      Coaching that changes leaders and the outcomes they create.
    </motion.h1>
    <motion.p className="text-lg md:text-xl mb-4 text-gray-100">
      High-trust, high-accountability coaching that blends strength with humanity.
    </motion.p>
    <motion.div className="mt-6">
      <Link
        href="https://calendly.com/liz-onthegrowleadership/30min"
        target="_blank"
        className="bg-gradient-to-r from-[#7F6BC9] to-[#00FF7A] text-gray-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-md"
      >
        Book a Discovery Call
      </Link>
    </motion.div>
  </motion.div>

  {/* Right Column: Illustration */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="mt-12 md:mt-0 md:ml-12 flex-1 flex justify-center items-center"
  >
    <img
      src="/coaching.svg" // replace with a coaching/leadership illustration
      alt="Coaching Illustration"
      className="w-full max-w-lg rounded-xl shadow-2xl"
    />
  </motion.div>

  {/* Floating shapes */}
  <motion.div
    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-20 left-16 w-52 h-52 bg-gradient-to-br from-[#7F6BC9]/30 via-[#2F8E91]/20 to-[#00FF7A]/20 rounded-full blur-3xl"
  />
  <motion.div
    animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-10 right-16 w-72 h-72 bg-gradient-to-br from-[#00FF7A]/10 via-[#4A8FB5]/20 to-[#7F6BC9]/10 rounded-full blur-3xl"
  />
</section>

 
{/* ================================================== WHAT YOU'LL GET ================================================== */}
<section className="py-20 px-6 md:px-16 text-center bg-[#F1F2F4]">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold text-[#7F6BC9] mb-12"
  >
    What You’ll Get
  </motion.h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {benefits.map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="p-8 bg-white rounded-2xl shadow-lg border-t-4 border-[#2F8E91] flex flex-col items-center text-center
                   transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#7F6BC9]/10 hover:via-[#2F8E91]/10 hover:to-[#00FF7A]/10 group"
      >
        <div className="mb-4 transition-transform duration-500 group-hover:scale-110">{item.icon}</div>
        <h3 className="text-xl font-semibold text-[#2F8E91] mb-2 transition-colors duration-300 group-hover:text-[#00FF7A]">
          {item.title}
        </h3>
        <p className="text-gray-700 mt-2 transition-all duration-300 group-hover:text-gray-900 group-hover:translate-y-1">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>


{/* ================================================== PROGRAMS ================================================== */}
<section className="py-20 px-6 md:px-16 text-center bg-[#F1F2F4]">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold text-[#7F6BC9] mb-12"
  >
    Coaching Programs
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
    {programs.map((prog, i) => (
      <motion.div
        key={prog.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="p-8 bg-white rounded-2xl shadow-lg border-t-4 border-[#7F6BC9] flex flex-col gap-4
                   transform transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl group"
      >
        <div>{prog.icon}</div>
        <h3 className="text-xl font-semibold text-[#7F6BC9] relative group">
          <span className="relative z-10">{prog.title}</span>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#7F6BC9] transition-all duration-300 group-hover:w-full"></span>
        </h3>
        <p className="text-gray-700 mt-2 transition-transform duration-300 group-hover:translate-y-1">{prog.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* ================================================== CTA ================================================== */}
      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#7F6BC9] via-[#8D9CF0] to-[#00FF7A] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to grow your leadership impact?
        </motion.h2>
        <Link
          href="https://calendly.com/liz-onthegrowleadership/30min"
          target="_blank"
          className="inline-block bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-md"
        >
          Book a Discovery Call
        </Link>
      </section>

      <Footer />
    </main>
  );
}
