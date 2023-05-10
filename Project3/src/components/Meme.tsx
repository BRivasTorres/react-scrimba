const Meme = () => {
    return (
        <div>
            <form className="w-[90%] mx-auto my-[2rem]">
                <div className="flex justify-between ">
                    <input type="text" placeholder="Shut up" className="w-[47%] h-[2.5rem] p-[1rem] placeholder:text-black border border-gray-400 rounded-[10px]" />
                    <input type="text" placeholder="And take my money" className="w-[47%] h-[2.5rem] p-[1rem] placeholder:text-black border border-gray-400 rounded-[10px]" />
                </div>
                <input type="submit" value="Get new meme image🎴 " className="gradient text-white font-bold w-[100%] h-[2.5rem] mt-[1.5rem] rounded-[5px]  " />
            </form>
        </div>
    )
}

export default Meme
