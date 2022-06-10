import React from 'react';
import {BsFillBasketFill} from "react-icons/bs";
import "../css/emptybasket.css";
import {Link} from "react-router-dom";

const EmptyBasket = () => {
    return (
        <div className="mt-3">
            <div>Səbət boşdur</div>
            <div className="basket flex flex-column">
                <BsFillBasketFill className="icon"/>
                <Link className="text-decoration-none " to="/products/hamisi">
                    <button className="linkbasket">
                        Alış verişə davam edin
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EmptyBasket;