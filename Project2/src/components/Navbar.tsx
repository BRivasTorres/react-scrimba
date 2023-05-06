import logo from "../assets/airbnb.png"

const Navbar = () => {
    return (
        <div className="box-shadow-nav-shadow h-20 bg-white-300 nav">
            <img src={logo} alt="logo" className="px-[2rem] py-[2rem] " />
        </div>
    )
}

export default Navbar
