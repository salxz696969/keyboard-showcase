import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import LandingPage from "./components/LandingPage.jsx";
import PurchasePage from "./components/PurchasePage.jsx";
import SoundPage from "./components/SoundPage";
import Keyboard3D from "./components/Keyboard3D.jsx";
import KeyboardViewPage from "./components/KeyboardViewPage.jsx";
import CartPage from './components/CartPage';

function App() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(()=>{
    const cart=localStorage.getItem("cart");
    if(!cart){
      localStorage.setItem("cart", JSON.stringify([]));
    }
  },[])

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // AOS init
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Lenis init
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div data-lenis>
      <nav
        style={{
          backgroundColor: "#D9D9D9",
          position: "fixed",
          zIndex: 1000,
          display: "flex",
          width: "30vw",
          top: isScrollingUp ? "10px" : "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          justifyContent: "space-between",
          padding: "10px",
          borderRadius: "10px",
          transition: "top 0.3s ease-in-out",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Link to="/">Home</Link>
          <Link to="/purchase">Purchase</Link>
        </div>
        <div
          style={{
            backgroundColor: "#893331",
            padding: "5px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <Link to="/sound" style={{ color: "white", textDecoration: "none" }}>
            Sound
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/sound" element={<SoundPage />} />
        <Route path="/keyboardView" element={<KeyboardViewPage/>}/>
        <Route path="/3D" element={<Keyboard3D/>}/>
        <Route path="/Cart" element={<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
