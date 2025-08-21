import Header from "../components/ui/Header.tsx";
import Footer from "../components/ui/Footer.tsx";
import Contact from "../components/ui/Contact.tsx";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

// Imagens para o carrossel e produtos
import Carrousel from "../assets/images/Carrosel.jpg";
import Carrousel1 from "../assets/images/Carrosel1.jpg";
import Carrousel2 from "../assets/images/Carrosel2.jpg";
import Carrousel3 from "../assets/images/Carrosel3.jpg";
import roupa1 from "../assets/images/phroupa1.png";
import roupa2 from "../assets/images/phroupa2.png";
import roupa3 from "../assets/images/phroupa3.png";

export default function FirstPage() {
  const carrouselImages = [Carrousel, Carrousel1, Carrousel2, Carrousel3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();
  // Lógica do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Efeito para travar o scroll do corpo quando o menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carrouselImages.length);
        setFade(true);
      }, 500);
    }, 8000);
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
      <Header
        onScrollTo={handleScrollToSection}
        onToggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section com Carrossel */}
        <div className="relative w-full h-screen bg-[#0F0F0F]">
          <img
            src={carrouselImages[currentIndex]}
            alt="imagem banner"
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 text-white bg-[#0F0F0F] bg-opacity-50">
            <h1 className="font-bold text-6xl sm:text-7xl lg:text-9xl drop-shadow-lg select-none">
              NOIR
            </h1>
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-7xl drop-shadow-lg select-none mt-4">
              STREETWEAR
            </h2>
            <h3 className="text-2xl lg:text-4xl mt-6 italic select-none">
              Brazilian Urban Culture
            </h3>
            <p className="text-xl mt-6 max-w-3xl px-4 leading-relaxed">
              Born from Brazil's vibrant streets, we embody the true spirit of
              urban culture. Discover authentic streetwear that tells your
              story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/home">
                <button className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  EXPLORE COLLECTION
                </button>
              </Link>
              <Link to="/new-arrivals">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                  NEW ARRIVALS
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="px-6 py-20 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-bold uppercase text-4xl lg:text-6xl mb-8">
              Welcome to NOIR
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-xl text-gray-800 leading-relaxed mb-6">
                  <span className="text-green-500 font-bold italic">NOIR</span>{" "}
                  is your premier destination for authentic Brazilian
                  streetwear. Born from the vibrant energy and diverse culture
                  of Brazil, we're more than just a clothing brand – we're a
                  movement.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to capture the essence of Brazilian street
                  style and share it with the world. Every piece tells a story
                  of creativity, passion, and urban authenticity.
                </p>
              </div>
              <div className="relative">
                <img
                  src={roupa1}
                  alt="NOIR Streetwear"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#0F0F0F] text-white px-6 py-3 rounded-lg">
                  <span className="font-bold text-lg">100% Brazilian</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="px-6 py-20 lg:py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-4xl lg:text-6xl text-center mb-16">
              Discover Your Style
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Women's Category */}
              <Link to="/women" className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-pink-100 to-pink-200">
                  <img
                    src={roupa2}
                    alt="Women's Collection"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Women</h3>
                    <p className="text-lg mb-4">
                      Empowered styles that celebrate your unique spirit
                    </p>
                    <span className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-semibold group-hover:bg-pink-600 transition-colors">
                      Shop Now →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Men's Category */}
              <Link to="/men" className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-100 to-blue-200">
                  <img
                    src={roupa3}
                    alt="Men's Collection"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Men</h3>
                    <p className="text-lg mb-4">
                      Urban legacy that defines your authentic identity
                    </p>
                    <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold group-hover:bg-blue-600 transition-colors">
                      Shop Now →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Best Sellers Preview */}
        <section className="px-6 py-20 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-4xl lg:text-6xl text-center mb-16">
              Best Sellers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group">
                <div className="relative w-full aspect-square rounded-lg shadow-lg bg-[#0F0F0F] overflow-hidden">
                  <img
                    src={roupa1}
                    alt="Best Seller 1"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    HOT
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-xl">Urban Street Hoodie</h3>
                  <p className="text-gray-600 mt-1">Limited Edition</p>
                  <p className="font-bold text-2xl mt-2 text-green-600">
                    R$ 199,90
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="relative w-full aspect-square rounded-lg shadow-lg bg-[#0F0F0F] overflow-hidden">
                  <img
                    src={roupa2}
                    alt="Best Seller 2"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NEW
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-xl">
                    Brazilian Street Tee
                  </h3>
                  <p className="text-gray-600 mt-1">Exclusive Design</p>
                  <p className="font-bold text-2xl mt-2 text-green-600">
                    R$ 89,90
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="relative w-full aspect-square rounded-lg shadow-lg bg-[#0F0F0F] overflow-hidden">
                  <img
                    src={roupa3}
                    alt="Best Seller 3"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-xl">
                    Street Culture Pants
                  </h3>
                  <p className="text-gray-600 mt-1">Premium Quality</p>
                  <p className="font-bold text-2xl mt-2 text-green-600">
                    R$ 249,90
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/home">
                <button className="bg-[#0F0F0F] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  View All Products
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="px-6 py-20 lg:py-32 bg-[#0F0F0F] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-4xl lg:text-6xl mb-8">
              Follow Our Journey
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Stay connected with NOIR and discover the latest trends,
              behind-the-scenes content, and exclusive drops from the heart of
              Brazilian street culture.
            </p>
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <SocialIcon
                  url="https://www.instagram.com"
                  style={{ height: 60, width: 60 }}
                  className="hover:scale-110 transition-transform duration-300"
                />
                <p className="mt-4 text-lg font-semibold">@noir_streetwear</p>
              </div>
              <div className="text-center">
                <SocialIcon
                  url="https://www.tiktok.com"
                  style={{ height: 60, width: 60 }}
                  className="hover:scale-110 transition-transform duration-300"
                />
                <p className="mt-4 text-lg font-semibold">@noir.br</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Join the NOIR Community
              </h3>
              <p className="text-gray-300 mb-6">
                Be the first to know about new releases, exclusive offers, and
                street culture events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-lg text-black flex-1 max-w-md"
                />
                <button className="bg-white text-[#0F0F0F] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-20 lg:py-32 bg-white">
          <Contact />
        </section>
      </div>

      <Footer />
    </>
  );
}
