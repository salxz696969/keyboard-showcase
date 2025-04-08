export default function TrendingCard({image, name, desc}) {
    return (
        <div
            className="trending-card  bg-[#893331] rounded flex gap-2.5 items-center p-2.5 justify-between m-2.5">
            <img
                src={image}
                alt={name}  // Use name as alt text for better accessibility
                className="w-[50%] aspect-[16/9] object-cover"  // object-cover for better image aspect ratio handling
            />
            <div className="trending-card-text flex flex-col gap-2.5 w-[50%] h-full justify-around">
                <p className="text-xl text-white">{name}</p>
                <p className="text-m text-white w-[80%]">{desc}</p>
                <a
                    href="#"  // Placeholder link, replace with actual URL if available
                    className="py-2 px-3.5 bg-white text-black w-fit text-center"
                >
                    <p>Purchase</p>
                </a>
            </div>
        </div>
    );
}
