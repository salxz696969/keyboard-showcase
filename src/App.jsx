import "./App.css";
import "./index.css";
import LandingPage from "./components/LandingPage.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import Keyboard3D from "./components/Keyboard3D.jsx";
import { Link, Routes, Route } from "react-router-dom";
import PurchasePage from "./components/PurchasePage.jsx";
import SoundPage from "./components/SoundPage";

function App() {
  useEffect(() => {
    // AOS init
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Lenis init
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08, // smoothing factor
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
                position: "sticky",
                zIndex: 1000, // Ensure it stays on top of other elements
                display: "flex",
                width: "30vw",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                justifyContent: "space-between",
                padding: "10px",
                borderRadius: "10px",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", width: "40%", alignItems: "center" }}>
                <Link to="/">Home</Link>
                <Link to="/purchase">Purchase</Link>
            </div>
            <div style={{ backgroundColor: "#893331", padding: "5px", borderRadius: "5px", color: "white" }}>
                <Link to="/sound">Sound</Link>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/sound" element={<SoundPage />} />
        </Routes>
    </div>
);
}

export default App;
