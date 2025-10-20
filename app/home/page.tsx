"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() 
{
  return (

    <main className="bg-[#F1F2F4] text-gray-800 overflow-hidden">

      <Navbar />

      {/* ================================================== Hero Section ================================================== */}

      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24 bg-gradient-to-br from-[#2F8E91] via-[#4A8FB5] to-[#7F6BC9] text-white overflow-hidden">

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-2xl"
          >
            When leaders grow, employees thrive, cultures flourish, and businesses win.
            
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl mt-6 max-w-2xl text-gray-100"
          >
            OnTheGrow Leadership helps managers and executives build clarity,
            confidence, and habits that last — through leadership coaching,
            strategic HR advisory, and AI-powered tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-white text-[#2F8E91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md hover:-translate-y-1 transform duration-200"
            >
              Book a Discovery Call
            </Link>
            <a
              href="https://onthegrow.ai"
              target="_blank"
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#7F6BC9] transition shadow-md hover:-translate-y-1 transform duration-200"
            >
              Explore OnTheGrow.AI
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        />
      </section>


      {/* ================================================== Growth Model Section ================================================== */}

      
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#DADDE2] to-[#E5E8ED] text-center">

        <h2 className="text-3xl font-bold text-[#2F8E91] mb-6">The GROWTH Model</h2>

        <p className="max-w-2xl mx-auto mb-12 text-gray-700">
          A proven framework to help leaders set goals, explore realities,
          generate options, and create habits that transform performance.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "1. Gain Clarity",
              desc: "Understand your leadership strengths, blind spots, and opportunities for growth.",
            },
            {
              title: "2. Refine Goals",
              desc: "Set clear, achievable objectives that align with your purpose and vision.",
            },
            {
              title: "3. Own Your Path",
              desc: "Build consistent habits and accountability to sustain your growth.",
            },
          ].map((step, i) => (

            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 border-t-4 border-[#7F6BC9]"
            >
              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>

          ))}

        </div>

        <div className="mt-10">

          <Link href="/coaching" className="text-[#2F8E91] font-semibold hover:underline">
            Learn More →
          </Link>

        </div>

      </section>

      {/* ================================================== Services Section ================================================== */}

      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-br from-[#E2E3E7] to-[#DADDE2]">

        <h2 className="text-3xl font-bold text-[#2F8E91] mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Leadership Coaching",
              desc: "One-on-one or team coaching to elevate clarity, confidence, and capability.",
              link: "/coaching",
            },
            {
              title: "Advisory Services",
              desc: "Strategic HR and leadership advisory to strengthen culture and performance.",
              link: "/advisory",
            },
            {
              title: "Recruiting (REKREWTER)",
              desc: "Hire exceptional talent aligned with your organization’s values and vision.",
              link: "https://rekrewter.com",
            },
          ].map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-[#EDEFF2] rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#2F8E91]"
            >

              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{svc.title}</h3>

              <p className="text-gray-600 mb-4">{svc.desc}</p>

              <Link
                href={svc.link}
                target={svc.link.startsWith("http") ? "_blank" : "_self"}
                className="text-[#2F8E91] font-semibold hover:underline"
              >
                Learn More →
              </Link>

            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================== Outcomes Section ================================================== */}

      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#DADDE2] to-[#E2E3E7] text-center">

        <h2 className="text-3xl font-bold text-[#2F8E91] mb-12">Outcomes That Matter</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Clarity & Confidence",
              desc: "Lead decisively and inspire trust through a clear leadership vision.",
            },
            {
              title: "Stronger Teams",
              desc: "Foster collaboration, accountability, and engagement at every level.",
            },
            {
              title: "Sustainable Habits",
              desc: "Develop routines that keep growth consistent and meaningful.",
            },
          ].map((benefit, i) => (

            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#EDEFF2] p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 border-t-4 border-[#7F6BC9]"
            >

              <h3 className="text-xl font-semibold text-[#7F6BC9] mb-3">{benefit.title}</h3>

              <p className="text-gray-600">{benefit.desc}</p>

            </motion.div>

          ))}
        </div>
      </section>

      {/* ================================================== Newsletter CTA Section ================================================== */}

      <section className="relative py-24 px-6 md:px-16 text-center bg-gradient-to-r from-[#7F6BC9] to-[#2F8E91] text-white overflow-hidden">

        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

        <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#FFFFFF22] rounded-full blur-3xl" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 drop-shadow-lg"
        >
          Stay Connected. Keep Growing.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-10 text-gray-100 text-lg"
        >
          Subscribe for leadership insights, growth strategies, and OnTheGrow updates — straight to your inbox.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto z-10"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-5 py-3.5 rounded-full text-gray-800 bg-white/90 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7F6BC9] transition"
          />
          <button
            type="submit"
            className="bg-[#FFFFFF] text-[#2F8E91] px-8 py-3.5 rounded-full font-semibold hover:bg-[#F4F5F7] transition shadow-md"
          >
            Subscribe
          </button>
        </motion.form>

        <div className="mt-10 flex justify-center">

          <div className="w-24 h-1 bg-white/60 rounded-full" />

        </div>

      </section>

      <Footer />
    </main>
  );
}
