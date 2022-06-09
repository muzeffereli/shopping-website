import React from 'react';
import {Link} from "react-router-dom";
import "../../css/header.css";
import {useSelector} from "react-redux";

const HeaderUl = ({categories, setFilter}) => {
    const status = useSelector((state) => state.products.status);

    return (
        status === 'loading' ? <div></div> : <div className="">
            <div className="hidden sm:block">
                <ul className="flex flex-wrap mx-auto sm:gap-4 md:gap-8 lg:gap-14 mt-4 px-0">
                    {categories?.map((category) => (
                        <li onClick={(e) => setFilter(category.name.toLowerCase())} key={category.id}>
                            <Link to={`/products/${category.name.toLowerCase()}`}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HeaderUl;