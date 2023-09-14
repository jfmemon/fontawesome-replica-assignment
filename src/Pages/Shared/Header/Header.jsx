import logo from '../../../assets/logo.jpg';
import search from '../../../assets/search.png';

const Header = () => {
    return (
        <div className="navbar bg-base-100 md:container mx-auto md:px-24 py-6">
            <div className="md:mr-20">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 bg-base-100 w-52">
                        <li><a>Start</a></li>
                        <li><a><img className='w-5 h-5' src={search} alt="" /></a></li>
                        <li><a>Icons</a></li>
                        <li><a>Docs</a></li>
                        <li><a>Plans</a></li>
                        <li><a>Support</a></li>
                        <li><a>Podcast</a></li>
                    </ul>
                </div>
                <a className="normal-case text-xl"><img className='w-7 h-6' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu-horizontal gap-12 items-center">
                    <li className='cursor-pointer text-gray-600'><a>Start</a></li>
                    <li><a><img className='w-4 h-4' src={search} alt="" /></a></li>
                    <li><a>Icons</a></li>
                    <li><a>Docs</a></li>
                    <li><a>Plans</a></li>
                    <li><a>Support</a></li>
                    <li><a>Podcast</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;