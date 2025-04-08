import "../index.css"
import KeyboardCarousel from "./small_components/KeyboardCarousel.jsx";
import Featured from "./Featured.jsx";
import Trending from "./Trending.jsx";
import { Link } from 'react-router-dom';

export default function LandingPage() {

    const heroImages = ["/images/key1.png", "/images/key2.png", "/images/key3.png"];
    const featured = [
        {
            name: "Keyboard 1",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "/images/key1.png",
            specs: [
                {image: "/images/spec.svg", name: "Key 1"},
                {image: "/images/spec.svg", name: "Key 2"},
                {image: "/images/spec.svg", name: "Key 3"},
                {image: "/images/spec.svg", name: "Key 4"},
                {image: "/images/spec.svg", name: "Key 5"},
            ]
        },
        {
            name: "Keyboard 1",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "/images/key1.png",
            specs: [
                {image: "/images/spec.svg", name: "Key 1"},
                {image: "/images/spec.svg", name: "Key 2"},
                {image: "/images/spec.svg", name: "Key 3"},
                {image: "/images/spec.svg", name: "Key 4"},
                {image: "/images/spec.svg", name: "Key 5"},
            ]
        },
        {
            name: "Keyboard 1",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "/images/key1.png",
            specs: [
                {image: "/images/spec.svg", name: "Key 1"},
                {image: "/images/spec.svg", name: "Key 2"},
                {image: "/images/spec.svg", name: "Key 3"},
                {image: "/images/spec.svg", name: "Key 4"},
                {image: "/images/spec.svg", name: "Key 5"},
            ]
        }
    ]
    return (
        <>
            <div className="hero w-dvw h-[100vh] bg-[#0e0e0e] flex justify-center md:justify-between items-center">
                <KeyboardCarousel isAtRight={false} images={heroImages}></KeyboardCarousel>
                <div className="hero-text w-full md:w-1/2 flex flex-col gap-4 justify-center items-center" data-aos="fade-up">
                    <p className="text-[#893331] text-4xl">KeebsForKeebs</p>
                    <p className="text-white text-xl text-center">"Explore Keyboards. Feel the Click. Hear the Sound."</p>
                    <div className="hero-buttons flex gap-2 mt-8">
                        <Link to="/purchase" className="py-2 px-3.5  bg-white text-black">Purchase</Link>
                        <a href="" className="py-2 px-3.5  bg-white text-black">Sound Test</a>
                    </div>
                </div>
                <KeyboardCarousel isAtRight={true} images={heroImages}></KeyboardCarousel>
            </div>
            {
                featured.map((item, index) => (
                    <Featured
                        key={index}
                        isPicOnLeft={index % 2 === 0}
                        backgroundColor={index % 2 === 0 ? "#893331" : "#0E0E0E"}
                        imagePath={item.image}
                        name={item.name}
                        description={item.desc}
                        specs={item.specs}
                    />
                ))
            }
            <div className="more-section bg-[#0e0e0e] flex flex-col justify-center items-center md:h-[60vh]">
                <div className="more-section-wrapper w-full lg:w-[1024px]">
                    <Trending></Trending>
                </div>
                <a className="explore-more-btn bg-white p-2.5 flex text-black cursor-pointer gap-2.5 items-center mt-[100px]">
                    <p>Explore More</p>
                    <img src="/images/arrow.png" alt="" className="w-[20px] h-[20px] "/>
                </a>

            </div>
            {/*trending section*/}


        </>
    )
}