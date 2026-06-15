import ContactUs from "@/components/Home/About/ContactUs";
import Description from "@/components/Home/About/Description";
import MiddleDecription from "@/components/Home/About/MiddleDecription";
import React from "react";

const AboutPage = () => {
  return (
    <div className="h-screen pt-[12vh] snap-y snap-mandatory overflow-y-scroll">
      <section className="snap-start pt-[12vh]">
        <Description />
      </section>
      <section className="snap-start pt-[6vh]">
        <MiddleDecription />
      </section>
      <section className="snap-start">
        <ContactUs />
      </section>
    </div>
  );
};

export default AboutPage;
