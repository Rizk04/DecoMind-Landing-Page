import ContactForm from "@/components/Home/Contact/ContactForm";
import ContactInfo from "@/components/Home/Contact/ContactInfo";
import HeroContact from "@/components/Home/Contact/HeroContact";
import React from "react";

const ContactUs = () => {
  return (
    <div className="pt-[12vh]">
      <HeroContact />
      <div className="flex  flex-col sm:flex-row justify-center my-5 mx-auto items-center">
        <div className="w-1/2">
          {" "}
          <ContactInfo />
        </div>
        <div className="w-1/2">
          {" "}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
