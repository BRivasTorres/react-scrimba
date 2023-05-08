import star from "../assets/Star 1.png"

interface CardData {
    id: number;
    coverImg: string;
    stats: {
        rating: number;
        reviewCount: number;
    };
    country: string;
    title: string;
    price: number;
    openSpots: number;
}

interface CardProps {
    item: CardData;
}

const Card = (props: CardProps) => {
    return (
        <div className="flex">
            <div className="relative">
                {props.item.openSpots === 0 && <div className="absolute bg-gray-200 font-bold bottom-[82%] left-[10px] p-[5px] rounded-[5px] ">SOLD OUT</div>}
                <img src={props.item.coverImg} alt="image1" className="w-[230px] h-[300px] mt-[30px] " />
                <div className="flex items-center">
                    <img src={star} alt="star" className="w-[1rem] h-[1rem] " />
                    <p className="text-[1.2rem]" >{props.item.stats.rating}<span className="text-gray-400"> {props.item.stats.reviewCount} {props.item.country} </span></p>
                </div>
                <p>{props.item.title} </p>
                <p><strong>From ${props.item.price}</strong>/ person</p>
            </div>
        </div>
    )
}

export default Card
