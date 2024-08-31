const Header = () => {
    return ( <>
        <header className="text-brand-white uppercase flex justify-end z-10 mx-auto w-[1320px] max-w-[100%] h-[96px] py-8">
            <nav className="w-[50%] my-auto">
                <ul className="flex gap-10 justify-end mr-4 text-sm font-bold">
                    <li className="hover:text-brand-secondary cursor-pointer"><a href="#about">About</a></li>
                    <li className="hover:text-brand-secondary cursor-pointer"><a href="#service">Services</a></li>
                    <li className="hover:text-brand-secondary cursor-pointer"><a href="#project">Works</a></li>
                    <li className="hover:text-brand-secondary cursor-pointer"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    </> );
}
 
export default Header;