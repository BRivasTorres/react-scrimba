import trollFace from "../assets/Troll Face.png"

const Navbar = () => {
    return (
        <div className="gradient text-white text-[1rem] flex justify-between p-[1rem] items-center " >
            <div className="flex font-bold items-center">
                <img src={trollFace} alt="troll Face" className="w-[40px] " />
                <p className="mx-[8px]" >Meme Generator</p>
            </div>
            <p>React Course - Project 3</p>
        </div>
    )
}

export default Navbar
