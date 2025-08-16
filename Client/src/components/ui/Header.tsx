import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Cart from "../modals/Cart.tsx";
import { Link } from "react-router-dom";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
  const navItems = ["About", "Contact"];
  const [color, setColor] = useState("#F4F4F4");
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setColor("#f0fff0"); // Se a página foi rolada, define a cor para verde
    } else {
      setColor("#F4F4F4"); // Se a página estiver no topo, define a cor de volta para branco
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (itemName: string) => {
    onScrollTo(itemName.toLowerCase());
  };
  const [cart, setCart] = useState(false);

  const handleCartClick = () => {
    setCart((prev) => !prev);
  };

  return (
    <>
      <div
        className="sticky top-0 z-50 flex w-full items-center justify-evenly px-6 shadow-md transition-colors duration-4000"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center flex-1 max-w-[30%] basis-full">
          <ul className="flex justify-evenly w-full text-xl">
            <Link to="/new-arrivals">
              <li className="transition hover:scale-[105%]">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  New Arrivals
                </span>
              </li>
            </Link>
            <Link to="/men">
              <li className="transition hover:scale-[105%]">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  Men
                </span>
              </li>
            </Link>
            <Link to="/women">
              <li className="transition hover:scale-[105%]">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  Women
                </span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex justify-center flex-1 max-w-[30%] basis-full">
          <Link to="/">
            <img
              src={Logo}
              alt="Lumo"
              className="h-auto max-h-28 flex items-center justify-center w-auto"
            />
          </Link>
        </div>
        {/* Seção Direita: Ações e Busca */}
        <div className="flex justify-center flex-1 max-w-[30%] basis-full">
          <ul className="flex justify-evenly w-full text-xl">
            {/* 4. Mapeamos a lista para renderizar os `li`s dinamicamente. */}
            {navItems.map((item) => (
              <li
                key={item} // Chave única para cada item da lista (essencial no React)
                onClick={() => handleNavClick(item)}
                className="cursor-pointer transition hover:scale-[105%]"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  {item}
                </span>
              </li>
            ))}
            <li className="cursor-pointer transition hover:scale-[105%]">
              <button onClick={handleCartClick}>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  Cart
                </span>
              </button>
            </li>
          </ul>
          <input
            type="search"
            className="focus:outline-none rounded w-full border-[2px] px-2"
          />
        </div>
      </div>

      {cart && <Cart onClose={() => setCart(false)} />}
    </>
  );
};

export default Header;
