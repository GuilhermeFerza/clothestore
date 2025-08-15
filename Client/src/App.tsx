import react from "react";
import Home from "./pages/Home.tsx";
import Men from "./pages/Men.tsx";
import Women from "./pages/Women.tsx";
import NewArrivals from "./pages/NewArrivals.tsx";
import "./index.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
