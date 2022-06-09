import React from "react";
import "../../css/product.css";
import {GrBasket} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {addItem} from "../../feature/BasketSlice";
import alertify from 'alertifyjs';

const Product = ({data}) => {
    const dispatch = useDispatch();

    const addToBasket = (e) => {
        e.preventDefault();
        let detailobj = {};
        detailobj[data.variant_groups[0].id] = data.variant_groups[0].options[0].id;
        detailobj[data.variant_groups[1].id] = data.variant_groups[1].options[0].id;
        dispatch(addItem({id: data.id, quantity: 1, detail: detailobj}));
        alertify.success('Məhsul uğurla əlavə edildi!');
    };

    return (
        <div className="rounded-md bg-white	 product-card flex justify-center my-3">
            <div className="padding-5 shadow-2xl" key={data.id}>
                <img className="h-64 object-cover mx-auto" src={data.image.url} alt=""/>
                <p className="text-sm margin-t-1 mb-0 font-bold text-gray">{data.name.slice(0, 15)}</p>
                <div className="flex justify-between items-center">
                    <p className="text-lg margin-t-1 mb-0 font-semibold text-gray">{data.price.raw} ₼</p>
                    <GrBasket
                        id="fill"
                        className="fill-green-500 cursor-pointer"
                        onClick={addToBasket}
                    />
                </div>
            </div>
        </div>
    );
};

export default Product;
