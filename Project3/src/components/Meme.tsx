import { useState, useEffect } from 'react';

import MemeData from "../helpers/memeData.js"

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.mmes))
    }, [])

    const getRandomImage = () => {
        const img = 100;
        const randomImg = Math.floor(Math.random() * img);
        const url = allMemeImages[randomImg].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }

    function handleChange(e) {
        const { name, value } = e.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div>
            <div className="w-[90%] mx-auto my-[2rem]">
                <div className="flex justify-between ">
                    <input
                        type="text"
                        placeholder="Top Text"
                        className="w-[47%] h-[2.5rem] p-[1rem] placeholder:gray-300 border border-gray-400 rounded-[10px]"
                        name='topText'
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Bottom Text"
                        className="w-[47%] h-[2.5rem] p-[1rem] placeholder:gray-300 border border-gray-400 rounded-[10px]"
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button className="gradient text-white font-bold w-[100%] h-[2.5rem] mt-[1.5rem] rounded-[5px] " onClick={getRandomImage}>Get new meme image🎴</button>
            </div>
            <div className='relative'>
                <img src={meme.randomImage} alt="" className='w-[90%]  mx-auto my-[2rem] ' />
                <h2 className='absolute text-white font-extrabold text-[3rem] left-[30%] top-[20%]'>{meme.topText} </h2>
                <h2 className='absolute text-white font-extrabold text-[3rem] left-[30%] top-[75%]'>{meme.bottomText} </h2>
            </div>
        </div>
    )
}

export default Meme
