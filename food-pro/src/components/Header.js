import { useContext, useState } from "react";
import Logo from '../images/Logo.png';
import { Link } from 'react-router-dom';
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    const {user} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="relative">
        <div className="flex mx-auto w-screen p-4 mb-5 align-middle justify-between bg-blue-100 shadow-xl fixed">
            <div className="logo">
                <Link to="/">
                    <img 
                        className="w-32"
                        src={Logo}
                        alt=""
                    />
                </Link>
            </div>
            <div className="nav-bar">
                <ul className="flex align-middle">
                    <li className="p-4">
                        <Link className="inline-block align-middle" to="/">Home</Link>
                    </li>
                    <li className="p-4">
                        <Link className="inline-block align-middle" to="/about">About</Link>
                    </li>
                    <li className="p-4">
                        <Link className="inline-block align-middle" to="/contact">Contact</Link>
                    </li>
                    <li className="p-4">
                        <Link className="inline-block align-middle" to="/instamart">Instamart</Link>
                    </li>
                    <li className="p-4">
                        <Link className="inline-block align-middle" to="/cart">Cart - {cartItems.length} items</Link>
                    </li>
                </ul>
            </div>
            <ul className="flex">
                <li className="px-2 py-4 font-bold">
                    {user.name}
                    {isOnline ? "🟢" : "❌" }
                </li>
                <li className="px-4 py-4">
                    {isLoggedIn ? (
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button> 
                    ) : (
                        <button onClick={() => setIsLoggedIn(true)}>Login</button>
                    )}
                </li>
            </ul>     
        </div>
        </div>
    )
};

export default Header;