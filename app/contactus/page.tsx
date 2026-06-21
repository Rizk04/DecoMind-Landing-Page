import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import HeroContact from "@/components/Contact/HeroContact";
import Footer from "@/components/Footer/Footer";
import React from "react";

const ContactUs = () => {
  return (
    <div className="md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      <div className=" md:snap-start">
        <HeroContact />
      </div>

      <div className=" md:snap-start">
        <ContactInfo />
      </div>
      <section className="md:snap-start">
        <Footer />
      </section>
    </div>
  );
};

export default ContactUs;
