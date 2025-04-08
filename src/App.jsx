import './App.css'
import './index.css'
import KeyboardCarousel from "./components/small_components/KeyboardCarousel.jsx";
import LandingPage from "./components/LandingPage.jsx";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Keyboard3D from "./components/Keyboard3D.jsx";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 800, // animation duration (ms)
            once: true,    // only animate once
        });
    }, []);
    return (
        <>
            {/*<LandingPage></LandingPage>*/}
            <Keyboard3D></Keyboard3D>
        </>
    )
}

export default App