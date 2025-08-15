import Header from "../components/ui/Header.tsx";
import Aside from "../components/ui/Aside.tsx";
import Footer from "../components/ui/Footer.tsx";
import { SocialIcon } from "react-social-icons";
import { useEffect, useState } from "react";

import Carrousel from "../assets/images/Carrosel.jpg";
import Carrousel1 from "../assets/images/Carrosel1.jpg";
import Carrousel2 from "../assets/images/Carrosel2.jpg";
import Carrousel3 from "../assets/images/Carrosel3.jpg";

export default function Home() {
  const carrouselImages = [Carrousel, Carrousel1, Carrousel2, Carrousel3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carrouselImages.length);
        setFade(true);
      }, 250);
    }, 10000);
    return () => clearInterval(interval);
  }, [carrouselImages.length]);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header onScrollTo={handleScrollToSection} />
      <div className="flex w-full">
        <Aside />
        <div className="relative w-full ml-[15%] flex flex-col">
          <main>
            <div className="w-full h-96 bg-black">
              <img
                src={carrouselImages[currentIndex]}
                alt="imagem banner"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <section className="p-6 flex flex-col gap-6 items-start">
              <h1 className="font-bold text-8xl">STAY URBAN. STAY BOLD.</h1>
              <h3 className="text-3xl">STREETWEAR</h3>
              <p className="text-lg">
                Born from{" "}
                <span className="text-green-500 font-bold italic">Brazil</span>
                's vibrant streets, we embody the true spirit of urban culture.
              </p>
              <button className="w-48 rounded font-semibold border-[2px] px-3 py-1 transition border-black hover:bg-black hover:text-white">
                SHOW NOW
              </button>
            </section>
            <section id="about" className="mt-20 p-6">
              <h1 className="font-bold uppercase text-xl">Welcome</h1>
              <p>
                to <span className="italic">NOIR</span>, your premier
                destination for authentic Brazilian streetwear. Born from the
                vibrant energy and diverse culture of Brazil, we're more than
                just a clothing brand – we're a movement. Our mission is to
                capture the essence of Brazilian street style and share it with
                the world, offering unique, high-quality pieces that blend urban
                aesthetics with our rich cultural heritage.
                <br />
                <br />
                At NOIR, we believe in self-expression and individuality. Our
                collections are meticulously designed, drawing inspiration from
                the dynamic art, music, and daily life found in Brazil's
                bustling cities and serene landscapes. We're committed to using
                premium materials and ethical production practices, ensuring
                that every garment you wear not only looks good but also feels
                good about its origins.
                <br />
                <br />
                We're proud to be 100% Brazilian-made, supporting local talent
                and contributing to our community. From graphic tees that pop
                with tropical colors to hoodies that embody urban cool, each
                item tells a story and carries the spirit of Brazil. Join our
                community and wear your story.
              </p>
            </section>
            <section id="contact" className="mt-20 p-6">
              <h1 className="font-bold uppercase text-xl">Contact</h1>
              <div className="flex flex-wrap justify-between gap-6">
                <h3 className="font-bold uppercase text-base max-w-xs">
                  Have a question or want to get in touch? Choose one of the
                  channels. We'll be happy to help!
                </h3>
                <ul className="text-sm">
                  <li className="text-base font-semibold">Customer Service:</li>
                  <li>Email: contact@noir.com.br </li>
                  <li>WhatsApp: +55 (71) 99999-9999 </li>
                  <li>
                    Service Hours: Monday to Friday, from 9 AM to 6 PM (BRT).
                  </li>
                </ul>
                <ul className="text-sm">
                  <li className="text-base font-semibold">Follow NOIR: </li>
                  <li className="mt-1">
                    <SocialIcon
                      url="https://www.instagram.com/Guilherme.Ferza"
                      style={{ height: 25, width: 25 }}
                    />
                    @noir_streetwear
                  </li>
                  <li className="mt-1">
                    <SocialIcon
                      url="https://www.tiktok.com"
                      style={{ height: 25, width: 25 }}
                    />
                    @noir.br
                  </li>
                </ul>
                <p className="max-w-xs">
                  For quick answers, check out our FAQ (Frequently Asked
                  Questions).
                </p>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
