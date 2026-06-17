import ContactForm from "@/components/Home/Contact/ContactForm";
import ContactInfo from "@/components/Home/Contact/ContactInfo";
import HeroContact from "@/components/Home/Contact/HeroContact";
import React from "react";

const ContactUs = () => {
  return (
    <div className="md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      <div className="md:snap-start">
        <HeroContact />
      </div>

      <div className="md:snap-start">
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactUs;
