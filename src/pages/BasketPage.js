import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AiFillDelete} from "react-icons/ai";
import {deleteItem, updateBasket} from "../feature/BasketSlice";
import "../css/basket.css";
import commerce from "../lib/Ecommerce";
import alertify from "alertifyjs";

function BasketPage() {
    let basket = useSelector((state) => state.basket.basket);
    const [cartTotal, setCartTotal] = useState([]);
    const dispatch = useDispatch();
    const deleteBasketItem = (id) => {
        alertify.confirm("Silməyə əminsiniz mi?", function () {
            alertify.error("Uğurla silindi");
            dispatch(deleteItem(id));
        }).setHeader('<span></span> ')
            .set('labels', {ok:'Bəli!', cancel:'Xeyr!'}); ;
    };

    const decrement = (id, quantity) => {
        dispatch(
            updateBasket({
                id: id,
                quantity: quantity - 1,
            })
        );
        alertify.success('Say uğurla artırıldı!');
    };

    const increment = (id, quantity) => {
        dispatch(
            updateBasket({
                id: id,
                quantity: quantity + 1,
            })
        );
        alertify.success('Say uğurla azaldıldı!');
    };

    useEffect(() => {
        commerce.cart.retrieve().then((items) => (setCartTotal(items)));
    }, [cartTotal]);

    return (
        <>
            <div className="container">
                {basket?.length === 0 ? (
                    <div>Sebet bosdur</div>
                ) : (
                    <div>
                        <div className="basket-length">
                            <p> Səbət ( {basket?.length} məhsul )</p>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                {basket?.map((product) => (
                                    <div className="basket-card" key={product.id}>
                                        <div className="row">
                                            {/*<div className="col-md-1 basket-center-flex">*/}
                                            {/*  /!*<input type="checkbox" />*!/*/}
                                            {/*</div>*/}
                                            <div className="col-md-2 basket-center-flex">
                                                <img src={product?.image?.url} alt=""/>
                                            </div>
                                            <div className="col-md-5 basket-product-info">
                                                <p>
                                                    {" "}
                                                    {product?.name},{" "}
                                                    {product?.selected_options[0]?.option_name},{" "}
                                                    {product?.selected_options[1]?.option_name}
                                                </p>
                                                <p>Price : {product?.line_total.formatted} ₼</p>
                                            </div>
                                            <div className="col-md-2 basket-center-flex">
                                                <div className="flex basket-quantity">
                                                    <button
                                                        onClick={() =>
                                                            decrement(product?.id, product?.quantity)
                                                        }
                                                        disabled={product?.quantity === 1}
                                                    >
                                                        -
                                                    </button>
                                                    <span>{product?.quantity}</span>
                                                    <button
                                                        onClick={() =>
                                                            increment(product?.id, product?.quantity)
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-2 basket-center-flex delete">
                                                <AiFillDelete
                                                    onClick={() => deleteBasketItem(product.id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="col-md-3 hidden md:block">
                                <div className="total">
                                    <div className="total-inner first">
                                        <p>Ümumi</p>
                                        <p></p>
                                    </div>
                                    <div className="total-inner">
                                        <p>Məbləğ </p>
                                        <p>{cartTotal?.subtotal?.formatted} ₼</p>
                                    </div>
                                    <div className="total-inner">
                                        <p>Çatdırılma</p>
                                        <p>0</p>
                                    </div>
                                    <div className="total-inner">
                                        <p>Hədiyyə paketi</p>
                                        <p>0</p>
                                    </div>
                                    <div className="total-inner">
                                        <p>Promo kod</p>
                                        <p>0</p>
                                    </div>
                                    <div className="total-line"></div>
                                    <div className="total-inner total-price">
                                        <p>Cəmi</p>
                                        <p>{cartTotal?.subtotal?.formatted} ₼</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            <div className="block  md:hidden">
                <div className="total-inner total-price">
                    <div className="total-sm  flex justify-content-around ">
                        <p className="m-0">Cəmi</p>
                        <p className="m-0"> ₼ {cartTotal?.subtotal?.formatted}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasketPage;
