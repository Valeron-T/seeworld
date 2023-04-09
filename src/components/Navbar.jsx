import {useState} from "react";

import close from "../assets/close.svg"
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"
// import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  let navLinks = [
    {
      id: "home",
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
      id: "services",
      title: "Services",
    },
    {
      id: "contact-us",
      title: "Contact Us",
    },
  ];

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* TODO: Replace logo */}
      <img src="./images/seeworld-logo.png" alt="Seeworld destinations" className="w-[124px] h-[37px]" />

      <ul className="list-none rounded-full md:flex hidden justify-end items-center bg-black/20 backdrop-blur-sm px-8 py-2">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.length-1 ? 'mr-0' : 'mr-14'} text-white hover:opacity-75`}>
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => settoggle((prev) => !prev)}/>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 backdrop-blur-md bg-black/20 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.length-1 ? 'mb-0' : 'mb-5'} text-white`}>
                <a href={`${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar