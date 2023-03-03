import { Link } from 'react-router-dom';
import { SiShopee } from 'react-icons/si';

const Navbar = () => {
    return (
            <nav className="flex justify-between py-3 px-12">
                <div>
                    <Link to='/' className="flex items-center space-x-4">
                        <SiShopee className="text-4xl" />
                        <p className="text-2xl font-bold text-[#2E2E2E]">E-Com</p>
                    </Link>
                </div>
                <ul className="flex items-center">
                    <li>
                        <Link className='font-semibold py-2 px-4 mx-2 rounded-lg hover:bg-[#00C9B7] hover:text-[#E8F3F1] transition duration-500 ease-in-out' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='font-semibold py-2 px-4 mx-2 rounded-lg hover:bg-[#00C9B7] hover:text-[#E8F3F1] transition duration-500 ease-in-out' to='/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link className='font-semibold py-2 px-4 mx-2 rounded-lg hover:bg-[#00C9B7] hover:text-[#E8F3F1] transition duration-500 ease-in-out' to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link className='font-semibold py-2 px-4 mx-2 rounded-lg hover:bg-[#00C9B7] hover:text-[#E8F3F1] transition duration-500 ease-in-out' to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
    );
}
 
export default Navbar;