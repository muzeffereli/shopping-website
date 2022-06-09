import React, {useEffect} from 'react'
import DeliveryGuaranty from '../components/DeliveryGuaranty.js'
import Categories from '../components/Categories'
import Companies from '../components/Companies.js'
import ProductList from "../components/products-components/ProductList";
import Banner from "../components/Banner";
import HeaderSlider from "../components/header-components/HeaderSlider";
import {useSelector} from "react-redux";

const HomePage = ({setFilter}) => {
    const products = useSelector((state) => state.products.products)
    useEffect(() => {
        setFilter("hamisi")
    },[])

    let mostSeller = []
    let newProducts = []
    let accessories = []

    products && products.map(product => {
        product.categories.map(cat => {
            if (cat.slug === "popular" && !mostSeller.includes(product)) {
                mostSeller.push(product)
            }
            if (cat.slug === "yeni" && !newProducts.includes(product)) {
                newProducts.push(product)
            }

            if (cat.slug === "aksesuarlar" && !accessories.includes(product)) {
                accessories.push(product)
            }
        })
    })

    return (
        <>
            <div className="App min-h-screen container mx-auto px-20">
                <HeaderSlider/>
                <ProductList data={mostSeller} categoryName={"popular"} category={"Ən çox satılan məhsullar"}/>
                <ProductList data={newProducts} categoryName={"yeni"} category={"Yeni gələn məhsullar"}/>
                <Banner/>
                <ProductList data={accessories} categoryName={"accessories"} category={"Yeni gələn aksessuarlar"} />
                <Categories/>
                <DeliveryGuaranty/>
            </div>
            <Companies/>
        </>
    )
}

export default HomePage