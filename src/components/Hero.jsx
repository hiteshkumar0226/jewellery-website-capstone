import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* OVERLAY CONTENT */}
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <p className="hero-eyebrow">Luxury Jewellery</p>

          <h1 className="hero-title">
            Crafted in <span>Gold</span>, <br />
            Worn with Pride
          </h1>

          <p className="hero-body">
            Discover timeless elegance with handcrafted jewellery
            designed for modern royalty.
          </p>

          <div className="hero-btns">
            <a href="#" className="btn-primary">Explore</a>
            <a href="#" className="btn-ghost">View Collection</a>
          </div>
        </div>
{/* rigth */}
<div className="hero-right">
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
              alt="Jewellery"
            />
          </div>
        </div>



        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-visual-wrap">
            <div className="hero-gem-center">
              <img height={300} width={490} src="https://www.nobbier.com/wp-content/uploads/2024/11/faceted-emerald-gemstone-close-up.jpg" alt="Emerald Gemstone" />
            </div>
          </div> 
          </div>

      </div>
    </section>
  );
}
