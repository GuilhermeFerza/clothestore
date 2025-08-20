import Header from "../components/ui/Header.tsx";
import Aside from "../components/ui/Aside.tsx";
import Footer from "../components/ui/Footer.tsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import roupa1 from "../assets/images/phroupa1.png";
import roupa2 from "../assets/images/phroupa2.png";
import roupa3 from "../assets/images/phroupa3.png";
import banner from "../assets/images/Carrosel3.jpg";
import Contact from "../components/ui/Contact.tsx";

export default function Men() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Aside onClose={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}
      <Header
        onScrollTo={handleScrollToSection}
        onToggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />

      <div className="flex flex-col min-h-screen">
        <div className="relative w-full h-80 lg:h-96 bg-[#0F0F0F]">
          <img
            src={banner}
            alt="imagem banner homens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 text-white bg-[#0F0F0F] bg-opacity-40">
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-8xl drop-shadow-lg select-none">
              MEN
            </h1>
            <h3 className="text-xl lg:text-3xl mt-4 italic select-none">
              URBAN LEGACY
            </h3>
            <p className="text-lg mt-4 max-w-2xl px-4">
              Discover our premium collection designed for the modern man
            </p>
          </div>
        </div>

        <div className="flex flex-1">
          <div className="hidden lg:block lg:w-[15%] lg:min-w-52">
            <Aside onClose={() => {}} />
          </div>
          <main className="w-full flex flex-col">
            {/* Featured Men's Collection */}
            <section className="px-6 py-12 lg:py-16">
              <h2 className="font-bold uppercase text-3xl lg:text-5xl text-center lg:text-left">
                Men's Collection
              </h2>
              <p className="text-lg mt-6 text-gray-800 leading-relaxed text-center lg:text-left">
                Embrace your authentic style with our{" "}
                <span className="text-blue-400 font-bold italic">
                  Brazilian streetwear
                </span>{" "}
                men's fashion line
              </p>
            </section>

            {/* Products Grid */}
            <section className="px-6 py-12 lg:py-16 bg-gray-50">
              <h2 className="font-bold text-3xl lg:text-4xl text-center mb-12">
                Featured Styles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Product 1 */}
                <div className="group">
                  <div className="relative w-full aspect-square rounded-lg shadow-md bg-[#0F0F0F] overflow-hidden">
                    <img
                      src={roupa1}
                      alt="Men's Fashion Item 1"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-blue-200 text-[#0F0F0F] px-3 py-1 rounded-full text-sm font-bold">
                      HOT
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-lg">
                      Urban Street Hoodie
                    </h3>
                    <p className="text-gray-600 mt-1">Comfortable & Stylish</p>
                    <p className="font-bold text-xl mt-2 text-green-600">
                      R$ 189,90
                    </p>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="group">
                  <div className="relative w-full aspect-square rounded-lg shadow-md bg-[#0F0F0F] overflow-hidden">
                    <img
                      src={roupa2}
                      alt="Men's Fashion Item 2"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-blue-200 text-[#0F0F0F] px-3 py-1 rounded-full text-sm font-bold">
                      NEW
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-lg">
                      Street Style T-Shirt
                    </h3>
                    <p className="text-gray-600 mt-1">Trendy & Versatile</p>
                    <p className="font-bold text-xl mt-2 text-green-600">
                      R$ 99,90
                    </p>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="group">
                  <div className="relative w-full aspect-square rounded-lg shadow-md bg-[#0F0F0F] overflow-hidden">
                    <img
                      src={roupa3}
                      alt="Men's Fashion Item 3"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-blue-200 text-[#0F0F0F] px-3 py-1 rounded-full text-sm font-bold">
                      SALE
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-lg">Urban Pants</h3>
                    <p className="text-gray-600 mt-1">Premium Quality</p>
                    <p className="font-bold text-xl mt-2 text-green-600">
                      R$ 229,90
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Men's Style Guide */}
            <section className="px-6 py-12 lg:py-16">
              <h2 className="font-bold text-3xl lg:text-4xl text-center mb-8">
                Style Guide
              </h2>
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="font-bold text-2xl mb-4 text-blue-800">
                  Define Your Urban Identity
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  From casual streetwear to sophisticated urban looks, our men's
                  collection offers versatile pieces that reflect your unique
                  personality and lifestyle.
                </p>
                <button className="bg-blue-200 text-[#0F0F0F] px-8 py-3 rounded font-semibold hover:bg-blue-700 hover:text-white transition-colors">
                  Explore Styles
                </button>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-6 py-12 lg:py-20">
              <Contact />
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
