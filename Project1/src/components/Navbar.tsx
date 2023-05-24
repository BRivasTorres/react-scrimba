
const Navbar = (props) => {
    return (
        <nav className={`${props.darkMode ? "bg-black" : "bg-white"} flex justify-around items-center h-[100px]`}>
            <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react-logo" className="w-[2rem] h-[2rem]" />
                <h3 className="text-[2rem] text-sky-blue ">ReactFacts</h3>
            </div>
            <div className="flex items-center">
                <p className={`${props.darkMode ? "text-white" : "text-black"} mx-2`}>Light</p>
                <div className={`${props.darkMode ? " bg-white" : "bg-black"} w-8 h-4 rounded-[30px] hover:cursor-pointer relative`}
                    onClick={props.toggleDarkMode}
                >
                    <div
                        className={`${props.darkMode ? "bg-black" : "bg-white border-black left-4"} absolute w-4 h-4 rounded-[50%] border border-white`}
                    >
                    </div>
                </div>
                <p className={`${props.darkMode ? "text-white" : "text-black"} mx-2`}>Dark</p>
            </div>
        </nav>
    )
}

export default Navbar
