export default function Spec({image, name}) {
    return (
        <>
            <div className="spec w-[50px] flex-col justify-between items-center gap-3.5 mr-2.5 ">
                <img className="w-full h-[50px]" src={image} alt=""/>
                <p className="text-center text-white text-xs mt-2.5">{name}</p>
            </div>

        </>
    )
}