import React, {useEffect, useState} from 'react';
import Product from "./Product";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {MdArrowForwardIos} from 'react-icons/md';
import {Link} from "react-router-dom";

const ProductList = ({data, categoryName, category}) => {
    let [mywindow, setMywindow] = useState({height: window.innerHeight, width: window.innerWidth});

    useEffect(() => {
        let resizeId;
        window.addEventListener("resize", function () {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 500);
        });

        function doneResizing() {
            setMywindow({height: window.innerHeight, width: window.innerWidth});
        }

    }, [mywindow]);

    console.log(mywindow);

    return (
        <>
            <div className="flex justify-between my-6">
                <p>{category}</p>
                <Link to={`/products/${categoryName}`} className="items-center hidden md:flex text-decoration-none">
                    <p className="mr-3">Hamısına bax</p>
                    <MdArrowForwardIos/>
                </Link>
            </div>

            <Swiper
                effect="fade"
                spaceBetween={50}
                slidesPerView={mywindow.width && mywindow.width > 768 ? 4 : 2}
                modules={[Pagination]}
                pagination={{
                    clickable: true
                }}
                className="center"
            >
                {
                    data.length > 0 && data.map(el => {
                        return <SwiperSlide key={el.id}><Link className="mt-3 text-black text-decoration-none"
                                                              to={`/products/${categoryName}/${el.id}`}><Product
                            data={el} className="md:w-1/5 w-6/12"/></Link></SwiperSlide>;
                    })
                }
            </Swiper>

            <Link to={`/products/${categoryName}`}
                  className="flex text-black items-center md:hidden text-center justify-center text-decoration-none mt-3 mb-8">
                <p className="text-decoration-none mr-3 mb-0 ">Hamısına bax</p>
                <MdArrowForwardIos/>
            </Link>
        </>
    );
};

export default ProductList;