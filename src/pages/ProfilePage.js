import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import Profilesection from "../components/profile-components/Profilesection";
import {Outlet} from "react-router-dom";
import {addData} from "../feature/PersonalInfo";
import "../css/scss/profilepage.scss";

const ProfilePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const id = localStorage.getItem('commercejs_customer_id');
        const url = new URL(
            `https://api.chec.io/v1/customers/${id}`
        );
        const KEY = process.env.REACT_APP_CHECK_SECRET_API_KEY;
        let headers = {
            "X-Authorization": KEY,
            "Accept": "application/json",
            "Content-Type": "application/json",
        };

        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then(response => response.json())
            .then(json => dispatch(addData(json)));
    }, []);

    return (
        <div className="ProfilePage">
            <div className="center d-flex">
                <Profilesection/>
                <Outlet/>
            </div>
        </div>
    );
};

export default ProfilePage;