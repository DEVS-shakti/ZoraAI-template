import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  Mail,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
// ============ BACKGROUND ELEMENTS ============
function BackgroundElements({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#070B1D] to-[#04050F]" />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <motion.div
        className="absolute top-0 -left-1/2 w-full h-full bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.03,
          y: mousePosition.y * 0.03,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      <motion.div
        className="absolute bottom-0 -right-1/2 w-full h-full bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * 0.02,
          y: -mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
    </div>
  );
}

// ============ NAVBAR ============
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4"
    >
      <div className="max-w-7xl mx-auto mt-4">
        <div className="backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_0_30px_rgba(168,85,247,0.08)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.45)]">
              <Sparkles className="w-5 h-5 text-white" />
            </div>

            <div>
              <h1 className="font-bold text-xl text-white">ZoraAI</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                AI Automation
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/[0.05] rounded-lg"
              >
                {item.label}
              </a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 text-white font-semibold shadow-[0_0_25px_rgba(168,85,247,0.4)]"
          >
            Get Started
            <ArrowRight size={16} />
          </motion.button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 p-4 rounded-2xl backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 rounded-lg text-gray-300 hover:bg-white/[0.05]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-6">
              <Sparkles size={16} />
              Experience Next Generation AI
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                workflows
              </span>
              <br />
              <span className="text-white">
                with intelligent automation.
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10">
              ZoraAI powers modern businesses with AI automation, advanced
              analytics, and enterprise-grade workflow intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 text-white font-bold shadow-[0_0_30px_rgba(168,85,247,0.45)]"
              >
                Get Started Free
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl text-white font-semibold hover:bg-white/[0.06]"
              >
                Book a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-purple-500/20 blur-3xl rounded-full" />

          <div className="relative backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] rounded-3xl p-3 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
            <img
              src="/img.png"
              alt="Dashboard Preview"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ TRUSTED ============
