"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() 
{
  return (

    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">

      <Navbar />

      {/* ================================================== HERO Button ================================================== */}
      
      <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] px-6 pt-24 bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white overflow-hidden">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight z-10"
        >
          Let's Connect & Grow Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mt-6 max-w-2xl text-gray-100"
        >
          Have a question, collaboration idea, or want to explore coaching and
          advisory support? We’d love to hear from you.
        </motion.p>

      </section>

      {/* ================================================== Contact Form ================================================== */}

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

          <select
            name="interest"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9] md:col-span-2"
          >
            <option value="">I'm interested in...</option>
            <option value="coaching">Coaching</option>
            <option value="advisory">Advisory</option>
            <option value="other">Other</option>
          </select>
          
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9] md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="bg-[#7F6BC9] text-white font-semibold py-3 rounded-md hover:bg-[#6D5AC1] transition md:col-span-2"
          >
            Send Message
          </button>

        </form>

      </section>

      {/* ================================================== Calendly Embed ================================================== */}

      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED]">

        <h2 className="text-3xl font-bold text-[#2F8E91] mb-8">
          Book a Discovery Call
        </h2>

        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://calendly.com/yourusername/discovery-call"
            width="100%"
            height="600"
            className="rounded-2xl shadow-md border-0"
          ></iframe>
        </div>

      </section>

      {/* ================================================== Links ================================================== */}

      <section className="py-16 bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-center text-white">

        <h2 className="text-2xl font-bold mb-6">Explore Our Partner Brands</h2>

        <div className="flex flex-wrap justify-center gap-8">

          <a
            href="https://rekrewter.com"
            target="_blank"
            className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-medium transition"
          >
            REKREWTER
          </a>

          <a
            href="https://onthegrow.ai"
            target="_blank"
            className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-medium transition"
          >
            OnTheGrow.AI
          </a>

        </div>

      </section>

      <Footer />

    </main>
    
  );
}
