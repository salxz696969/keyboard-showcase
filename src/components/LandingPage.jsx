import "../index.css"
import KeyboardCarousel from "./small_components/KeyboardCarousel.jsx";
import Featured from "./Featured.jsx";
import Trending from "./Trending.jsx";

export default function LandingPage() {

    const heroImages = ["/images/key1.png", "/images/key2.png", "/images/key3.png"];
    const featured = [
        {
            name: "Akko MU02 Mountain Seclusion",
            desc: "A 75% mechanical keyboard featuring a walnut wooden case, gasket mount structure, and MOA profile PBT dye-sublimated keycaps. It offers multi-mode connectivity, including Bluetooth 5.0, 2.4GHz wireless, and USB Type-C, providing versatility for both work and play.",
            image: "https://akkogear.eu/cdn/shop/files/Akko-MU02-Mountain-Seclusion.png?v=1727681953",
            specs: [
                {image: "assets/images/blue-switch.png", name: "Clicky Switch"},
                {image: "assets/images/wired.png", name: "Wired"},
                {image: "assets/images/bluetooth.png", name: "Bluetooth"},
                {image: "assets/images/wireless.png", name: "Wireless"},
            ]
        },
        {
            name: "Keychron Q1",
            desc: "A customizable 75% mechanical keyboard with an aluminum chassis, offering both wired and wireless connectivity options. It features hot-swappable switches, PBT keycaps, and supports VIA software for easy customization, making it a versatile choice for various typing preferences.",
            image: "https://www.keychron.com/cdn/shop/files/q1_3f9eee4b-bd19-4e3c-99ef-8667d3e55eaa.png?v=15023799825292887673",
            specs: [
                {image: "assets/images/red-switch.png", name: "Linear Switch"},
                {image: "assets/images/bluetooth.png", name: "Bluetooth"},
                {image: "assets/images/wired.png", name: "Wired"},
            ]
        },
        {
            name: "Akko Black SP 3087v2",
            desc: "A compact mechanical keyboard featuring a black and silver color scheme, designed for a sleek and modern look. It offers a satisfying typing experience with its tactile switches and durable construction, suitable for both typing and gaming.",
            image: "https://akkogear.eu/cdn/shop/files/Akko-Black-SP-3087v2-1.png?v=1695370410",
            specs: [
                {image: "assets/images/brown-switch.png", name: "Tactile Switch"},
                {image: "assets/images/wired.png", name: "Wired"},
            ]
        }
    ];
    return (
        <>
            <div className="hero w-dvw h-[100vh] bg-[#0e0e0e] flex justify-center md:justify-between items-center">
                <KeyboardCarousel isAtRight={false} images={heroImages}></KeyboardCarousel>
                <div className="hero-text w-full md:w-1/2 flex flex-col gap-4 justify-center items-center"
                     data-aos="fade-up">
                    <p className="text-[#893331] text-4xl">KeebsForKeebs</p>
                    <p className="text-white text-xl text-center">"Explore Keyboards. Feel the Click. Hear the
                        Sound."</p>
                    <div className="hero-buttons flex gap-2 mt-8">
                        <a href="" className="py-2 px-3.5  bg-white text-black">Purchase</a>
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
            <div className="more-section bg-[#0e0e0e] flex flex-col justify-center items-center md:h-min-[60vh]">
                <div className="more-section-wrapper w-full lg:w-[1024px]">
                    <Trending></Trending>
                </div>
                <a className="explore-more-btn bg-white p-2.5 flex text-black cursor-pointer gap-2.5 items-center mt-[100px]">
                    <p>Explore More</p>
                    <img src="/images/arrow.png" alt="" className="w-[20px] h-[20px] "/>
                </a>
            </div>
        </>
    )
}