import './App.css';
import './index.css';
import LandingPage from "./components/LandingPage.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import Keyboard3D from "./components/Keyboard3D.jsx";
import { Link, Routes, Route } from 'react-router-dom';
import PurchasePage from './components/PurchasePage.jsx';
import SoundPage from './components/SoundPage';

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
            <nav>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/purchase">Purchase</Link>
                </div>
                <Link to="/sound">Sound</Link>
            </nav>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/purchase" element={<PurchasePage/>} />
                <Route path="/sound" element={<SoundPage/>} />
            </Routes>
        </div>
    );
}

export default App;