const Header = () => {
    return ( <>
        <header className="text-brand-white uppercase flex justify-end z-10 mx-auto w-[1320px] max-w-[100%] h-[96px] py-8">
            <nav className="w-[50%] my-auto">
                <ul className="flex gap-10 justify-end mr-4 text-sm font-bold">
                    <li className="hover:text-brand-secondary cursor-pointer">About</li>
                    <li className="hover:text-brand-secondary cursor-pointer">Services</li>
                    <li className="hover:text-brand-secondary cursor-pointer">Works</li>
                    <li className="hover:text-brand-secondary cursor-pointer">Contact</li>
                </ul>
            </nav>
        </header>
    </> );
}
 
export default Header;