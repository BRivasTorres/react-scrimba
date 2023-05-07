import image1 from "../assets/image 12.png"
import star from "../assets/Star 1.png"

const Card = () => {
    return (
        <div>
            <img src={image1} alt="image1" className="w-[220px] " />
            <div className="flex items-center">
                <img src={star} alt="star" className="w-[1rem] h-[1rem] " />
                <p className="text-[1.2rem]" >5.0 <span className="text-gray-400">06 USA</span></p>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><strong>From $136</strong>/ person</p>
        </div>
    )
}

export default Card
