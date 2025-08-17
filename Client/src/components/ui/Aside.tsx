import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from 'lucide-react';

interface AsideProps {
  onClose: () => void;
}

export default function Aside({ onClose }: AsideProps) {
  const [isFirstListOpen, setIsFirstListOpen] = useState(false);
  const [isSecondListOpen, setIsSecondListOpen] = useState(false);

  const toggleFirstList = () => setIsFirstListOpen(!isFirstListOpen);
  const toggleSecondList = () => setIsSecondListOpen(!isSecondListOpen);

  return (
    // O componente agora só se preocupa com seu conteúdo interno e aparência.
    // O posicionamento e animação são controlados pelo componente pai (Home.tsx).
    <aside className="h-full w-full bg-black text-white lg:relative">
      {/* Botão de Fechar (Apenas Mobile) */}
      <div className="flex justify-end p-2 lg:hidden">
        <button onClick={onClose}>
          <X size={28} className="text-white" />
        </button>
      </div>

      <div className="p-4 lg:p-0">
        <div className="flex flex-col">
          <button onClick={toggleFirstList} className="font-bold text-left px-4 lg:pl-6 pr-2 py-4 border-b border-gray-800 transition hover:bg-gray-900 flex justify-between items-center">
            Collections<span>{isFirstListOpen ? "▲" : "▼"}</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isFirstListOpen ? "max-h-[500px]" : "max-h-0"}`}>
            <ul className="flex flex-col bg-gray-950">
              <li className="w-full pl-6 py-3 border-b border-gray-800 hover:bg-gray-800"><Link to="/" className="block">Urban Essential</Link></li>
              <li className="w-full pl-6 py-3 border-b border-gray-800 hover:bg-gray-800"><Link to="/" className="block">Oversized Fits</Link></li>
              <li className="w-full pl-6 py-3 border-b border-gray-800 hover:bg-gray-800"><Link to="/" className="block">Limited Edition</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <button onClick={toggleSecondList} className="font-bold text-left px-4 lg:pl-6 pr-2 py-4 border-b border-gray-800 transition hover:bg-gray-900 flex justify-between items-center">
            Categories<span>{isSecondListOpen ? "▲" : "▼"}</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSecondListOpen ? "max-h-[500px]" : "max-h-0"}`}>
            <ul className="flex flex-col bg-gray-950">
              <li className="w-full pl-6 py-3 border-b border-gray-800 hover:bg-gray-800"><Link to="/new-arrivals" className="block">New Arrivals</Link></li>
              <li className="w-full pl-6 py-3 border-b border-gray-800 hover:bg-gray-800"><Link to="/men" className="block">Men's Collection</Link></li>
              <li className="w-full pl-6 py-3 border-b border-gray-800 hover:bg-gray-800"><Link to="/women" className="block">Women's Collection</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}