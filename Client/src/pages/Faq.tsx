import Header from "../components/ui/Header.tsx";
import Aside from "../components/ui/Aside.tsx";
import Footer from "../components/ui/Footer.tsx";
import { useEffect, useState } from "react";
import Contact from "../components/ui/Contact.tsx";

export default function Faq() {
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

  const faqData = [
    {
      question: "What is NOIR?",
      answer:
        "NOIR is a premium Brazilian streetwear brand that embodies the true spirit of urban culture. We're more than just a clothing brand – we're a movement dedicated to capturing the essence of Brazilian street style and sharing it with the world.",
    },
    {
      question: "Where are your products made?",
      answer:
        "Our products are proudly made in Brazil, using high-quality materials and sustainable practices. We work with local artisans and manufacturers to ensure the highest standards of quality and authenticity.",
    },
    {
      question: "What sizes do you offer?",
      answer:
        "We offer a comprehensive range of sizes from XS to XXL for both men and women. Our sizing is designed to be inclusive and comfortable, following Brazilian sizing standards. Check our size guide for detailed measurements.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or through the shipping carrier's website. We'll also send you updates on your order status.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging. Returns are free for customers in Brazil. For international orders, return shipping costs are the responsibility of the customer. Contact our customer service for return authorization.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by location. International orders typically take 7-14 business days to arrive. We handle all customs documentation for a smooth delivery experience.",
    },
    {
      question: "How can I contact customer service?",
      answer:
        "Our customer service team is available Monday through Friday, 9 AM to 6 PM (Brazil time). You can reach us via email at support@noir.com, through our contact form, or by phone at +55 11 99999-9999. We typically respond within 24 hours.",
    },
    {
      question: "Are your products sustainable?",
      answer:
        "We're committed to sustainability and ethical practices. We use eco-friendly materials when possible, work with suppliers who share our values, and continuously work to reduce our environmental impact. Look for our 'Sustainable' badge on qualifying products.",
    },
    {
      question: "Do you offer student discounts?",
      answer:
        "Yes! Students with valid student IDs can receive a 15% discount on their orders. Simply email us your student ID before placing your order, and we'll provide you with a discount code. This discount applies to full-price items only.",
    },
    {
      question: "Can I customize my order?",
      answer:
        "Currently, we offer limited customization options on select products. This includes embroidery and some color variations. Custom orders may take longer to process and may have additional costs. Contact us for specific customization inquiries.",
    },
  ];

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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 text-white">
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-8xl drop-shadow-lg select-none">
              FAQ
            </h1>
            <h3 className="text-xl lg:text-3xl mt-4 italic select-none">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <p className="text-lg mt-4 max-w-2xl px-4">
              Find answers to common questions about NOIR and our products
            </p>
          </div>
        </div>

        <div className="flex flex-1">
          <div className="hidden lg:block lg:w-[15%] lg:min-w-52">
            <Aside onClose={() => {}} />
          </div>
          <main className="w-full flex flex-col">
            {/* FAQ Introduction */}
            <section className="px-6 py-12 lg:py-16">
              <h2 className="font-bold uppercase text-3xl lg:text-5xl text-center lg:text-left">
                Need Help?
              </h2>
              <p className="text-lg mt-6 text-gray-800 leading-relaxed text-center lg:text-left">
                Can't find what you're looking for?{" "}
                <span className="text-green-500 font-bold italic">
                  Contact our team
                </span>{" "}
                for personalized assistance
              </p>
            </section>

            {/* FAQ Section */}
            <section className="px-6 py-12 lg:py-16 bg-gray-50">
              <h2 className="font-bold text-3xl lg:text-4xl text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="font-bold text-xl text-[#0F0F0F] mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Help Section */}
            <section className="px-6 py-12 lg:py-16">
              <h2 className="font-bold text-3xl lg:text-4xl text-center mb-8">
                Still Need Help?
              </h2>
              <div className="bg-[#0F0F0F] rounded-lg p-8 text-center text-white">
                <h3 className="font-bold text-2xl mb-4">
                  Our Team is Here for You
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our customer service
                  team is ready to help with any questions or concerns you may
                  have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#0F0F0F] px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors">
                    Contact Support
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-[#0F0F0F] transition-colors">
                    Live Chat
                  </button>
                </div>
              </div>
            </section>
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
