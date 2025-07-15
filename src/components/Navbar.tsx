const Navbar = () => {
    return(
        <nav className="flex bg-[#015486] h-12 w-full text-white px-12 place-items-center content-center">
            <div className="flex w-1/2 justify-start ">
                <img className="w-16" src="./pHbot-semfundo.png" alt="teste" />
            </div>
            <div className="flex w-1/2 justify-end">
                <button className="px-2 hover:cursor-pointer">
                    Quem somos
                </button>
                <button className="px-2 hover:cursor-pointer">
                    Soluções
                </button>
                <button className="px-2 hover:cursor-pointer">
                    Contato
                </button>
            </div>
        </nav>
    )
}

export default Navbar;