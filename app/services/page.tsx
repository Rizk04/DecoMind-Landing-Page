"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";

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
    <>
      <style>{`
        .svc-outer {
          position: fixed;
          top: 12vh;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          background-color: #1A3A5C;
          color: white;
        }
        .svc-section {
          height: 88vh;
          scroll-snap-align: start;
          width: 100%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-left: 5vw;
          padding-right: 5vw;
        }
        .svc-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4vw;
          height: 80vh;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          align-items: center;
        }
        .svc-hero-img-col {
          height: 80vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .svc-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2vw;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
        }
        .svc-service-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4vw;
          height: 80vh;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          align-items: center;
        }
        .svc-service-img-col {
          height: 80vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .svc-footer-section {
          scroll-snap-align: start;
          width: 100%;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .svc-outer {
            position: static !important;
            height: auto !important;
            overflow-y: auto !important;
            scroll-snap-type: none !important;
            top: auto !important;
            padding-top: 8vh !important;
          }
          .svc-section {
            height: auto !important;
            scroll-snap-align: none !important;
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
            align-items: flex-start !important;
          }
          .svc-hero-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
            gap: 1.5rem !important;
          }
          .svc-hero-img-col {
            height: 70vw !important;
          }
          .svc-hero-p {
            max-width: 100% !important;
          }
          .svc-stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.75rem !important;
          }
          .svc-service-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
            gap: 1.5rem !important;
            direction: ltr !important;
          }
          .svc-service-img-col {
            height: 70vw !important;
            direction: ltr !important;
          }
          .svc-floor-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>

      <div className="svc-outer">
        {/* HERO */}
        <section className="svc-section">
          <div className="svc-hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <span
                style={{ fontSize: "clamp(0.55rem, 0.9vw, 0.85rem)" }}
                className="text-[#0D9DB8] font-semibold uppercase tracking-widest"
              >
                DecoMind Services
              </span>
              <h1
                className="font-bold leading-tight mt-[1.5vh]"
                style={{ fontSize: "clamp(1.4rem, 2.8vw, 3.5rem)" }}
              >
                Design Smarter.
                <br />
                <span className="text-[#0D9DB8]">
                  Visualize Before You Build.
                </span>
              </h1>
              <p
                className="svc-hero-p text-gray-300 leading-relaxed mt-[1.5vh]"
                style={{
                  fontSize: "clamp(0.7rem, 1vw, 1rem)",
                  maxWidth: "38vw",
                }}
              >
                Transform room photos, floor plans, and ideas into
                photorealistic interiors powered by advanced AI technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="svc-hero-img-col"
            >
              <div className="absolute inset-0 bg-[#0D9DB8]/20 blur-[8vw] pointer-events-none" />
              <img
                src="../Assets/images/hero-phone.jpg"
                alt="DecoMind"
                className="relative z-10 object-contain rounded"
                style={{ maxHeight: "100%", maxWidth: "100%", width: "auto" }}
              />
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="svc-section">
          <div className="svc-stats-grid">
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
                <p
                  className="text-gray-300 mt-2"
                  style={{ fontSize: "clamp(0.65rem, 0.95vw, 1rem)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        {services.map((service, index) => (
          <section key={service.title} className="svc-section">
            <div
              className="svc-service-grid"
              style={{ direction: index % 2 !== 0 ? "rtl" : "ltr" }}
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
                      className="bg-white/5 border border-white/10 rounded"
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
                className="svc-service-img-col"
              >
                <div className="absolute inset-0 bg-[#0D9DB8]/20 blur-[6vw] pointer-events-none" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative z-10 object-contain rounded shadow-2xl border border-white/10"
                  style={{ maxHeight: "100%", maxWidth: "100%", width: "auto" }}
                />
              </motion.div>
            </div>
          </section>
        ))}

        {/* FLOOR PLAN */}
        <section className="svc-section">
          <div className="w-full max-w-7xl mx-auto">
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.4rem, 3vw, 4rem)" }}
            >
              From Floor Plans To Reality
            </h2>
            <div
              className="svc-floor-grid grid mt-[4vh]"
              style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5vw" }}
            >
              {[
                "Upload Plan",
                "AI Detects Rooms",
                "Customize Styles",
                "Generate Designs",
                "Photoreal Results",
                "Sustainable Plan",
              ].map((step) => (
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

        {/* FOOTER */}
        <section className="svc-footer-section text-black">
          <Footer />
        </section>
      </div>
    </>
  );
}
