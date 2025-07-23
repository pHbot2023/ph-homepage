"use client"

import navItems from "../../public/data/navItems.json";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(true);

    return(
        <nav className="flex bg-[#015486] h-12 w-full text-white px-12 place-items-center content-center">
            <div className="flex w-1/2 justify-start">
                <img className="w-16" src="./pHbot-semfundo.png" alt="teste" />
            </div>
            <div className="sm:flex hidden w-1/2 justify-end">
                {Object.values(navItems).map((item, index) => (
                    <a key={index} href={item.href} className="px-2 hover:cursor-pointer">
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="sm:hidden w-1/2 justify-items-end" onClick={() => setDropdown(!dropdown)}>
             <AiOutlineMenu className='lg:hidden flex text-white hover:cursor-pointer'/>   
            </div>
            {dropdown ? (
                <div className="sm:hidden absolute right-10 top-10 justify bg-white drop-shadow-sm h-fit rounded-lg text-black">
                    {Object.values(navItems).map((item, index) => (
                    <a key={index} href={item.href} className="flex w-full rounded-sm hover:bg-[#015486] hover:text-white p-2 hover:cursor-pointer">
                        {item.name}
                    </a>
                ))}
                </div>
            ) : (
                <div className="hidden">
                    
                </div>
            )}
        </nav>
    )
}

export default Navbar;