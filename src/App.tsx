import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

// ============ BACKGROUND ELEMENTS ============
function BackgroundElements({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-darker to-darker" />
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
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
        className="absolute top-0 -left-1/2 w-full h-full bg-glow-purple rounded-full blur-3xl opacity-30"
        animate={{ x: mousePosition.x * 0.03, y: mousePosition.y * 0.03 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
      <motion.div
        className="absolute bottom-0 -right-1/2 w-full h-full bg-glow-blue rounded-full blur-3xl opacity-20"
        animate={{ x: -mousePosition.x * 0.02, y: -mousePosition.y * 0.02 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-purple rounded-full opacity-20 blur-sm animate-float" />
      <div
        className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent-cyan rounded-full opacity-15 blur-sm animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-accent-blue rounded-full opacity-10 blur-sm animate-float"
        style={{ animationDelay: "4s" }}
      />

      <motion.div
        className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-accent-purple to-transparent opacity-20"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="glass mx-auto mt-4 rounded-2xl max-w-7xl px-6 py-4 flex items-center justify-between">
        <motion.div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-lg" />
          <span className="font-bold text-xl">ZoraAI</span>
        </motion.div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:flex px-6 py-2 bg-gradient-to-r from-accent-purple to-accent-cyan text-white rounded-lg text-sm font-semibold hover:shadow-lg glow-purple transition-all"
        >
          Get Started
        </motion.button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1.5 w-6 h-6"
        >
          <div className="w-full h-0.5 bg-white" />
          <div className="w-full h-0.5 bg-white" />
          <div className="w-full h-0.5 bg-white" />
        </button>
      </div>
    </motion.nav>
  );
}

// ============ HERO SECTION ============
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-2 glass rounded-full text-xs sm:text-sm text-accent-cyan">
            ✨ Experience Next-Generation AI Automation
          </div>

          <h1 className="text-display md:text-6xl font-bold mb-6 gradient-text leading-tight">
            Transform workflows with intelligent AI automation.
          </h1>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            ZoraAI powers your team with enterprise-grade AI capabilities.
            Automate complex workflows, gain real-time insights, and scale your
            productivity without limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-cyan text-white rounded-xl font-semibold text-lg hover:shadow-xl glow-purple"
            >
              Get Started Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white rounded-xl font-semibold text-lg hover:bg-white/[0.1]"
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass rounded-2xl p-1 backdrop-blur-xl">
            <div className="relative bg-gradient-to-b from-accent-purple/10 to-accent-blue/5 rounded-xl overflow-hidden h-96 sm:h-[500px]">
              {/* Dashboard mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Top bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-white/[0.05] border-b border-white/[0.1] flex items-center px-6 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-auto text-xs text-gray-500">
                      Dashboard • Analytics
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-12 top-16 grid grid-cols-3 gap-4">
                    {/* Chart visualization */}
                    <div className="col-span-2 glass rounded-lg p-4">
                      <div className="h-full flex flex-col items-end justify-end gap-2">
                        {[0.4, 0.6, 0.8, 0.9, 0.7].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h * 100}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="w-full bg-gradient-to-t from-accent-purple to-accent-cyan rounded-t opacity-70 max-h-20"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-3">
                      {["Active", "Running", "Queue"].map((label, i) => (
                        <div
                          key={i}
                          className="glass rounded-lg p-3 text-center"
                        >
                          <div className="text-xs text-gray-400">{label}</div>
                          <div className="text-xl font-bold text-accent-cyan">
                            {[234, 89, 156][i]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-20 right-10 glass rounded-lg p-3 w-48 hidden lg:block"
          >
            <div className="text-xs font-semibold text-accent-cyan mb-2">
              ⚡ Real-time Processing
            </div>
            <div className="text-sm text-gray-300">
              Processes 10,000+ workflows instantly
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-20 left-10 glass rounded-lg p-3 w-48 hidden lg:block"
          >
            <div className="text-xs font-semibold text-accent-purple mb-2">
              🔒 Enterprise Secure
            </div>
            <div className="text-sm text-gray-300">SOC 2 Type II Certified</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ TRUSTED BY SECTION ============
function TrustedBy() {
  const companies = ["Quantum", "Astro", "Nebula", "Vertex", "Cosmo", "Apex"];

  return (
    <section className="relative py-20 px-6 border-t border-white/[0.1]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-400 text-sm mb-12">
          TRUSTED BY LEADING COMPANIES
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, color: "#06b6d4" }}
              className="flex items-center justify-center h-16 glass rounded-lg cursor-pointer transition-colors"
            >
              <span className="font-semibold text-gray-300">{company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FEATURES SECTION ============
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
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core Intelligence Modules
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to automate and optimize workflows at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ DASHBOARD SECTION ============
function Dashboard() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Master your data universe from a single command center.
          </h2>
          <p className="text-xl text-gray-400">
            Beautiful, intuitive interface powered by cutting-edge AI
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-1 backdrop-blur-xl overflow-hidden"
        >
          <div className="relative bg-gradient-to-b from-dark to-darker rounded-xl h-[600px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 h-14 bg-white/[0.02] border-b border-white/[0.1] flex items-center px-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-auto text-xs text-gray-500">
                    ZoraAI Dashboard
                  </span>
                </div>

                {/* Sidebar */}
                <div className="absolute left-0 top-14 bottom-0 w-48 border-r border-white/[0.1] bg-white/[0.02] p-4 space-y-2">
                  {[
                    "Dashboard",
                    "Workflows",
                    "Analytics",
                    "Integrations",
                    "Settings",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`px-4 py-2 rounded text-sm ${i === 0 ? "bg-accent-purple/20 text-accent-purple" : "text-gray-400"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="absolute left-48 top-14 right-0 bottom-0 p-6 grid grid-cols-3 gap-4 overflow-hidden">
                  {/* Large chart */}
                  <div className="col-span-2 glass rounded-lg p-4">
                    <div className="h-full flex flex-col">
                      <div className="text-sm font-semibold mb-4">
                        Workflow Performance
                      </div>
                      <div className="flex-1 flex items-end justify-between gap-2 pb-4">
                        {Array(12)
                          .fill(0)
                          .map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              whileInView={{
                                height: `${Math.random() * 80 + 20}%`,
                              }}
                              transition={{ duration: 1.5, delay: i * 0.05 }}
                              className="flex-1 bg-gradient-to-t from-accent-purple to-accent-cyan rounded-t opacity-70"
                            />
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column cards */}
                  <div className="space-y-4">
                    {[
                      {
                        label: "Success Rate",
                        value: "98.7%",
                        color: "from-accent-cyan",
                      },
                      {
                        label: "Avg Duration",
                        value: "2.3s",
                        color: "from-accent-purple",
                      },
                      {
                        label: "Total Runs",
                        value: "45.2K",
                        color: "from-accent-blue",
                      },
                    ].map((stat, i) => (
                      <div key={i} className="glass rounded-lg p-4">
                        <div className="text-xs text-gray-400 mb-2">
                          {stat.label}
                        </div>
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${stat.color} to-transparent bg-clip-text text-transparent`}
                        >
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ INTEGRATIONS SECTION ============
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
    <section id="integrations" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Plugs well with your stack
          </h2>
          <p className="text-xl text-gray-400">
            Connect with all your favorite tools
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-lg p-6 flex items-center justify-center cursor-pointer"
            >
              <span className="font-semibold text-center text-sm">
                {integration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS SECTION ============
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO at TechFlow",
      content:
        "ZoraAI completely transformed how we manage workflows. We've saved 40 hours per week on automation alone.",
      avatar: "👩‍💼",
    },
    {
      name: "Marcus Johnson",
      title: "Operations Director at DataScale",
      content:
        "The AI capabilities are incredibly smart. It learned our processes in days and has been improving ever since.",
      avatar: "👨‍💼",
    },
    {
      name: "Elena Rodriguez",
      title: "Founder of CloudStart",
      content:
        "Best investment we've made for our team. The ROI was immediate and the platform just keeps getting better.",
      avatar: "👩‍🔬",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Voices from the frontier!
          </h2>
          <p className="text-xl text-gray-400">See what our users are saying</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300">" {testimonial.content} "</p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PRICING SECTION ============
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 workflows/month",
        "Basic AI features",
        "Email support",
        "99.5% uptime SLA",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$79",
      description: "For growing businesses",
      features: [
        "Unlimited workflows",
        "Advanced AI capabilities",
        "Priority support",
        "99.99% uptime SLA",
        "Custom integrations",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom SLA",
        "On-premise option",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Invest in intelligence
          </h2>
          <p className="text-xl text-gray-400">
            Simple, transparent pricing for every scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: plan.highlighted ? 1.03 : 1.01 }}
              className={`relative rounded-2xl p-8 transition-all overflow-hidden ${
                plan.highlighted
                  ? `
            glass 
            border-2 border-purple-500/80
            shadow-[0_0_25px_rgba(168,85,247,0.45),
                    0_0_60px_rgba(168,85,247,0.25),
                    inset_0_0_20px_rgba(168,85,247,0.08)]
            scale-105
            before:absolute before:inset-0
            before:rounded-2xl
            before:p-[1px]
            before:bg-gradient-to-r
            before:from-purple-500
            before:via-fuchsia-500
            before:to-cyan-400
            before:opacity-70
            before:blur-[2px]
          `
                  : `
            glass 
            border border-white/10
            hover:border-white/20
          `
              }`}
            >
              {/* Glow Background */}
              {plan.highlighted && (
                <>
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />
                </>
              )}

              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="relative z-10 inline-flex items-center px-4 py-1.5 mb-5 rounded-full border border-purple-400/30 bg-purple-500/10 backdrop-blur-md">
                  <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>

                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {plan.description}
                </p>

                <div className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  {plan.price}
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`w-full py-3 rounded-xl font-semibold mb-7 transition-all duration-300 ${
                    plan.highlighted
                      ? `
                bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500
                text-white
                shadow-[0_0_25px_rgba(168,85,247,0.45)]
                hover:shadow-[0_0_40px_rgba(168,85,247,0.65)]
              `
                      : `
                glass
                border border-white/10
                text-white
                hover:bg-white/[0.08]
              `
                  }`}
                >
                  Get Started
                </motion.button>

                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-400/20">
                        <span className="text-cyan-400 text-xs">✓</span>
                      </div>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FAQ SECTION ============
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started with ZoraAI?",
      answer:
        "Simply sign up for a free account, connect your tools, and start creating AI workflows. Our onboarding takes just 5 minutes.",
    },
    {
      question: "Can I integrate ZoraAI with my existing tools?",
      answer:
        "Yes! ZoraAI integrates with 1000+ tools including Slack, GitHub, Salesforce, and more. Custom integrations are available on Enterprise plans.",
    },
    {
      question: "Is my data secure with ZoraAI?",
      answer:
        "Absolutely. We're SOC 2 Type II certified with end-to-end encryption, advanced access controls, and regular security audits.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support for all plans, priority support for Pro users, and 24/7 phone support for Enterprise customers.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription anytime without any penalties or long-term contracts.",
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about ZoraAI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} className="glass rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/[0.05] transition-colors"
              >
                <span className="text-lg font-semibold text-left">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="text-accent-cyan"
                >
                  ↓
                </motion.span>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openIndex === i ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-white/[0.1] text-gray-400">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA SECTION ============
function CTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text">
            Slap into the future of work.
          </h2>
          <p className="text-xl text-gray-400">
            Join thousands of teams already using ZoraAI to transform their
            workflows
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-accent-purple to-accent-cyan text-white rounded-xl font-bold text-lg hover:shadow-2xl glow-purple"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 glass text-white rounded-xl font-bold text-lg"
            >
              Request Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/[0.1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-lg" />
              <span className="font-bold">ZoraAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Intelligent automation for modern teams.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {["Twitter", "GitHub", "LinkedIn"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/[0.15] transition"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.1] pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 ZoraAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-darker overflow-x-hidden">
      <BackgroundElements mousePosition={mousePosition} />

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
