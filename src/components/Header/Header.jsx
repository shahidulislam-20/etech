import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import userDefaultPhoto from '../../assets/user.png';

const Header = () => {

    const { user, logOutUser, setDarkMode, darkMode } = useContext(AuthContext);

    const navLinks = <>
        <li className='font-bold text-md'><a><NavLink to="/">Home</NavLink></a></li>
        {
            user && <>
            <li className='font-bold text-md'><a><NavLink to="/add-product">Add Product</NavLink></a></li>
            <li className='font-bold text-md'><a><NavLink to="/my-cart">My Cart</NavLink></a></li>
            </>
        }
        <li className='font-bold text-md'><a><NavLink to="/sign-up">Sign Up</NavLink></a></li>
        <button onClick={() => setDarkMode(!darkMode)} 
        style={darkMode?{background: 'gray', color: 'white'}:{background: '#ccc', color: 'black'}} 
        className='bg-base-300 rounded-full px-2'>Dark Mode</button>
    </>

    const handleLogOut = () => {
        logOutUser()
            .then(console.log('logged out successfully'))
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div 
        style={darkMode?{background: 'white'}:{background: '#202124', color: 'white'}} 
        className='sticky z-10 bg-[#ffffffd0] top-0'>
            <div className="max-w-7xl mx-auto">
                <div className="navbar flex-col md:flex-row">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to="/" className="flex items-center normal-case text-xl">
                            <img className='w-10 h-10 mr-2' src={logo} alt="" />
                            <h3 className='text-3xl font-extrabold'><span className='text-custom'>E</span>TECH.</h3>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="md:navbar-end">
                        {
                            user ? <div className='flex items-center'>
                                <img className='h-11 w-11 rounded-full mr-2' src={user.photoURL ? user.photoURL : userDefaultPhoto} alt="" />
                                <h4 className='font-bold'>{user.displayName}</h4>
                                <button onClick={handleLogOut} className="ml-2 btn bg-custom font-bold text-white hover:text-black">Sign Out</button>
                            </div>
                                : <Link to="/login" className="btn bg-custom font-bold text-white hover:text-black">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;