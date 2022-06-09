import React, {useEffect} from 'react';
import {useParams, Navigate} from "react-router-dom";
import commerce from "../lib/Ecommerce";


const AuthPage = () => {
    let params = useParams();
    const id = params.id;

    useEffect(() => {
        commerce.customer.getToken(`${id}`, "save=true");
    }, [id]);

    return (
        <div>
            {(localStorage.getItem("commercejs_customer_token")) && <Navigate to="/" replace={true}/>}
        </div>
    );
};

export default AuthPage;