function TrustedBy() {
  const companies = [
    "Quantum",
    "Nebula",
    "Vertex",
    "Astro",
    "Apex",
    "Cosmo",
  ];

  return (
    <section className="relative py-20 px-6 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-500 text-sm mb-12 tracking-[0.3em] uppercase">
          Trusted By Leading Companies
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl py-5 flex items-center justify-center text-gray-300 font-semibold"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PRICING ============
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for startups",
      features: [
        "AI Workflow Automation",
        "Basic Integrations",
        "Analytics Dashboard",
        "Email Support",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$79",
      description: "For scaling businesses",
      features: [
        "Unlimited Workflows",
        "Advanced AI Intelligence",
        "Real-time Analytics",
        "Priority Support",
        "Custom Integrations",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated Manager",
        "24/7 Support",
        "Enterprise SLA",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Invest in Intelligence
          </h2>

          <p className="text-xl text-gray-400">
            Flexible pricing built for every scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl p-8 overflow-hidden backdrop-blur-xl ${
                plan.highlighted
                  ? "border-2 border-purple-500/70 bg-white/[0.05] shadow-[0_0_30px_rgba(168,85,247,0.45),0_0_80px_rgba(168,85,247,0.25)] scale-105"
                  : "border border-white/[0.08] bg-white/[0.03]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold rounded-bl-2xl">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>

              <p className="text-gray-400 mb-6">{plan.description}</p>

              <div className="text-5xl font-black mb-8 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {plan.price}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-4 rounded-2xl font-bold mb-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.45)]"
                    : "bg-white/[0.05] border border-white/[0.08] text-white"
                }`}
              >
                Get Started
              </motion.button>

              <ul className="space-y-4">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400 text-xs">✓</span>
                    </div>

                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>

              <div>
                <h3 className="font-bold text-xl text-white">ZoraAI</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  AI Platform
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Intelligent AI workflow systems built for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Product</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>

            <ul className="space-y-3 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">
              Stay Updated
            </h4>

            <p className="text-gray-400 text-sm mb-5">
              Subscribe for AI updates and future releases.
            </p>

            <div className="flex items-center gap-2 p-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl">
              <Mail size={18} className="text-gray-500 ml-2" />

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-sm text-white placeholder:text-gray-500 flex-1"
              />

              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold">
                Join
              </button>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {[FaTwitter, FaGithub, FaLinkedin].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-gray-300 hover:text-white transition cursor-pointer"
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 ZoraAI. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
// ================= FEATURES SECTION =================
function Features() {
  const features = [
    {
      icon: "⚡",
      title: "AI Automation",
      description:
        "Automate repetitive tasks with intelligent AI agents that learn from your workflows.",
    },
    {
      icon: "🧠",
      title: "Workflow Intelligence",
      description:
        "Intelligent workflow optimization that adapts to your team's unique processes.",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description:
        "Real-time insights into workflow performance, bottlenecks, and optimization opportunities.",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      description:
        "Connect with 1000+ tools and services. Works with your existing tech stack.",
    },
    {
      icon: "⚡",
      title: "Real-time Processing",
      description:
        "Sub-millisecond latency with enterprise-grade infrastructure and reliability.",
    },
    {
      icon: "🔐",
      title: "Enterprise Security",
      description:
        "SOC 2 Type II certified with end-to-end encryption and advanced access controls.",
    },
  ];

  return (
    <section id="features" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            Core Intelligence Modules
          </h2>

          <p className="text-gray-400 text-lg">
            Everything you need to automate and optimize workflows at scale
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(168,85,247,0.4)",
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                backdrop-blur-xl
                p-7
                transition-all
                duration-300
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-3xl mb-5">{feature.icon}</div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================= DASHBOARD SECTION =================
function Dashboard() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
            Master your data universe from a single command center.
          </h2>

          <p className="text-gray-400 text-lg">
            Beautiful, intuitive interface powered by cutting-edge AI
          </p>
        </div>

        {/* Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/[0.08]
            bg-white/[0.03]
            backdrop-blur-2xl
            p-3
            shadow-[0_0_40px_rgba(168,85,247,0.08)]
          "
        >
          {/* Glow */}
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

          {/* Main Container */}
          <div className="relative rounded-[24px] overflow-hidden border border-white/[0.06] bg-[#070B1D]">
            {/* Top Bar */}
            <div className="h-14 border-b border-white/[0.06] flex items-center px-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <span className="ml-auto text-xs text-gray-500">
                ZoraAI Dashboard
              </span>
            </div>

            {/* Layout */}
            <div className="grid lg:grid-cols-[220px_1fr] min-h-[520px]">
              {/* Sidebar */}
              <div className="border-r border-white/[0.06] bg-white/[0.02] p-5">
                <div className="space-y-3">
                  {[
                    "Dashboard",
                    "Workflows",
                    "Analytics",
                    "Integrations",
                    "Settings",
                  ].map((item, i) => (
                    <motion.div
                      whileHover={{ x: 4 }}
                      key={i}
                      className={`
                        px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all
                        ${
                          i === 0
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/20"
                            : "text-gray-400 hover:bg-white/[0.04]"
                        }
                      `}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 grid lg:grid-cols-[1fr_260px] gap-5">
                {/* Chart */}
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                  <div className="text-sm text-gray-300 font-semibold mb-6">
                    Workflow Performance
                  </div>

                  <div className="h-[340px] flex items-end gap-3">
                    {[30, 55, 70, 78, 96, 45, 72, 46, 24, 40, 29, 81].map(
                      (height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{
                            duration: 0.9,
                            delay: i * 0.04,
                          }}
                          className="
                            flex-1
                            rounded-t-xl
                            bg-gradient-to-t
                            from-purple-500
                            via-fuchsia-500
                            to-cyan-400
                            opacity-90
                            shadow-[0_0_20px_rgba(168,85,247,0.2)]
                          "
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-5">
                  {[
                    {
                      label: "Success Rate",
                      value: "98.7%",
                    },
                    {
                      label: "Avg Duration",
                      value: "2.3s",
                    },
                    {
                      label: "Total Runs",
                      value: "45.2K",
                    },
                  ].map((stat, i) => (
                    <motion.div
                      whileHover={{ y: -4 }}
                      key={i}
                      className="
                        rounded-2xl
                        border
                        border-white/[0.06]
                        bg-white/[0.03]
                        p-6
                        backdrop-blur-xl
                      "
                    >
                      <div className="text-sm text-gray-400 mb-3">
                        {stat.label}
                      </div>

                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function Integrations() {
  const integrations = [
    "Slack",
    "GitHub",
    "Jira",
    "Salesforce",
    "HubSpot",
    "Stripe",
    "Zapier",
    "Make",
    "Monday.com",
    "Asana",
    "Notion",
    "Airtable",
  ];

  return (
    <section
      id="integrations"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Plugs well with your stack
          </h2>

          <p className="text-lg text-gray-400">
            Connect with all your favorite tools
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.04,
              }}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                backdrop-blur-xl
                py-7
                px-5
                flex
                items-center
                justify-center
                cursor-pointer
                transition-all
                duration-300
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />

              <span className="relative z-10 text-white font-semibold text-sm">
                {integration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================= TESTIMONIALS SECTION =================
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      avatar: "👩‍💼",
      content:
        "ZoraAI completely transformed how we manage workflows. We've saved 40 hours per week on automation alone.",
    },
    {
      name: "Marcus Johnson",
      role: "Operations Director at DataScale",
      avatar: "👨‍💼",
      content:
        "The AI capabilities are incredibly smart. It learned our processes in days and has been improving ever since.",
    },
    {
      name: "Elena Rodriguez",
      role: "Founder of CloudStart",
      avatar: "👩‍🔬",
      content:
        "Best investment we've made for our team. The ROI was immediate and the platform just keeps getting better.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Voices from the frontier!
          </h2>

          <p className="text-lg text-gray-400">
            See what our users are saying
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                backdrop-blur-2xl
                p-8
                transition-all
                duration-300
              "
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />

              {/* Content */}
              <div className="relative z-10">
                {/* User */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">
                    {testimonial.avatar}
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-300 leading-relaxed text-[15px] mb-8">
                  "{testimonial.content}"
                </p>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-yellow-400 text-lg"
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// ================= FAQ SECTION =================
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I get started with ZoraAI?",
      answer:
        "Simply sign up, connect your tools, and create AI-powered workflows within minutes using our intuitive dashboard.",
    },
    {
      question: "Can I integrate ZoraAI with my existing tools?",
      answer:
        "Yes. ZoraAI supports integrations with Slack, GitHub, Notion, Stripe, Salesforce, and 1000+ modern platforms.",
    },
    {
      question: "Is my data secure with ZoraAI?",
      answer:
        "Absolutely. We use enterprise-grade encryption, secure cloud infrastructure, and advanced access controls.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide email support for all plans, priority support for Pro users, and dedicated enterprise assistance.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes. You can upgrade, downgrade, or cancel your subscription anytime without hidden charges.",
    },
  ];

  return (
    <section className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 text-lg">
            Everything you need to know about ZoraAI
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="
                overflow-hidden
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                  hover:bg-white/[0.03]
                  transition-all
                "
              >
                <span className="text-white font-semibold text-sm md:text-base">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: openIndex === i ? 45 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="
                    text-cyan-400
                    text-xl
                    font-light
                  "
                >
                  +
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed text-sm border-t border-white/[0.05]">
                  <div className="pt-4">{faq.answer}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================= CTA SECTION =================
function CTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Step into the future of work.
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Join thousands of teams already using ZoraAI to transform their
            workflows with intelligent AI automation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                px-10
                py-4
                rounded-2xl
                font-bold
                text-white
                bg-gradient-to-r
                from-purple-500
                via-fuchsia-500
                to-cyan-500
                shadow-[0_0_35px_rgba(168,85,247,0.45)]
                hover:shadow-[0_0_55px_rgba(168,85,247,0.7)]
                transition-all
              "
            >
              Start Free Trial
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                px-10
                py-4
                rounded-2xl
                font-bold
                text-white
                border
                border-white/[0.08]
                bg-white/[0.04]
                backdrop-blur-xl
                hover:bg-white/[0.07]
                transition-all
              "
            >
              Request Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function App() {
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--mouse-x",
          `${mouseX.current}px`
        );

        document.documentElement.style.setProperty(
          "--mouse-y",
          `${mouseY.current}px`
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-darker">
      <BackgroundElements mousePosition={{
        x: 0,
        y: 0
      }} />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <TrustedBy />
        <Features />
        <Dashboard />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;