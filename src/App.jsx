import './App.css';
import './index.css';
import KeyboardCarousel from "./components/small_components/KeyboardCarousel.jsx";
import LandingPage from "./components/LandingPage.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import Keyboard3D from "./components/Keyboard3D.jsx";

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
            <LandingPage />
            <Keyboard3D />
        </div>
    );
}

export default App;
