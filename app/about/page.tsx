import ContactUs from "@/components/About/ContactUs";
import Description from "@/components/About/Description";
import MiddleDecription from "@/components/About/MiddleDecription";
import Footer from "@/components/Footer/Footer";
import React from "react";

const AboutPage = () => {
  return (
    <div className="md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      <section className="h-screen md:snap-start">
        <Description />
      </section>

      <section className="h-screen md:snap-start">
        <MiddleDecription />
      </section>

      <section className="h-screen md:snap-start">
        <ContactUs />
      </section>
      <section className="md:snap-start">
        <Footer />
      </section>
    </div>
  );
};

export default AboutPage;
