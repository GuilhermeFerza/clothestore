import { useEffect } from "react"; // 1. Importe o useEffect
import PlaceHolder from "../../assets/images/phroupa1.png";
import { X } from "lucide-react";

interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  // 2. Adicione este useEffect
  useEffect(() => {
    // Ao montar o componente (modal abrir), trava o scroll do body
    document.body.style.overflow = "hidden";

    // A função de retorno (cleanup) será executada ao desmontar o componente (modal fechar)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez (ao montar/desmontar)

  return (
    <>
      <div className="fixed z-[70] rounded-lg shadow-lg bg-white w-[95%] md:w-[600px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-h-[90vh] md:max-h-[70%] p-6 sm:p-8 overflow-auto">
        <div>
          <button
            className="absolute top-4 right-4 text-muted font-bold text-2xl transition delay-200 hover:text-black hover:rotate-90"
            onClick={onClose}
          >
            <X size={28} />
          </button>
          <h1 className="font-bold uppercase text-2xl sm:text-3xl">
            Your Products
          </h1>
          <h2 className="text-lg sm:text-xl text-muted">
            See your products below:
          </h2>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 w-full">
          <img
            src={PlaceHolder}
            alt="primeira compra"
            className="aspect-square rounded-3xl w-full max-w-[200px] sm:w-1/2 border-4"
          />
          <div className="flex flex-col w-full sm:w-1/2 text-lg sm:text-xl">
            <p className="mt-4 font-bold">First Product</p>
            <p>
              <span className="italic">Price:</span> R$ 99.00
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 w-full">
          <img
            src={PlaceHolder}
            alt="primeira compra"
            className="aspect-square rounded-3xl w-full max-w-[200px] sm:w-1/2 border-4"
          />
          <div className="flex flex-col w-full sm:w-1/2 text-lg sm:text-xl">
            <p className="mt-4 font-bold">First Product</p>
            <p>
              <span className="italic">Price:</span> R$ 99.00
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 w-full">
          <img
            src={PlaceHolder}
            alt="primeira compra"
            className="aspect-square rounded-3xl w-full max-w-[200px] sm:w-1/2 border-4"
          />
          <div className="flex flex-col w-full sm:w-1/2 text-lg sm:text-xl">
            <p className="mt-4 font-bold">First Product</p>
            <p>
              <span className="italic">Price:</span> R$ 99.00
            </p>
          </div>
        </div>
      </div>
      <div className="z-[60] fixed top-0 left-0 transition bg-black w-svw h-svh max-w-full opacity-40"></div>
    </>
  );
}
