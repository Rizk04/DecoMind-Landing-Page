"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI Room Design",
    subtitle: "Generate stunning interiors in seconds",
    description:
      "Create photorealistic room designs with custom styles, lighting, materials, wood species, color palettes, and budget priorities.",
    features: [
      "100+ design combinations",
      "Lighting-aware generation",
      "Budget-based planning",
      "Photorealistic renders",
    ],
    image: "../Assets/images/ai-design.jpg",
  },
  {
    title: "Instant Capture",
    subtitle: "Photograph Any Room. See Its Future.",
    description:
      "Take a photo of your room and instantly redesign it with AI while preserving the room structure.",
    features: [
      "Preserves room dimensions",
      "Multiple redesign concepts",
      "Furniture transformation",
      "Professional visualizations",
    ],
    image: "../Assets/images/capture.jpg",
  },
  {
    title: "AI Editing",
    subtitle: "Edit Without Starting Over",
    description:
      "Replace furniture, lighting, materials, and decor while keeping everything else untouched.",
    features: [
      "Replace sofas",
      "Swap lighting",
      "Change flooring",
      "Material transformations",
    ],
    image: "../Assets/images/editing.jpg",
  },
];

const stats = [
  { value: "1200+", label: "AI Designs Generated" },
  { value: "50+", label: "Styles & Materials" },
  { value: "4.8★", label: "User Rating" },
  { value: "500+", label: "Happy Customers" },
];

export default function ServicesPage() {
  return (
    /* 
      1. Enabled scroll snapping on the main parent container.
      2. Added smooth scrolling behavior.
    */
    <div className="bg-[#1A3A5C] text-white overflow-x-hidden h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory pt-[10vh]">
      
      {/* HERO SECTION */}
      {/* Changed to min-h-[90svh] and added snap-start + scroll-mt to handle zoom gracefully */}
      <section className="min-h-[90svh] flex items-center px-4 sm:px-6 lg:px-20 py-12 snap-start scroll-mt-[10vh]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Prevents animation stuttering while snap-scrolling
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#0D9DB8] font-semibold uppercase tracking-wider text-sm sm:text-base">
              DecoMind Services
            </span>

            <h1
              className="font-bold mt-4 leading-tight"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              }}
            >
              Design Smarter.
              <br />
              <span className="text-[#0D9DB8]">
                Visualize Before You Build.
              </span>
            </h1>

            <p className="text-gray-300 mt-6 max-w-xl text-base sm:text-lg">
              Transform room photos, floor plans, and ideas into photorealistic
              interiors powered by advanced AI technology.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
              <button className="bg-[#0D9DB8] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-[#0bc0e0] transition-colors">
                Start Designing
              </button>

              <button className="border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base hover:bg-white/5 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#0D9DB8]/20 blur-[120px] pointer-events-none" />
            <img
              src="../Assets/images/hero-phone.jpg"
              className="relative z-10 mx-auto max-h-[40vh] sm:max-h-[550px] lg:max-h-[600px] object-contain"
              alt="DecoMind"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      {/* Kept separate, but set to snap-start so it locks cleanly into position */}
      <section className="px-4 sm:px-6 lg:px-20 py-12 snap-start scroll-mt-[10vh] min-h-[50svh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center"
            >
              <h3
                className="font-bold text-[#0D9DB8]"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                {stat.value}
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTIONS */}
      {/* Added snap-start and min-h-screen to ensure each individual service is its own dedicated viewport card */}
      {services.map((service, index) => (
        <section
          key={service.title}
          className="px-4 sm:px-6 lg:px-20 min-h-[90svh] flex items-center py-16 snap-start scroll-mt-[10vh]"
        >
          <div
            className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#0D9DB8] font-medium text-sm sm:text-base">
                {service.title}
              </span>

              <h2
                className="font-bold mt-3 leading-tight"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
              >
                {service.subtitle}
              </h2>

              <p className="text-gray-300 mt-5 sm:mt-6 text-sm sm:text-lg leading-relaxed">
                {service.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-sm sm:text-base"
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#0D9DB8]/20 blur-[100px] pointer-events-none" />
              <img
                src={service.image}
                className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 max-h-[45vh] lg:max-h-[500px] w-full object-cover mx-auto"
                alt={service.title}
              />
            </motion.div>
          </div>
        </section>
      ))}

      {/* FLOOR PLAN SECTION */}
      <section className="px-4 sm:px-6 lg:px-20 min-h-[90svh] flex items-center py-16 snap-start scroll-mt-[10vh]">
        <div className="max-w-7xl mx-auto w-full">
          <h2
            className="font-bold mt-4"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            From Floor Plans To Reality
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6 mt-12 sm:mt-16">
            {[
              "Upload Plan",
              "AI Detects Rooms",
              "Customize Styles",
              "Generate Designs",
              "Photoreal Results",
            ].map((step) => (
              <div
                key={step}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-8 text-center text-sm sm:text-base flex items-center justify-center min-h-[100px]"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}