import { useState } from 'react';

import MemeData from "../helpers/memeData.js"

const Meme = () => {
    const [image, setImage] = useState("")

    const getRandomImage = () => {
        const img = 100;
        const randomImg = Math.floor(Math.random() * img);
        setImage(MemeData.data.memes[randomImg].url)
    }
    console.log(image)
    return (
        <div>
            <div className="w-[90%] mx-auto my-[2rem]">
                <div className="flex justify-between ">
                    <input type="text" placeholder="Shut up" className="w-[47%] h-[2.5rem] p-[1rem] placeholder:text-black border border-gray-400 rounded-[10px]" />
                    <input type="text" placeholder="And take my money" className="w-[47%] h-[2.5rem] p-[1rem] placeholder:text-black border border-gray-400 rounded-[10px]" />
                </div>
                <button className="gradient text-white font-bold w-[100%] h-[2.5rem] mt-[1.5rem] rounded-[5px] " onClick={getRandomImage}>Get new meme image🎴</button>
            </div>
            <img src={image} alt="" className='w-[90%]  mx-auto my-[2rem] ' />
        </div>
    )
}

export default Meme
