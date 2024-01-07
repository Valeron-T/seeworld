import {useState} from "react";
import { Link } from "react-router-dom";
import close from "../assets/close.svg"
import menu from "../assets/menu.svg"

// import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  let navLinks = [
    {
      id: "",
      title: "Home",
    },
    {
      id: "about-us",
      title: "About Us",
    },
    {
      id: "destinations",
      title: "Destinations",
    },
    {
      id: "reviews",
      title: "Reviews",
    },
    {
      id: "contact-us",
      title: "Contact Us",
    },
  ];

  return (
    <nav className="w-full flex py-3 justify-between items-center navbar">
      {/* TODO: Replace logo */}
      <Link to={"/"}>
        <img src="/images/seeworld-logo.png" alt="Seeworld destinations" className="lg:w-[180px] lg:h-[105px] w-[120px] h-[69px] xl:scale-150 max-sm:drop-shadow-[0px_0px_1px_rgba(255,255,255,0.5)]" />
      </Link>
      <ul className="list-none xl:scale-150 lg:scale-105 rounded-full md:flex hidden justify-end items-center bg-black/20 backdrop-blur-sm px-8 py-2">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.length-1 ? 'mr-0' : 'mr-14'} text-white hover:opacity-75`}>
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => settoggle((prev) => !prev)}/>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 backdrop-blur-md z-50 bg-black/20 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar max-xs:scale-90`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.length-1 ? 'mb-0' : 'mb-5'} text-white`}>
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar