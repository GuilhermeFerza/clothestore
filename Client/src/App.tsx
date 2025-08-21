import FirstPage from "./pages/FirstPage.tsx";
import Men from "./pages/Men.tsx";
import Women from "./pages/Women.tsx";
import NewArrivals from "./pages/NewArrivals.tsx";
import Faq from "./pages/Faq.tsx";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<FirstPage />} />
    </Routes>
  );
}
