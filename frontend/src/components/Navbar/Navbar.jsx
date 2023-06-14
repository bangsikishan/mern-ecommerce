import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiShopee } from 'react-icons/si';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(prevNav => !prevNav);
    }

    return (
            <nav className="relative flex justify-between h-14 px-5 md:px-12 bg-[#1E1E1E] z-10">
                <div className="flex justify-center">
                    <Link to='/' className="flex items-center space-x-4">
                        <SiShopee className="text-4xl text-white" />
                        <p className="text-2xl font-bold text-white">E-Com</p>
                    </Link>
                </div>
                <RxHamburgerMenu onClick={handleClick} className="my-auto text-2xl text-white cursor-pointer md:hidden" />
                <ul className="hidden md:flex items-center">
                    <li>
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to='/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to='/login'>Login</Link>
                    </li>
                </ul>
                {nav ? (
                    <ul className="absolute top-14 left-0 flex flex-col items-center justify-center space-y-4 h-52 w-full bg-inherit">
                        <li>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/shop'>Shop</Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/contact'>Contact Us</Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/login'>Login</Link>
                        </li>
                    </ul>
                ) : (
                    ''
                )}
            </nav>
    );
}
 
export default Navbar;