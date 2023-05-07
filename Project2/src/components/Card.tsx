import star from "../assets/Star 1.png"

interface CardProps {
    img: string;
    rating: string;
    reviewCount: number;
    country: string;
    title: string;
    price: number;
}

const Card = (props: CardProps) => {
    return (
        <div>
            <img src={props.img} alt="image1" className="w-[220px] " />
            <div className="flex items-center">
                <img src={star} alt="star" className="w-[1rem] h-[1rem] " />
                <p className="text-[1.2rem]" >{props.rating}<span className="text-gray-400"> {props.reviewCount} {props.country} </span></p>
            </div>
            <p>{props.title} </p>
            <p><strong>From ${props.price}</strong>/ person</p>
        </div>
    )
}

export default Card
