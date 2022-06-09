import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {Accordion} from "react-bootstrap";
import "../../css/product.css";
import {addToFilter} from "../../feature/FilterSlice";

const FilterProduct = ({filter, setFilter}) => {
    const {categoryName} = useParams();
    const categories = useSelector((state) => state.categories.categories);
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(9999);

    const minInputVal = (e) => {
        setMinVal(e.target.value);
    };
    
    const maxInputVal = (e) => {
        if (e.target.value > minVal) {
            setMaxVal(e.target.value);
        } else if (isNaN(e.target.value)) {
            setMaxVal(9999);
        } else if (e.target.value === '') {
            setMaxVal(null);
        }
    };

    function handleChange(name) {
        setFilter(name);
    }

    useEffect(() => {
        setFilter(categoryName);
    }, []);

    useEffect(()=>{
        let filtered = products.filter((product, index)=> minVal <= product?.price?.raw && product?.price?.raw <= maxVal)
        dispatch(addToFilter(filtered))
    }, [minVal, maxVal, products, dispatch])

    return (
        <div className="md:w-3/12 w-full pt-5">
            <Accordion defaultActiveKey="0" open={true}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Brend</Accordion.Header>
                    <Accordion.Body>
                        {categories.map((brands, index) => (
                            <div className="brandsPro" key={index}>
                                <Link to={`/products/${brands.name.toLowerCase()}`}>
                                    <input
                                        id={index}
                                        type="checkbox"
                                        className="cursor-pointer mr-3"
                                        onChange={() => handleChange(brands.name)}
                                        checked={brands.name.toLowerCase() === filter.toLowerCase()}
                                    />
                                    <label className="text-black" htmlFor={index}>{brands.name}</label>
                                </Link>
                            </div>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Qiymət</Accordion.Header>
                    <Accordion.Body>
                        <form onSubmit={(e) => e.preventDefault()} className="priceFilter">
                            <div className="inputParentLower">
                                <input value={minVal} onChange={minInputVal}/>
                                <span>₼</span>
                            </div>
                            <div className="inputParentUpper">
                                <input value={maxVal} onChange={maxInputVal}/>
                                <span>₼</span>
                            </div>
                        </form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FilterProduct;