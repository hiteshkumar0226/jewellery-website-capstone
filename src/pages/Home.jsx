import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Collections from "../components/Collections.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <Contact />
      <Footer />
    </>
  );
}