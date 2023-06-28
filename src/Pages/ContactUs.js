import React from "react";
import StaticHeader from "../Components/StaticHeader";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <div>
      <StaticHeader />
      <div id="contact-us-section">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
