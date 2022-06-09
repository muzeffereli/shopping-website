import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import {Link, useParams} from "react-router-dom";
import Product from "../products-components/Product";
import "../../css/product.css";

function Items({currentItems}) {
    const {categoryName} = useParams();
    return (
        <>
            {currentItems &&
            currentItems?.map((product, index) => (
                <Link className = "text-decoration-none text-black" to={`/products/${categoryName}/${product.id}`}>
                    <div className="max-w-xs">
                        <Product key={index} data={product}/>
                    </div>
                </Link>
            ))}
        </>
    );
}

const PaginatedItems = ({products, itemsPerPage}) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [products,itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="d-flex flex-column  w-full	">
            <div className="md:grid grid-cols-2 gap-4 md:grid-cols-3 min-h-screen m-auto">
            <Items currentItems={currentItems}/>
            </div>
            <ReactPaginate
                className="paginationDots"
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
            />

        </div>
    );
};

export default PaginatedItems;