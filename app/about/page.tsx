import ContactUs from "@/components/Home/About/ContactUs";
import Description from "@/components/Home/About/Description";
import MiddleDecription from "@/components/Home/About/MiddleDecription";
import Footer from "@/components/Home/Footer/Footer";
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