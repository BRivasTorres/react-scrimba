import star from "../assets/Star 1.png"

interface CardProps {
    img: string;
    rating: number;
    reviewCount: number;
    country: string;
    title: string;
    price: number;
}

const Card = (props: CardProps) => {
    return (
        <div className="flex ">
            <div>
                <img src={props.img} alt="image1" className="w-[230px] h-[300px] mt-[30px] " />
                <div className="flex items-center">
                    <img src={star} alt="star" className="w-[1rem] h-[1rem] " />
                    <p className="text-[1.2rem]" >{props.rating}<span className="text-gray-400"> {props.reviewCount} {props.country} </span></p>
                </div>
                <p>{props.title} </p>
                <p><strong>From ${props.price}</strong>/ person</p>
            </div>
        </div>
    )
}

export default Card
