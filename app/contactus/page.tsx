import ContactForm from "@/components/Home/Contact/ContactForm";
import ContactInfo from "@/components/Home/Contact/ContactInfo";
import HeroContact from "@/components/Home/Contact/HeroContact";
import React from "react";

const ContactUs = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start">
        <HeroContact />
      </div>

      <div className="snap-start">
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactUs;
