import React, {useEffect} from 'react'
import '../css/background.css'
import HeaderTop from './header-components/HeaderTop'
import HeaderUl from './header-components/HeaderUl'
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../feature/CategorySlice";


const Header = ({filter, setFilter}) => {

    const categories = useSelector((state) => state.categories.categories)
    const status = useSelector(state => state.categories.status)
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCategories());
        }
    }, [dispatch, status])

    return (
        <div className="container">
            <HeaderTop categories={categories}/>
            <HeaderUl categories={categories} setFilter={setFilter}/>
        </div>
    )
}

export default Header