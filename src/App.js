import HomePage from "./pages/HomePage"
import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import ProductDetailsPage from "./pages/ProductDetailsPage";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./feature/ProductSlice";
import BasketPage from "./pages/BasketPage";
import {fetchBasket} from "./feature/BasketSlice";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import commerce from "./lib/Ecommerce";
import ProfileInfo from "./components/profile-components/ProfileInfo";
import ProfilePage from "./pages/ProfilePage";

function App() {
    const [filterName, setFilterName] = useState("hamisi");
    const dispatch = useDispatch();
    const cartStatus = useSelector((state) => state.basket.status)

    useEffect(() => {
        dispatch(fetchProducts(filterName));
    }, [dispatch, filterName])

    useEffect(() => {
        if (cartStatus === "idle") {
            dispatch(fetchBasket());
        }
    }, [cartStatus, dispatch])

    return (
        <div>
            <Header filter={filterName} setFilter={setFilterName}/>
            <Outlet/>
            <Routes>
                <Route index element={<HomePage filter={filterName} setFilter={setFilterName}/>}/>
                <Route path="/products/:categoryName"
                       element={<ProductsPage filter={filterName} setFilter={setFilterName}/>}/>
                <Route path="/products/:categoryName/:productId" element={<ProductDetailsPage/>}/>
                <Route path="/basket" element={<BasketPage/>}/>
                {!commerce.customer.isLoggedIn() && <Route path="/login" element={<LoginPage/>}/>}
                <Route path="/login/:id" element={<AuthPage/>}/>
                {!commerce.customer.isLoggedIn() && <Route path="/register" element={<RegisterPage/>}/>}
                {commerce.customer.isLoggedIn() &&

                    <Route path="profile" element={<ProfilePage/>}>
                        <Route index element={<Navigate replace to="/profile/info"/>}/>
                        <Route path='info' element={<ProfileInfo/>}/>
                    </Route>}

                <Route path="*" element={<NotFoundPage/>}/>


            </Routes>
            <Footer/>
        </div>
    );
}

export default App;