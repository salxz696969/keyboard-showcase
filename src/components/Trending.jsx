import {useEffect, useState} from "react";
import TrendingCard from "./small_components/TrendingCard.jsx";

export default function Trending() {
    const test = [
        {
            name: "Sailor Moon Crystal 5087B Plus",
            desc: "A Sailor Moon-themed mechanical keyboard featuring vibrant RGB lighting and a compact design.",
            image: "https://akkogear.eu/cdn/shop/files/SailorMoonCrystal5087BPlus.png?v=1700565857&width=2000"
        },
        {
            name: "Redragon K556 TKL RGB",
            desc: "A tenkeyless mechanical gaming keyboard with RGB backlighting and durable construction.",
            image: "https://www.redragonzone.com/cdn/shop/files/Redragon_K556_TKL_RGB_Wired_Mechanical_Gaming_Keyboard_6_300x300.png?v=1706770169"
        },
        {
            name: "Akko Black SP 3087v2",
            desc: "A 3087v2 mechanical keyboard featuring black switches and a sleek design.",
            image: "https://akkogear.eu/cdn/shop/files/Akko-Black-SP-3087v2-1.png?v=1695370410"
        },
        {
            name: "Akko MU02 Mountain Seclusion",
            desc: "A 75% mechanical keyboard featuring a walnut wooden case, gasket mount structure, and MOA profile PBT dye-sublimated keycaps.",
            image: "https://akkogear.eu/cdn/shop/files/Akko-MU02-Mountain-Seclusion.png?v=1727681953"
        },
        {
            name: "Akko 3061S HE Shine-Through Mechanical Keyboard",
            desc: "A 60% compact mechanical keyboard featuring magnetic switches, RGB backlighting, and high polling rate for enhanced performance.",
            image: "https://akkogear.de/cdn/shop/files/Akko-3061S-HE-Shine-Through-1.png?v=1718950199"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % test.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [test.length]);

    return (
        <div className="w-full h-full mx-auto overflow-hidden" data-aos="fade-up">
            <h1 className="text-4xl text-white text-center mb-[100px] mt-[100px]">Trending</h1>
            <div className="relative w-full overflow-hidden">
                <div
                    className=" w-full flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {test.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <TrendingCard
                                desc={item.desc}
                                name={item.name}
                                image={item.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
