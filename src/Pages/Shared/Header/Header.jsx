import logo from '../../../assets/logo.jpg';
import search from '../../../assets/search.png';

const Header = () => {
    return (
        <div className="navbar bg-base-100 md:container mx-auto md:px-24 pt-7 pb-6">
            <div className="md:mr-20">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content gap-16 mt-3 z-[1] p-2 bg-base-100 w-52">
                        <li className='cursor-pointer pl-3 py-2 text-gray-500 text-[15px] hover:text-blue-600'><a>Start</a></li>
                        <li className='cursor-pointer pl-3 py-2'><a><img className='w-4 h-4' src={search} alt="" /></a></li>
                        <li className='cursor-pointer pl-3 py-2 text-gray-500 text-[15px] hover:text-blue-600'><a>Icons</a></li>
                        <li className='cursor-pointer pl-3 py-2 text-gray-500 text-[15px] hover:text-blue-600'><a>Docs</a></li>
                        <li className='cursor-pointer pl-3 py-2 text-gray-500 text-[15px] hover:text-blue-600'><a>Plans</a></li>
                        <li className='cursor-pointer pl-3 py-2 text-gray-500 text-[15px] hover:text-blue-600'><a>Support</a></li>
                        <li className='cursor-pointer pl-3 py-2 text-gray-500 text-[15px] hover:text-blue-600'><a>Podcast</a></li>
                    </ul>
                </div>
                <a className="normal-case text-xl"><img className='w-7 h-6' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu-horizontal gap-12 items-center text-md">
                    <li className='cursor-pointer text-gray-500 text-[15px] hover:text-blue-600'><a>Start</a></li>
                    <li className='cursor-pointer'><a><img className='w-4 h-4' src={search} alt="" /></a></li>
                    <li className='cursor-pointer text-gray-500 text-[15px] hover:text-blue-600'><a>Icons</a></li>
                    <li className='cursor-pointer text-gray-500 text-[15px] hover:text-blue-600'><a>Docs</a></li>
                    <li className='cursor-pointer text-gray-500 text-[15px] hover:text-blue-600'><a>Plans</a></li>
                    <li className='cursor-pointer text-gray-500 text-[15px] hover:text-blue-600'><a>Support</a></li>
                    <li className='cursor-pointer text-gray-500 text-[15px] hover:text-blue-600'><a>Podcast</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;