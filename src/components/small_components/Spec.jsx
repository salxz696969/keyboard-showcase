export default function Spec({image, name}) {
    return (
        <>
            <div className="spec flex-col justify-center items-center gap-2.5">
                <img className="w-[100px]" src={image} alt=""/>
                <p className="text-center text-white">{name}</p>
            </div>

        </>
    )
}