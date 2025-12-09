"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaUsers, FaChartLine, FaLightbulb, FaRobot } from "react-icons/fa";

// -------------------- Animations --------------------
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, when: "beforeChildren" } },
};
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const float: Variants = { animate: { y: [0, -10, 0] } };

export default function Home() {
  return (
    <main className="bg-[#F1F2F4] text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
<section className="relative flex flex-col md:flex-row items-center justify-center text-left min-h-screen px-6 md:px-70 pt-24 bg-gradient-to-br from-[#7F6BC9] via-[#8D9CF0] to-[#00FF7A] text-white overflow-hidden">

  {/* Left Column: Text */}
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={container}
    className="relative z-10 max-w-xl md:max-w-lg lg:max-w-xl px-4 md:px-0 md:mr-12 flex-shrink-0"
  >
    <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
      Leadership That Lifts.™
    </motion.h1>
    <motion.p variants={fadeUp} className="text-lg sm:text-xl text-gray-100 mb-4">
      Where <span className="text-white font-semibold">Grace, Grit & Growth™</span> create leaders people want to follow.
    </motion.p>
    <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-200 mb-6">
      OnTheGrow Leadership transforms managers into coaches who elevate people, performance, and culture — with proven frameworks and AI-powered tools.
    </motion.p>

    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-6">
      <Link
        href="https://calendly.com/liz-onthegrowleadership/30min"
        target="_blank"
        className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-[#7F6BC9] to-[#00FF7A] text-black font-semibold shadow-lg hover:scale-[1.02] transform-gpu transition"
      >
        Book a Strategy Call
      </Link>
      <Link
        href="https://OnTheGrow.AI"
        target="_blank"
        className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/20 text-white font-semibold hover:bg-white/5 transition"
      >
        Explore OnTheGrow.AI
      </Link>
    </motion.div>
  </motion.div>

  {/* Right Column: Illustration */}
  <motion.div
    variants={float}
    animate="animate"
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="mt-12 md:mt-0 flex-1 flex justify-center items-center"
  >
    <img
      src="/home.svg" // replace with your chosen illustration
      alt="Leadership and Coaching Illustration"
      className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-xl shadow-2xl"
    />
  </motion.div>
</section>



      {/* ========================= PROBLEM SECTION ========================= */}
<motion.section
  className="py-20 px-6 md:px-16 bg-[#0F0F0F] text-white"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={container}
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Column: Text & Stats */}
    <motion.div variants={fadeUp} className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">Leadership has lost its way</h2>
      <p className="text-gray-300 text-lg md:text-xl">
        Results-only leaders break people. Nice-only leaders avoid truth. Both harm culture, retention, and profitability. 
        People don’t leave companies — they leave managers. We fix that.
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <motion.div variants={fadeUp} className="p-6 bg-white/10 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/20 transition">
          <div className="text-4xl mb-2">📉</div>
          <div className="font-semibold text-xl">33.7%</div>
          <div className="text-sm text-gray-300">Turnover</div>
        </motion.div>
        <motion.div variants={fadeUp} className="p-6 bg-white/10 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/20 transition">
          <div className="text-4xl mb-2">🔥</div>
          <div className="font-semibold text-xl">High</div>
          <div className="text-sm text-gray-300">Burnout</div>
        </motion.div>
        <motion.div variants={fadeUp} className="p-6 bg-white/10 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/20 transition">
          <div className="text-4xl mb-2">💬</div>
          <div className="font-semibold text-xl">Low</div>
          <div className="text-sm text-gray-300">Communication</div>
        </motion.div>
      </div>
    </motion.div>

    {/* Right Column: How We Diagnose */}
    <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-white/10 border border-white/20 shadow-lg">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">How we diagnose the problem</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Assess manager behaviors and team sentiment</li>
        <li>Identify breakdowns in feedback and accountability</li>
        <li>Map people risks to business outcomes</li>
      </ul>
    </motion.div>

  </div>
</motion.section>

      

      {/* ================= THE GROWTH SYSTEM ================= */}
      <motion.section
        className="py-20 px-6 md:px-16 bg-gray-50 text-gray-800"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4">The GROWTH System</h2>
            <p className="text-gray-700 mb-6">
              A simple, memorable framework that brings humanity, accountability, and continuous
              improvement into every leader’s day.
            </p>
            <div className="space-y-4">
              <motion.div variants={fadeUp} className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold">Grace</h4>
                <p className="text-sm text-gray-700">Humanity — truth with kindness.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold">Grit</h4>
                <p className="text-sm text-gray-700">Accountability and follow-through.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold">Growth</h4>
                <p className="text-sm text-gray-700">Connection, clarity, and continuous improvement.</p>
              </motion.div>
            </div>
            <div className="mt-6">
              <Link
                href="/growth"
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#7F6BC9] to-[#00FF7A] text-black font-semibold"
              >
                Explore the GROWTH™ Model
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative flex items-center justify-center"
          >
            <motion.svg
              viewBox="0 0 240 240"
              className="w-72 h-72"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <defs>
                <linearGradient id="gradTriangle" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7F6BC9" />
                  <stop offset="100%" stopColor="#00FF7A" />
                </linearGradient>
              </defs>
              <motion.polygon
                points="120,20 40,200 200,200"
                fill="none"
                stroke="url(#gradTriangle)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2 }}
              />
              <motion.circle cx="120" cy="20" r="6" fill="#7F6BC9" whileHover={{ scale: 1.5, fill: "#00FF7A" }} />
              <motion.circle cx="40" cy="200" r="6" fill="#FACC15" whileHover={{ scale: 1.5, fill: "#7F6BC9" }} />
              <motion.circle cx="200" cy="200" r="6" fill="#00FF7A" whileHover={{ scale: 1.5, fill: "#FACC15" }} />
              <motion.text x="120" y="10" fontSize="12" textAnchor="middle" fill="#1f2937" whileHover={{ scale: 1.2, fill: "#7F6BC9" }}>Grace</motion.text>
              <motion.text x="40" y="220" fontSize="12" textAnchor="middle" fill="#1f2937" whileHover={{ scale: 1.2, fill: "#FACC15" }}>Grit</motion.text>
              <motion.text x="200" y="220" fontSize="12" textAnchor="middle" fill="#1f2937" whileHover={{ scale: 1.2, fill: "#00FF7A" }}>Growth</motion.text>
            </motion.svg>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================= TESTIMONIALS MARQUEE ========================= */}
<section className="relative bg-gray-900 text-white py-12 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 relative">
    <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">What Leaders Are Saying</h3>

    {/* Moving testimonials */}
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[
          "Simply brilliant. The most impactful leadership system I’ve ever experienced. — VP, Human Resources (Consumer Electronics)",
          "The GROWTH™ framework transformed how I coach. My team now has clarity, accountability, and consistently stronger performance. — Partner, Sales Organization (PE-Backed Tech Company)",
          "OnTheGrow training is practical, energizing, and real. I walked out knowing I could lead better that same day. — Territory Sales Manager (National Field Team)",
          "OnTheGrow helped us build scalable leadership capability and stronger cross-functional execution. We’re moving faster — with more trust. — Senior Leader, Talent & Culture (PE-Backed Company)",
          "Our managers finally have a repeatable way to coach. We’ve seen immediate improvements in decision-making, feedback, and accountability. — VP, Human Resources (Multi-Site Organization)",
        ].map((quote, i) => (
          <div
            key={i}
            className="inline-block px-6 py-4 text-lg md:text-xl font-medium border-l border-white/20 last:border-r border-white/20"
          >
            {quote}
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


{/* ================= OFFERINGS ================= */}
<motion.section
  className="py-20 px-6 md:px-16 bg-gray-100 text-gray-800"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={container}
>
  <div className="max-w-6xl mx-auto text-center mb-10">
    <motion.h2 variants={fadeUp} className="text-3xl font-bold">
      Offerings
    </motion.h2>
    <motion.p variants={fadeUp} className="text-gray-700 mt-3">
      Practical programs and tools that make leadership repeatable, measurable, and human.
    </motion.p>
  </div>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    {[
      { title: 'Leadership Development Programs', desc: 'Custom cohorts that build internal capability and coaching muscle.', icon: '📈' },
      { title: 'Executive Coaching', desc: 'One-to-one coaching for senior leaders navigating scale and change.', icon: '🤝' },
      { title: 'OnTheGrow.AI', desc: '24/7 AI Leadership Coach that supports daily learning and behavior change.', icon: '🤖' },
      { title: 'Team Workshops & Speaking', desc: 'Interactive sessions to align teams and land new behaviors.', icon: '🗣️' },
      { title: 'Fractional People Leadership', desc: 'Interim leaders and people ops capacity for scaling orgs.', icon: '👥' },
    ].map((o) => (
      <motion.article
        key={o.title}
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-transform duration-300 cursor-pointer group flex flex-col justify-between"
      >
        <div>
          <div className="h-12 w-12 rounded-md bg-gradient-to-br from-purple-300 to-green-300 flex items-center justify-center mb-4 text-xl">
            {o.icon}
          </div>
          <h4 className="font-semibold text-lg mb-2 relative group-hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-green-500 after:w-0 after:transition-all after:duration-300">
            {o.title}
          </h4>
          <p className="text-gray-700 text-sm mb-4 group-hover:translate-y-[-2px] transition-all duration-300">
            {o.desc}
          </p>
        </div>
        <Link
          href="/coaching"
          className="mt-4 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-green-400 text-white font-semibold text-sm text-center hover:scale-105 transform transition"
        >
          Learn More
        </Link>
      </motion.article>
    ))}
  </div>
  <motion.div variants={fadeUp} className="max-w-6xl mx-auto text-center mt-8">
    <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm">
      Powered by Partnership Coaching™
    </span>
  </motion.div>
</motion.section>


      {/* ========================= HIGHLIGHT MARQUEE ========================= */}
<section className="relative bg-gray-900 text-white py-8 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 relative">
    <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Key Highlights</h3>

    {/* Moving highlights */}
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[
          "33.7% → 22.4% Reduced Turnover",
          "500 → 2,500+ Scaled Organizations",
          "Award-winning HR Teams & Integrations",
          "Successful M&A Integrations",
          "Practical tools that scale leadership",
          "Supports daily behavior change",
        ].map((item, i) => (
          <div
            key={i}
            className="inline-block px-6 py-4 text-lg md:text-xl font-semibold border-l border-white/20 last:border-r border-white/20"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


{/* ================= WHY OnTheGrow WORKS ================= */}
<motion.section
  className="py-20 px-6 md:px-16 bg-gray-50 text-gray-800"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={container}
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    {/* Left Column */}
    <motion.div variants={fadeUp}>
      <h2 className="text-3xl font-bold mb-4">Why OnTheGrow Works</h2>
      <p className="text-gray-700 mb-6">
        Led by Liz Corey — CHRO, Forbes HR Council Member, Maxwell Leadership Certified Coach.
        We combine deep HR experience with coaching discipline and data-informed practice.
      </p>

      {/* Badges */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <img src="/maxwellBadge.jpeg" alt="Maxwell Leadership Certified Coach" className="h-12"/>
        <img src="/forbesBadge.png" alt="Forbes HR Council Member" className="h-12"/>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-green-50 rounded-lg text-center hover:shadow-lg transition">
          <div className="text-2xl font-semibold">33.7% → 22.4%</div>
          <div className="text-sm text-gray-700">Reduced turnover</div>
        </div>
        <div className="p-6 bg-purple-50 rounded-lg text-center hover:shadow-lg transition">
          <div className="text-2xl font-semibold">500 → 2,500+</div>
          <div className="text-sm text-gray-700">Scaled organizations</div>
        </div>
        <div className="p-6 bg-yellow-50 rounded-lg text-center hover:shadow-lg transition">
          <div className="text-2xl font-semibold">Award-winning</div>
          <div className="text-sm text-gray-700">Built HR teams & integrations</div>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg text-center hover:shadow-lg transition">
          <div className="text-2xl font-semibold">M&A</div>
          <div className="text-sm text-gray-700">Successful integrations</div>
        </div>
      </div>
    </motion.div>

    {/* Right Column: Case Studies */}
    <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-white shadow-md border border-gray-200">
      <h3 className="font-semibold mb-3">Case Studies</h3>
      <div className="space-y-4">
        <details className="bg-gray-100 p-3 rounded-lg">
          <summary className="font-semibold cursor-pointer">Reduced turnover & built leadership capacity</summary>
          <p className="text-sm text-gray-700 mt-2">
            We partnered with a PE-backed org to redesign frontline management, reducing voluntary turnover by 11.3 percentage points and creating an internal leadership academy.
          </p>
        </details>
        <details className="bg-gray-100 p-3 rounded-lg">
          <summary className="font-semibold cursor-pointer">Scaled HR & M&A integration</summary>
          <p className="text-sm text-gray-700 mt-2">
            Delivered practical playbooks and coaching to scale HR from 500 to 2,500+ employees while navigating two acquisitions.
          </p>
        </details>
      </div>
    </motion.div>
  </div>
</motion.section>

{/* ================= PARTNERSHIP COACHING ================= */}
<motion.section
  className="py-20 px-6 md:px-16 bg-gradient-to-br from-teal-500 via-purple-500 to-purple-700 text-white"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={container}
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Column: Text */}
    <motion.div variants={fadeUp}>
      <h2 className="text-3xl font-bold mb-4">Partnership Coaching™</h2>
      <p className="mb-4">
        In 2025, OnTheGrow Leadership acquired Partnership Coaching™, created by Rebecca Bradley.
        Our approach focuses on embedding daily coaching habits into leaders’ routines.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Practical tools that scale leadership</li>
        <li>Supports daily behavior change</li>
        <li>Data-informed, human-centered</li>
      </ul>
      <Link
        href="https://www.partnershipcoaching.com/"
        className="inline-flex items-center mt-6 px-4 py-2 rounded-full bg-white text-gray-800 font-semibold hover:scale-[1.02] transition"
      >
        Learn More
      </Link>
    </motion.div>

    {/* Right Column: Image */}
    <motion.div variants={fadeUp}>
      <img
        src="/partnershipCoaching.png"
        alt="Partnership Coaching"
        className="w-60 max-w-lg mx-auto rounded-xl shadow-lg"
      />
    </motion.div>
  </div>
</motion.section>


      <Footer />
    </main>
  );
}
