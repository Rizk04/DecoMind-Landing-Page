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

// The navbar is fixed at 12vh tall.
// The snap container sits below it: top: 12vh, height: 88vh.
// Every section is exactly 88vh so one section = one screen, always.
// All font/spacing uses vw so it shrinks automatically at 150% zoom.

export default function ServicesPage() {
  return (
    <div
      className="bg-[#1A3A5C] text-white overflow-x-hidden overflow-y-scroll snap-y snap-mandatory"
      style={{ position: "fixed", top: "12vh", left: 0, right: 0, bottom: 0 }}
    >
      {/* HERO */}
      <section
        className="snap-start w-full shrink-0 flex items-center overflow-hidden px-[5vw]"
        style={{ height: "88vh" }}
      >
        <div
          className="w-full max-w-7xl mx-auto grid items-center"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "4vw", height: "80vh" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <span style={{ fontSize: "clamp(0.55rem, 0.9vw, 0.85rem)" }} className="text-[#0D9DB8] font-semibold uppercase tracking-widest">
              DecoMind Services
            </span>
            <h1
              className="font-bold leading-tight mt-[1.5vh]"
              style={{ fontSize: "clamp(1.4rem, 2.8vw, 3.5rem)" }}
            >
              Design Smarter.
              <br />
              <span className="text-[#0D9DB8]">Visualize Before You Build.</span>
            </h1>
            <p
              className="text-gray-300 leading-relaxed mt-[1.5vh]"
              style={{ fontSize: "clamp(0.7rem, 1vw, 1rem)", maxWidth: "38vw" }}
            >
              Transform room photos, floor plans, and ideas into photorealistic
              interiors powered by advanced AI technology.
            </p>
           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
            style={{ height: "80vh" }}
          >
            <div className="absolute inset-0 bg-[#0D9DB8]/20 blur-[8vw] pointer-events-none" />
            <img
              src="../Assets/images/hero-phone.jpg"
              alt="DecoMind"
              className="relative z-10 object-contain"
              style={{ maxHeight: "75vh", maxWidth: "100%", width: "auto" }}
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="snap-start w-full shrink-0 flex items-center overflow-hidden px-[5vw]"
        style={{ height: "88vh" }}
      >
        <div
          className="w-full max-w-7xl mx-auto grid"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "2vw" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl text-center"
              style={{ padding: "clamp(1rem, 2.5vw, 2.5rem)" }}
            >
              <h3
                className="font-bold text-[#0D9DB8]"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 2.5rem)" }}
              >
                {stat.value}
              </h3>
              <p className="text-gray-300 mt-2" style={{ fontSize: "clamp(0.65rem, 0.95vw, 1rem)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      {services.map((service, index) => (
        <section
          key={service.title}
          className="snap-start w-full shrink-0 flex items-center overflow-hidden px-[5vw]"
          style={{ height: "88vh" }}
        >
          <div
            className="w-full max-w-7xl mx-auto grid items-center"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gap: "4vw",
              height: "80vh",
              direction: index % 2 !== 0 ? "rtl" : "ltr",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
              style={{ direction: "ltr" }}
            >
              <span
                className="text-[#0D9DB8] font-medium"
                style={{ fontSize: "clamp(0.55rem, 0.9vw, 0.85rem)" }}
              >
                {service.title}
              </span>
              <h2
                className="font-bold leading-tight mt-[1vh]"
                style={{ fontSize: "clamp(1.2rem, 2.4vw, 3rem)" }}
              >
                {service.subtitle}
              </h2>
              <p
                className="text-gray-300 leading-relaxed mt-[1.2vh]"
                style={{ fontSize: "clamp(0.65rem, 0.95vw, 1rem)" }}
              >
                {service.description}
              </p>
              <div
                className="grid mt-[2vh]"
                style={{ gridTemplateColumns: "1fr 1fr", gap: "1vw" }}
              >
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="bg-white/5 border border-white/10 rounded-xl"
                    style={{
                      padding: "clamp(0.4rem, 0.7vw, 0.8rem)",
                      fontSize: "clamp(0.6rem, 0.85vw, 0.9rem)",
                    }}
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center"
              style={{ height: "80vh", direction: "ltr" }}
            >
              <div className="absolute inset-0 bg-[#0D9DB8]/20 blur-[6vw] pointer-events-none" />
              <img
                src={service.image}
                alt={service.title}
                className="relative z-10 object-contain rounded-2xl shadow-2xl border border-white/10"
                style={{ maxHeight: "72vh", maxWidth: "100%", width: "auto" }}
              />
            </motion.div>
          </div>
        </section>
      ))}

      {/* FLOOR PLAN */}
      <section
        className="snap-start w-full shrink-0 flex items-center overflow-hidden px-[5vw]"
        style={{ height: "88vh" }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="font-bold" style={{ fontSize: "clamp(1.4rem, 3vw, 4rem)" }}>
            From Floor Plans To Reality
          </h2>
          <div
            className="grid mt-[4vh]"
            style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "1.5vw" }}
          >
            {["Upload Plan", "AI Detects Rooms", "Customize Styles", "Generate Designs", "Photoreal Results"].map((step) => (
              <div
                key={step}
                className="bg-white/5 border border-white/10 rounded-2xl text-center flex items-center justify-center"
                style={{
                  padding: "clamp(0.8rem, 1.5vw, 2rem)",
                  fontSize: "clamp(0.6rem, 0.9vw, 1rem)",
                  minHeight: "clamp(60px, 8vh, 120px)",
                }}
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
