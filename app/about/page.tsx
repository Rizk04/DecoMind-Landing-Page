import ContactUs from "@/components/Home/About/ContactUs";
import Description from "@/components/Home/About/Description";
import MiddleDecription from "@/components/Home/About/MiddleDecription";
import React from "react";

const AboutPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <section className="h-screen snap-start">
        <Description />
      </section>

      <section className="h-screen snap-start">
        <MiddleDecription />
      </section>

      <section className="h-screen snap-start">
        <ContactUs />
      </section>
    </div>
  );
};

export default AboutPage;