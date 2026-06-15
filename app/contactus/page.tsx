import ContactForm from "@/components/Home/Contact/ContactForm";
import ContactInfo from "@/components/Home/Contact/ContactInfo";
import HeroContact from "@/components/Home/Contact/HeroContact";
import React from "react";

const ContactUs = () => {
  return (
    <div className="pt-[12vh]">
      <HeroContact />
        
          <ContactInfo />
          
      </div>
  );
};

export default ContactUs;
