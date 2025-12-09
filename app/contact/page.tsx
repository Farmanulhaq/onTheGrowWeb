"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    const res = await fetch("/apis/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    alert(result.message);
  };


  return (
    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">
      <Navbar />

      {/* ================================================== HERO Section ================================================== */}

      <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] px-6 pt-24 bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight z-10"
        >
          Let’s build the kind of leadership the world deserves.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-2xl text-gray-100"
        >
          One leader. One team. One organization at a time.
        </motion.p>
      </section>

      {/* ================================================== CONTACT FORM ================================================== */}

      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#D0D2D5] to-[#E2E3E7] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#2F8E91] mb-10"
        >
          Get in Touch
        </motion.h2>

        <form
          action="#"
          method="POST"
          className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#2F8E91] hover:shadow-2xl transition-all"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9]"
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9]"
          />

          <input
            type="text"
            name="role"
            placeholder="Your Role"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9]"
          />

          <textarea
            name="challenge"
            rows={4}
            placeholder="What challenge are you solving?"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9] md:col-span-2"
          ></textarea>

          <input
            type="text"
            name="timeline"
            placeholder="Timeline (e.g., Q1 2026, ASAP, etc.)"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9]"
          />

          <input
            type="text"
            name="budget"
            placeholder="Budget Range"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9]"
          />

          <input
            type="text"
            name="referral"
            placeholder="How did you hear about us?"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9] md:col-span-2"
          />

          <button
            type="submit"
            className="bg-[#7F6BC9] text-white font-semibold py-3 rounded-md hover:bg-[#6D5AC1] transition md:col-span-2"
          >
            Let’s Connect
          </button>
        </form>

        {/* ================================================== MICROCOPY ================================================== */}
        <p className="mt-6 text-gray-600 text-sm">
          We’ll respond within one business day. Your information is kept
          confidential.
        </p>
      </section>

      {/* ================================================== ALT CONTACT ================================================== */}

      <section className="py-16 bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED] text-center">
        <h2 className="text-2xl font-bold text-[#2F8E91] mb-6">
          Prefer another way to connect?
        </h2>

        <div className="space-y-4 text-gray-700">
          <p>
            Email us at{" "}
            <a
              href="mailto:hello@onthegrowleadership.com"
              className="text-[#7F6BC9] font-semibold hover:underline"
            >
              hello@onthegrowleadership.com
            </a>
          </p>

          <p>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/company/onthegrowleadership"
              target="_blank"
              className="text-[#7F6BC9] font-semibold hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
