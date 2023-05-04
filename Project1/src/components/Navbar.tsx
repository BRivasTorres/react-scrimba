const Navbar = () => {
    return (
        <nav className="bg-nav-black flex justify-around items-center h-[100px]">
            <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react-logo" className="w-[2rem] h-[2rem]" />
                <h3 className="text-[2rem] text-sky-blue ">ReactFacts</h3>
            </div>
            <p className="text-gray text-[1.3rem]">React Course - Project 1</p>
        </nav>
    )
}

export default Navbar
