import {useEffect, useState} from "react";
import TrendingCard from "./small_components/TrendingCard.jsx";

export default function Trending() {
    const test = [
        {
            name: "AULA-K001",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "/images/key1.png"
        },
        {
            name: "Logitech G413",
            desc: "Sleek design and Romer-G switches for precision typing.",
            image: "/images/key1.png"
        },
        {
            name: "Corsair K95",
            desc: "RGB mechanical keyboard with macro keys and premium build.",
            image: "/images/key1.png"
        },
        {
            name: "SteelSeries Apex Pro",
            desc: "Adjustable mechanical switches and OLED smart display.",
            image: "/images/key1.png"
        },
        {
            name: "Razer Huntsman Mini",
            desc: "60% layout with optical switches for ultra-fast response.",
            image: "/images/key1.png"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % test.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [test.length]);

    return (
        <div className="w-full mx-auto overflow-hidden" data-aos="fade-up">
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
