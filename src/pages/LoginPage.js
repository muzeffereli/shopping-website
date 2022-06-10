import React from "react";
import { Link } from "react-router-dom";
import Log from "../images/login.svg";
import "../css/login.css";
import alertify from "alertifyjs";
import {useNavigate} from 'react-router-dom';

const RegisterPage = () => {
  let navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    const url = new URL("https://api.chec.io/v1/customers/email-token");
    let headers = {
      "X-Authorization": process.env.REACT_APP_CHECK_PUBLIC_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    let body = {
      email: `${e.target[0].value}`,
      base_url: "https://shopping-website-three.vercel.app/login",
    };

    await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
        .then(el => {
          alertify.success("Mailinizə daxil olma linki göndərildi!")
          navigate('/')
        });


  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 login-form center-flex">
          <h2 className="login-title">Daxil ol</h2>
          <form onSubmit={(e) => Login(e)}>
            <div className="input-parent">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" placeholder="Email" />
            </div>
            <button type="submit" className="log-button">
              Giris
            </button>
          </form>
        </div>
        <div className="col-lg-6 col-md-6 center-flex">
          <img src={Log} alt="" />
          <div className="d-flex gap-10 justify-content-center mt-10">
            <p>Hesabiniz yoxdur?</p>
            <Link to="/register" className="linkto">Qeydiyyatdan kec </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
