import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  const [isFirstListOpen, setIsFirstListOpen] = useState(false);
  const [isSecondListOpen, setIsSecondListOpen] = useState(false);

  // Refs to get the height of the content dynamically
  const firstListRef = useRef(null);
  const secondListRef = useRef(null);

  const toggleFirstList = () => {
    setIsFirstListOpen(!isFirstListOpen);
  };

  const toggleSecondList = () => {
    setIsSecondListOpen(!isSecondListOpen);
  };

  return (
    <aside className="z-20 flex flex-col min-w-52 w-[15%] bg-black text-white overflow-y-auto">
      <div className="flex flex-col">
        <button
          onClick={toggleFirstList}
          className="font-bold text-left pl-6 pr-2 py-4 border transition hover:bg-gray-950 cursor-pointer bg-black flex justify-between items-center"
        >
          Collections<span>{isFirstListOpen ? "▲" : "▼"}</span>
        </button>
        <div
          ref={firstListRef}
          className={`border-black overflow-hidden transition-all duration-300 ease-in-out ${
            isFirstListOpen
              ? "border-[1px] max-h-[500px]"
              : "border-[0px] max-h-0"
          }`}
        >
          <ul className="flex flex-col bg-gray-950">
            <li className="w-full h-full pl-3 py-2 transition border border-gray-800 hover:bg-gray-900 hover:cursor-pointer">
              <Link to="/" className="block h-full w-full">
                Urban Essential
              </Link>
            </li>
            <li className="w-full h-full pl-3 py-2 transition border border-gray-800 hover:bg-gray-900 hover:cursor-pointer ">
              <Link to="/" className="block h-full w-full">
                Oversized Fits
              </Link>
            </li>
            <li className="w-full h-full pl-3 py-2 transition border border-gray-800 hover:bg-gray-900 hover:cursor-pointer">
              <Link to="/" className="block h-full w-full">
                Limited Edition
              </Link>
            </li>
            <li className="w-full h-full pl-3 py-2 transition border border-gray-800 hover:bg-gray-900 hover:cursor-pointer">
              <Link to="/" className="block h-full w-full">
                Accessories
              </Link>
            </li>
            <li className="w-full h-full pl-3 py-2 transition border border-gray-800   hover:bg-gray-900 hover:cursor-pointer">
              <Link to="/" className="block h-full w-full">
                Sneakers
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col">
        <button
          onClick={toggleSecondList}
          className="font-bold text-left pl-6 pr-2 py-4 border transition hover:bg-gray-950 cursor-pointer bg-black flex justify-between items-center"
        >
          Categories<span>{isSecondListOpen ? "▲" : "▼"}</span>
        </button>
        <div
          ref={secondListRef}
          className={`border-black overflow-hidden transition-all duration-300 ease-in-out ${
            isSecondListOpen
              ? "border-[1px] max-h-[500px]"
              : "border-[0px] max-h-0"
          }`}
        >
          <ul className="flex flex-col bg-gray-950">
            <li className="w-full h-full pl-3 py-2 transition border border-gray-800 hover:bg-gray-900 hover:cursor-pointer">
              <Link to="/new-arrivals" className="block h-full w-full">
                New Arrivals
              </Link>
            </li>
            <li className="w-full h-full pl-3 py-2 transition border border-gray-800 hover:bg-gray-900 hover:cursor-pointer ">
              <Link to="/men" className="block h-full w-full">
                Men's Collection
              </Link>
            </li>
            <li className="w-full h-full pl-3 py-2 transition border border-gray-800 hover:bg-gray-900 hover:cursor-pointer">
              <Link to="/women" className="block h-full w-full">
                Women's Collection
              </Link>
            </li>
            <li className="w-full h-full pl-3 py-2 transition border border-gray-800 hover:bg-gray-900 hover:cursor-pointer">
              <Link to="/" className="block h-full w-full">
                Accessories
              </Link>
            </li>
            <li className="w-full h-full pl-3 py-2 transition border border-gray-800 hover:bg-gray-900 hover:cursor-pointer">
              <Link to="/" className="block h-full w-full">
                Sneakers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
