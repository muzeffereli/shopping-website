import React from "react";
import PaginatedItems from "../components/pagination/PaginatedItems";
import {useSelector} from "react-redux";
import {Oval} from "react-loading-icons";
import '../css/loading.css';
import FilterProduct from "../components/products-components/FilterProduct";
import "../css/filter.css";

const ProductsPage = ({filter, setFilter}) => {
    const status = useSelector((state) => state.products.status);
    const products = useSelector((state) => state.filtered.products);

    return (
        status === 'loading' ?
            <div className="d-flex justify-content-center items-center min-h-60"><Oval stroke="#00D68F"
                                                                                       className="loading"/>
            </div> :
            <div className="flex md:flex-row flex-col container justify-center md:justify-between"><FilterProduct
                filter={filter} setFilter={setFilter}/>
                <PaginatedItems
                    products={products} itemsPerPage={9}/>
            </div>

    );
};

export default ProductsPage;
