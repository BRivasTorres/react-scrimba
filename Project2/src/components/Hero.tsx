import React from 'react'
import heroImage from "../assets/Group 77.png"

const Hero = () => {
    return (
        <div>
            <img src={heroImage} alt="heroImage" className='w-[500px] mx-auto my-[3rem] ' />
            <h2 className='text-[3rem] font-bold mx-[1rem] my-[1rem]'>Online Experiences</h2>
            <p className='w-[300px] text-[1rem] font-medium mx-[1rem]'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero
