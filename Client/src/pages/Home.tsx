import Header from "../components/ui/Header.tsx";
import Aside from "../components/ui/Aside.tsx";
import Footer from "../components/ui/Footer.tsx";
import { SocialIcon } from "react-social-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Seus imports de imagens
import Carrousel from "../assets/images/Carrosel.jpg";
import Carrousel1 from "../assets/images/Carrosel1.jpg";
import Carrousel2 from "../assets/images/Carrosel2.jpg";
import Carrousel3 from "../assets/images/Carrosel3.jpg";
import roupa1 from "../assets/images/phroupa1.png";
import roupa2 from "../assets/images/phroupa2.png";
import roupa3 from "../assets/images/phroupa3.png";

export default function Home() {
  const carrouselImages = [Carrousel, Carrousel1, Carrousel2, Carrousel3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // --- LÓGICA DO MENU MOBILE ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Efeito para travar o scroll do corpo quando o menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Seu useEffect do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carrouselImages.length);
        setFade(true);
      }, 500);
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
      <div className={`fixed inset-y-0 left-0 z-50 w-72 lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Aside onClose={toggleMenu} />
      </div>
      {isMenuOpen && <div onClick={toggleMenu} className="fixed inset-0 bg-black/60 z-40 lg:hidden" />}
      <Header onScrollTo={handleScrollToSection} onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <div className="flex flex-col min-h-screen">
        <div className="relative w-full h-80 lg:h-96 bg-black">
          <img
            src={carrouselImages[currentIndex]}
            alt="imagem banner"
            className={`w-full h-full object-cover transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 text-white bg-black bg-opacity-40">
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-8xl drop-shadow-lg select-none">STAY URBAN.</h1>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-8xl drop-shadow-lg select-none">STAY BOLD.</h1>
            <h3 className="text-xl lg:text-3xl mt-4 italic select-none">STREETWEAR</h3>
            <button className="w-48 rounded font-semibold border-2 px-4 py-2 transition border-white mt-6 hover:bg-white hover:text-black">
              SHOW NOW
            </button>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="hidden lg:block lg:w-[15%] lg:min-w-52">
            <Aside onClose={() => {}} />
          </div>
          <main className="w-full flex flex-col">
            <section id="about" className="px-6 py-12 lg:py-16">
              <h2 className="font-bold uppercase text-3xl lg:text-5xl text-center lg:text-left">Welcome</h2>
              <p className="text-lg mt-6 text-gray-800 leading-relaxed">
                Born from{" "}
                <span className="text-green-500 font-bold italic">Brazil</span>'s vibrant streets, we embody the true spirit of urban culture.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed">
                <span className="italic font-semibold text-black">NOIR</span>, your premier destination for authentic Brazilian streetwear. Born from the vibrant energy and diverse culture of Brazil, we're more than just a clothing brand – we're a movement. Our mission is to capture the essence of Brazilian street style and share it with the world.
              </p>
            </section>
            <section id="best-sellers" className="px-6 py-12 lg:py-16 bg-gray-50">
              <h2 className="font-bold text-3xl lg:text-4xl text-center">Best-Sellers</h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative w-full aspect-square rounded-lg shadow-md bg-black overflow-hidden group">
                  <img src={roupa1} alt="Primeira roupa" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="relative w-full aspect-square rounded-lg shadow-md bg-black overflow-hidden group">
                  <img src={roupa2} alt="Segunda roupa" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="relative w-full aspect-square rounded-lg shadow-md bg-black overflow-hidden group">
                  <img src={roupa3} alt="Terceira roupa" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
              </div>
            </section>
            <section id="contact" className="px-6 py-12 lg:py-20">
              <h2 className="font-bold uppercase text-2xl lg:text-3xl text-center">Contact</h2>
              <div className="mt-8 flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-10">
                <div className="text-center lg:text-left lg:max-w-xs">
                  <h3 className="font-bold uppercase text-base">Have a question or want to get in touch?</h3>
                  <p className="text-sm text-gray-600 mt-2">Choose one of the channels. We'll be happy to help!</p>
                </div>
                <ul className="text-sm text-center lg:text-left space-y-1">
                  <li className="text-base font-semibold">Customer Service:</li>
                  <li>Email: contact@noir.com.br </li>
                  <li>WhatsApp: +55 (71) 99999-9999 </li>
                  <li>Service Hours: Mon - Fri, 9 AM to 6 PM (BRT).</li>
                </ul>
                <ul className="text-sm space-y-2">
                  <li className="text-base font-semibold">Follow NOIR:</li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start"><SocialIcon url="https://www.instagram.com/Guilherme.Ferza" style={{ height: 25, width: 25 }} />@noir_streetwear</li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start"><SocialIcon url="https://www.tiktok.com" style={{ height: 25, width: 25 }} />@noir.br</li>
                </ul>
                <p className="max-w-xs text-center lg:text-left">
                  For quick answers, check out our FAQ (<Link to="/faq"><span className="text-blue-500 hover:underline">Frequently Asked Questions</span></Link>).
                </p>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}