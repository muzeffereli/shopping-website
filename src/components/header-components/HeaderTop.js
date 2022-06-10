import React, {useState} from "react";
import logo from '../../images/Tello-logo.png';
import {RiSearch2Line} from 'react-icons/ri';
import {HiOutlineUser} from 'react-icons/hi';
import {CgShoppingCart} from 'react-icons/cg';
import {FiMenu} from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';
import projectX from '../../images/project-x.png';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import "../../css/header.css";
import commerce from "../../lib/Ecommerce";

const HeaderTop = ({categories}) => {
    const basket = useSelector(state => state.basket.basket);
    const [open, setOpen] = useState(false);

    const openMyHamburger = () => {
        setOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const closeMyHamburger = () => {
        setOpen(false);
        document.body.style.overflow = 'visible';
    };

    const logout = () => {
        commerce.customer.logout();
        window.location = '/';
    };

    return (
        <div className="mx-auto ">
            <div
                className={` bg-white h-screen ${!open && "-mx-96 hidden"} md:hidden z-10  transition`}>
                <div>
                    <div className="flex">
                        <span onClick={closeMyHamburger} className="text-3xl mt-4"><GrClose/></span>
                        <div className="mt-5 ml-5"><img src={logo} alt=""/></div>
                    </div>
                    <ul className="mt-4 text-xl flex flex-col gap-5">
                        {categories?.map((category) => (
                            <li key={category.id}><Link
                                to={`/products/${category.name.toLowerCase()}`}>{category.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="py-6 flex justify-between h-max ">
                    {!commerce.customer.isLoggedIn() ? (<> <Link to="/login">
                            <button
                                className="border-2 bg-white text-green-400 border-green-400 rounded-lg px-12 py-4">Daxil
                                ol
                            </button>
                        </Link>
                            <Link to="/register">
                                <button
                                    className="border-2 bg-green-400 text-white border-green-400 rounded-lg px-12 py-4">Qeydiyyat
                                </button>
                            </Link></>) :
                        <button
                            onClick={logout}
                            className="border-2 bg-green-400 w-100 text-white border-green-400 rounded-lg px-12 py-4 ">Çıxış
                            et
                        </button>}
                </div>
            </div>
            <div className="md:flex justify-between items-center md:mt-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center text-3xl">
                        <FiMenu className="sm:hidden font-thin mr-8" onClick={openMyHamburger}/>
                        <Link to="/"> <img src={logo} alt=""/></Link>
                    </div>
                    <div className="md:hidden">
                        {commerce.customer.isLoggedIn() ? (
                            <Link className="text-decoration-none text-black ml-5" to="profile/info"><HiOutlineUser
                                className="inline-block text-2xl opacity-70"/></Link>
                        ) : (
                            <Link className="text-decoration-none text-black ml-5" to="/login"> <HiOutlineUser
                                className="inline-block text-2xl opacity-70"/></Link>
                        )}


                        <Link className="text-decoration-none text-black ml-5" to="/basket"> <CgShoppingCart
                            className="inline-block text-2xl opacity-70"/></Link>
                    </div>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg md:flex justify-start items-center md:w-5/12 md:h-10">
                    <RiSearch2Line className="inline-block md:m-2 mb-1"/>
                    <input
                        type="text"
                        placeholder="Axtarış..."
                        className="bg-inherit focus:outline-none pl-2 md:w-full"
                    />
                </div>
                <div className="top-icons hidden md:flex md:justify-center items-center">
                    {commerce.customer.isLoggedIn() ? (
                        <Link className="text-black" to="profile/info"><HiOutlineUser className=" text-xl opacity-70"/></Link>
                    ) : (
                        <Link className="text-black" to="/login"> <HiOutlineUser
                            className=" text-xl opacity-70"/></Link>
                    )}
                    <div className="flex justify-content-around items-center ">
                        <Link className="text-decoration-none text-black ml-5" to="/basket"> <CgShoppingCart
                            className="mr-3 text-xl opacity-70"/></Link>
                        <span className="basket-count  pl-3  pr-3  flex justify-center items-center
                     text-white cursor-pointer ">{basket && basket.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
