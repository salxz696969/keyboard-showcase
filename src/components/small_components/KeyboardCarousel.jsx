import { useEffect, useRef, useState } from "react";
import "../../index.css";

export default function KeyboardCarousel({ images, isAtRight }) {
    const [imageIndex, setImageIndex] = useState(0);
    const imageRef = useRef();

    useEffect(() => {
        const imageEl = imageRef.current;

        const interval = setInterval(() => {
            if (!imageEl) return;

            // Slide out
            imageEl.classList.add(isAtRight ? "translate-x-full" : "-translate-x-full");

            setTimeout(() => {
                // Reset to opposite side before showing new image
                imageEl.classList.add(isAtRight ? "-translate-x-full" : "translate-x-full");

                // Remove current image
                setImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

                // Let DOM update with new image, then bring it to center
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        imageEl.classList.remove("translate-x-full", "-translate-x-full");
                    });
                });
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length, isAtRight]);

    return (
        <div className={`carousel-wrapper w-1/4 h-full flex ${isAtRight ? "justify-end" : "justify-start"} items-center overflow-hidden`} data-aos={isAtRight ? "fade-right" : "fade-left"}>
            <img
                src={images[imageIndex]}
                alt={`Keyboard ${imageIndex + 1}`}
                className="w-full aspect-[16/10] transition-transform duration-500"
                ref={imageRef}
            />
        </div>
    );
}
