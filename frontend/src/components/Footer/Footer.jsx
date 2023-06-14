const Footer = () => {
    return (
        <footer className="flex flex-col-reverse text-center md:flex-row justify-around py-14 bg-[#1E1E1E] text-white">
            <div className="my-8 md:my-0">
                &copy; { new Date().getFullYear() } Kishan Magar.
            </div>
            <div>
                <ul className="space-x-10">
                    <li className="inline-block hover:underline"><a href="#">About Us</a></li>
                    <li className="inline-block hover:underline"><a href="#">License</a></li>
                    <li className="inline-block hover:underline"><a href="#">Contribute</a></li>
                    <li className="inline-block hover:underline"><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;