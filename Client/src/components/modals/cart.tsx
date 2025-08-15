interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  return (
    <>
      <div className="fixed z-[70] rounded shadow bg-white w-[600px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-full max-h-[70svh] p-16">
        <div>
          <button
            className="absolute top-4 right-6 text-muted font-bold text-2xl transition delay-200 hover:text-black hover:rotate-90"
            onClick={onClose}
          >
            ✕
          </button>
          <h1 className="font-bold uppercase text-3xl">Your Products</h1>
          <h2 className="text-xl text-muted">See your products below: </h2>
        </div>
      </div>
      <div className="z-[60] fixed top-0 left-0 transition bg-black w-svw h-svh max-w-full opacity-40"></div>
    </>
  );
}
