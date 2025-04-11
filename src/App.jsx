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
import image1 from './assets/footer/image1.png'
import image2 from './assets/footer/image2.png'
import image3 from './assets/footer/image3.png'
import image4 from './assets/footer/image4.png'
import image5 from './assets/footer/image5.png'

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
      lerp: 0.05,
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
      
      {/* ------ Footer ------ */}
      <div style={{ backgroundColor: "black", padding: "0 20px" , marginTop: "100px"}}>
        <hr style={{ 
          borderTop: "1px solid white", 
          borderBottom: "none",
          opacity: 0.7
        }}/>
      </div>

      <div
        style={{
          fontFamily: "Exo 2, sans-serif",
          display: "grid",
          gridTemplateColumns: "50% repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem", 
          color: "white",
          backgroundColor: "black",
          padding: "1rem",
          "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr",
            textAlign: "center"
          }
        }}
      >
        <div
          style={{
            marginLeft: "5vw",
            fontSize: "1.7rem",
            fontWeight: "bold"
          }}
        >
          <h1>Get updates on your  <br/>favourite keyboard</h1>
          <p 
            style={{ margin: "45px 0 0", fontSize: "1rem", fontWeight: "400"}}>We accept:
            <div
              style={{ display: "flex", gap: "5px", width: "50px", marginTop: "10px"}}
            >
              <img src={image1} alt="apple pay" />
              <img src={image2} alt="google pay" />
              <img src={image3} alt="apple pay" />
              <img src={image4} alt="paypal pay" />
              <img src={image5} alt="visa pay" />
            </div>
          </p>
        </div>

        <div
          style={{
            marginTop: "20px"
          }}
        >
          <h1 style={{ color: "rgb(137, 51, 49)", marginBottom: "10px" }}>SERVICES</h1>
          <p>Our Stores</p>
          <p>Campaigns</p>
          <p>Tournaments</p>
          <p>Offline</p>
        </div>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <h1 style={{ color: "rgb(137, 51, 49)", marginBottom: "10px" }}>ABOUT</h1>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Teams</p>
          <p>Careers</p>
        </div>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <h1 style={{ color: "rgb(137, 51, 49)", marginBottom: "10px" }}>HELP</h1>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div 
        style={{ 
          fontFamily: "Exo 2, sans-serif", 
          backgroundColor: "black", 
          color: "white",
          display: "flex", 
          justifyContent: "center",
          gap: "100px",
          padding: "50px 0 50px"
        }}>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>

    </div>
  );
}

export default App;
