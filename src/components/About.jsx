import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* LEFT SIDE */}
        <div className="about-left">
          <h2 className="about-title">
            Legacy of <span>Trust</span> & Craftsmanship
          </h2>

          <p className="about-text">
            Since 1985, <strong>A Jewellers</strong> has been a symbol of
            elegance, purity, and timeless luxury. We blend tradition with
            modern artistry to create pieces that last generations.
          </p>

          <button className="about-btn">Explore Collection</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <div className="card">
            <div className="value-item">
              <span className="value-num">01</span>
              <div>
                <h4>Authenticity</h4>
                <p>100% certified gold purity</p>
              </div>
            </div>

            <div className="value-item">
              <span className="value-num">02</span>
              <div>
                <h4>Craftsmanship</h4>
                <p>Handcrafted premium designs</p>
              </div>
            </div>

            <div className="value-item">
              <span className="value-num">03</span>
              <div>
                <h4>Heritage</h4>
                <p>40+ years of excellence</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}