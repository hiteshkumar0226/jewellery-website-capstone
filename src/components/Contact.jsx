import React from "react";
import "./Contact.css";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2 className="contact-title">
            Get in <span>Touch</span>
          </h2>

          <p className="contact-sub">
            Visit our store or connect with us for custom jewellery and
            exclusive designs crafted just for you.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <Mail size={20} />
              <span>support@ajewellers.com</span>
            </div>

            <div className="info-item">
              <Phone size={20} />
              <span>+91 98765 43210</span>
            </div>

            <div className="info-item">
              <MapPin size={20} />
              <span>Delhi, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form className="contact-form">

            <div className="input-group">
              <input type="text" required />
              <label>Name</label>
            </div>

            <div className="input-group">
              <input type="tel" required />
              <label>Phone</label>
            </div>

            <div className="input-group full">
              <textarea rows="4" required></textarea>
              <label>Message</label>
            </div>

            <button className="form-btn">
              Send Message →
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}