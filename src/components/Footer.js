import React from 'react';
import '../css/background.css';
import Logo from '../images/Tello-logo.png';
import {
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineYoutube,
    AiOutlineTwitter,
    AiFillPhone,
} from "react-icons/ai";
import {IoLocation, IoMail} from "react-icons/io5";

const Footer = () => {
    return (
        <div className="background-footer">
            <div className="flex md:flex-row flex-col text-white pr-0 pl-0 pt-12 pb-12 justify-around md:mb-8 md:items-start items-center">
                <div className="mb-8">
                    <img  src={Logo} alt=""/>
                    <ul className="flex mt-1 justify-between list-none">
                        <li className="mr-1"><AiOutlineInstagram/></li>
                        <li className="mr-1"><AiOutlineFacebook/></li>
                        <li className="mr-1"><AiOutlineYoutube/></li>
                        <li className="mr-1"><AiOutlineTwitter/></li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <p className="mt-6 md:mb-5 mb-4">Menu</p>
                    <ul className="list-none pl-0">
                        <li className="mb-3">Yeni</li>
                        <li className="mb-3">Endirimler</li>
                        <li className="mb-3">Aksessuarlar</li>
                        <li className="mb-3">Butun brendler</li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <p className="mt-6 mb-4">Kömək</p>
                    <ul className="list-none pl-0">
                        <li className="mb-3">Tez-tez soruşulan suallar</li>
                        <li className="mb-3">Çatdırılma xidməti</li>
                        <li className="mb-3">Geri qaytarılma şərtləri</li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <p className="mt-6 mb-5">Elaqe</p>
                    <ul className="list-none">
                        <li className="flex items-center mb-3"><IoLocation className="mr-2"/> M. K. Ataturk</li>
                        <li className="flex items-center mb-3"><IoMail className="mr-2"/>example@gmail.com</li>
                        <li className="flex items-center mb-3"><AiFillPhone className="mr-2"/>*2108</li>
                    </ul>
                </div>
            </div>
            <div className="bg-white border border-white h-0.1 w-full hidden md:inline-block "></div>
            <div className="flex p-6 text-white md:flex-row flex-col-reverse justify-around items-center">
                <div className="flex mt-4 items-center ">
                    <p className="mr-2">&copy;</p>
                    <p>ProjectX 2021. Bütün hüquqlar qorunur.</p>
                </div>
                <div className="bg-white opacity-0.1  h-0.1 w-full border border-white inline-block md:hidden"></div>
                <div className="flex justify-between mt-4 items-center md:mb-0">
                    <p className="mr-6">Qaydalar və şərtlər</p>
                    <p >Məxfilik siyasəti</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;