export default function TrendingCard({image, name, desc}) {
    return (
        <div
            className="trending-card  bg-[#893331] rounded flex flex-wrap justify-center md:flex-nowrap gap-2.5 items-center p-2.5 md:justify-between m-2.5">
            <img
                src={image}
                alt={name}  // Use name as alt text for better accessibility
                className="w-full md:w-[50%] aspect-[16/9] object-cover"  // object-cover for better image aspect ratio handling
            />
            <div className="trending-card-text w-full flex flex-col gap-5.5 md:w-[50%] h-full items-center md:justify-between md:items-start justify-around mb-[60px] md:mb-0">
                <p className="text-xl text-white text-center md:text-left">{name}</p>
                <p className="text-s text-center md:text-left md:text-md text-white w-[80%]">{desc}</p>
                <a
                    href="#"  // Placeholder link, replace with actual URL if available
                    className="py-1 px-2.5 bg-white text-black w-fit text-center"
                >
                    <p>Purchase</p>
                </a>
            </div>
        </div>
    );
}
