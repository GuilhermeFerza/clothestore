import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Cart from "../modals/cart.tsx";
import Button from "./Button.tsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onScrollTo,
  onToggleMenu,
  isMenuOpen,
}) => {
  const navItems = ["About", "Contact"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [cart, setCart] = useState(false);
  const navigate = useNavigate();
  const navLinkClasses =
    "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (itemName: string) => {
    onScrollTo(itemName.toLowerCase());
  };

  const handleCartClick = () => {
    setCart((prev) => !prev);
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const isFirstPage = location.pathname === "/";

  return (
    <>
      <header
        className={`sticky top-0 z-30 flex w-full items-center justify-between px-4 sm:px-6 py-2 shadow-md transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm" : "bg-[#F4F4F4]"
        }`}
      >
        {!isFirstPage && (
          <div className="lg:hidden">
            <button onClick={onToggleMenu} className="p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        )}

        {!isFirstPage && (
          <nav
            className={`hidden lg:flex flex-1 justify-start ${
              isFirstPage ? "hidden" : ""
            }`}
          >
            <ul className="flex items-center gap-6 text-base font-medium">
              <li>
                <Link to="/new-arrivals" className={navLinkClasses}>
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/men" className={navLinkClasses}>
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className={navLinkClasses}>
                  Women
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <div className="flex justify-center lg:flex-1">
          <Link to="/">
            <img
              src={Logo}
              alt="NOIR Logo"
              className="h-12 lg:h-20 w-auto hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>
        {!isFirstPage && (
          <div className="flex flex-1 justify-end items-center gap-4">
            <nav className="hidden lg:flex">
              <ul className="flex items-center gap-6 text-base font-medium">
                {isHomePage &&
                  navItems.map((item) => (
                    <li
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className="cursor-pointer"
                    >
                      <span className={navLinkClasses}>{item}</span>
                    </li>
                  ))}
              </ul>
            </nav>

            <div className="hidden lg:block w-32">
              <input
                type="search"
                placeholder="Search..."
                className="w-full border-b-2 bg-transparent focus:outline-none focus:border-black transition-all px-1 py-0.5 text-sm"
              />
            </div>

            <button onClick={handleCartClick} className="p-2 relative">
              <ShoppingCart size={26} />
            </button>
          </div>
        )}
        {isFirstPage && (
          <ul className="flex items-center gap-4">
            <li>
              <Button
                variant="outline"
                size="sm"
                className="hover:scale-105"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </li>
            <li>
              <Button
                variant="primary"
                size="sm"
                className="hover:scale-105"
                onClick={() => navigate("/register")}
              >
                Signup
              </Button>
            </li>
          </ul>
        )}
      </header>
      {cart && <Cart onClose={() => setCart(false)} />}
    </>
  );
};

export default Header;
