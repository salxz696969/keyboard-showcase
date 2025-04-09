import Spec from "./small_components/Spec.jsx";

export default function Featured({ isPicOnLeft, imagePath, name, description, specs, backgroundColor }) {
    return (
        <div
            className="featured md:h-[50vh] flex justify-center items-center p-2.5"
            style={{ backgroundColor: backgroundColor }}
        >
            <div className="featured-wrapper h-full w-[90vw] lg:w-[1024px] flex flex-col md:flex-row justify-between items-center md:p-2.5 pb-[100px]" data-aos="fade-up">
                {isPicOnLeft ? (
                    <>
                        <img src={imagePath} className="w-full h-1/2 md:w-1/2 md:h-auto" alt="" />
                        <div className="featured-text flex flex-col gap-4 w-full md:w-1/3 justify-center md:justify-between items-center md:items-start">
                            <p className="text-3xl text-white">{name}</p>
                            <div className="spec-wrapper flex gap-2.5">
                                {specs.map((spec, index) => (
                                    <Spec image={spec.image} name={spec.name} key={index} />
                                ))}
                            </div>
                            <p className="text-l text-white">{description}</p>
                            <div className="button-wrapper flex gap-2.5 mt-8">
                                <a href="" className="py-2 px-3.5 bg-white text-black">
                                    Sound Test
                                </a>
                                <a href="" className="py-2 px-3.5 bg-white text-black">
                                    View In 3D
                                </a>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="featured-text flex flex-col gap-4 w-full md:w-1/3 justify-center md:justify-between items-center md:items-start order-2 md:order-1">
                            <p className="text-3xl text-white">{name}</p>
                            <div className="spec-wrapper flex gap-2.5">
                                {specs.map((spec, index) => (
                                    <Spec image={spec.image} name={spec.name} key={index} />
                                ))}
                            </div>
                            <p className="text-l text-white">{description}</p>
                            <div className="button-wrapper flex gap-2.5 mt-8">
                                <a href="" className="py-2 px-3.5 bg-white text-black">
                                    Sound Test
                                </a>
                                <a href="" className="py-2 px-3.5 bg-white text-black">
                                    View In 3D
                                </a>
                            </div>
                        </div>
                        <img src={imagePath} className="w-full h-1/2 md:w-1/2 md:h-auto order-1 md:order-2" alt="" />
                    </>
                )}
            </div>
        </div>
    );
}
