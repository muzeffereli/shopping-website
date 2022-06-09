import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkstatus} from "../feature/RegisterSlice";
import {Link, useNavigate} from "react-router-dom";
import Log from "../images/login.svg";
import "../css/login.css";
import alertify from "alertifyjs";


const RegisterPage = () => {
    const status = useSelector((state) => state.registerStatus.value);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const AddUser = async (e) => {
        e.preventDefault();
        const url = new URL("https://api.chec.io/v1/customers");
        const SecretApiKey = process.env.REACT_APP_CHECK_SECRET_API_KEY;
        let headers = {
            "X-Authorization": SecretApiKey,
            "Content-Type": "application/json",
            Accept: "application/json",
        };

        let body = {
            email: `${e.target[2].value}`,
            phone: `${e.target[3].value}`,
            firstname: `${e.target[0].value}`,
            lastname: `${e.target[1].value}`,
        };

        let customer = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        });

        if(customer?.status === 201){
            dispatch(checkstatus(customer.status));
            alertify.success('Uğurla yaradıldı')
            navigate('/login')
        }
        else{
            dispatch(checkstatus(customer.status));
            alertify.error("İstifadəçi yaradıla bilmədi")
            dispatch(checkstatus(null))
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 login-form center-flex">
                    <h2 className="login-title">Qeydiyyat</h2>
                    <form onSubmit={(e) => AddUser(e)}>
                        <div className="input-parent">
                            <label htmlFor="name">Ad</label>
                            <input id="name" type="text" placeholder="Adinizi daxil edin"/>
                        </div>
                        <div className="input-parent">
                            <label htmlFor="surname">Soyad</label>
                            <input
                                id="surname"
                                type="text"
                                placeholder="Soyadinizi daxil edin"
                            />
                        </div>
                        <div className="input-parent">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="Email"/>
                        </div>
                        <div className="input-parent">
                            <label htmlFor="phone">Mobil Nomre</label>
                            <input id="phone" type="text" placeholder="Nomre"/>
                        </div>
                        <div className="checkbox-parent">
                            <input id="phone" type="checkbox" placeholder="Nomre"/>
                            <label htmlFor="phone">Istifadeci sertleri ile raziyam</label>
                        </div>
                        <button type="submit" className="log-button">
                            Qeydiyyat
                        </button>
                    </form>
                </div>
                <div className="col-lg-6 col-md-6 center-flex">
                    <img src={Log} alt=""/>
                    <div className="d-flex gap-10 justify-content-center mt-10">
                        <p>Artiq hesabiniz var?</p>
                        <Link to="/login" className="linkto">
                            Daxil olun
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
