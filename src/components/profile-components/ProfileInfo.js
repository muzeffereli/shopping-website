import React, {useEffect, useState} from 'react';
import {ImPencil2} from 'react-icons/im';
import {FaRegSave} from 'react-icons/fa';
import {useSelector} from "react-redux";
import "../../css/scss/profileinfo.scss";

const ProfileInfo = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [hide, setHide] = useState(false);
    const data = useSelector((state) => state.personalInfo.value);

    const [firstName, setFirstName] = useState(data?.firstname);
    const [lastName, setLastName] = useState(data?.lastname);
    const [email, setEmail] = useState(data?.email);
    const [phone, setPhone] = useState(data?.phone);

    useEffect(() => {
        setFirstName(data?.firstname);
        setLastName(data?.lastname);
        setEmail(data?.email);
        setPhone(data?.phone);
    }, [data]);

    const edit = (e) => {
        e.preventDefault();
        setIsDisabled(false);
        setHide(true);
    };
    const handleChangeName = (e) => {
        setFirstName(e.target.value);
    };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const uptadeValues = () => {
        const url = new URL(
            `https://api.chec.io/v1/customers/${data?.id}`
        );
        const KEY = process.env.REACT_APP_CHECK_SECRET_API_KEY;
        let headers = {

            "X-Authorization": KEY,
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        let body = {
            "email": email,
            "phone": phone,
            "firstname": firstName,
            "lastname": lastName,
            "external_id": null
        };

        fetch(url, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(json => console.log(json));
    };
    return (
        <div className="cont">
            <h2>Şəxsi məlumatlar</h2>

            <div className="p-infos">
                <form onSubmit={uptadeValues}>
                    <div className="names">
                        <div className="name">
                            <label htmlFor="name">Ad</label>
                            <input disabled={isDisabled} onChange={handleChangeName} value={firstName} id="name"
                                   type="text"/>
                        </div>

                        <div className="surname">
                            <label htmlFor="surname">Soyad</label>
                            <input disabled={isDisabled} onChange={handleChangeLastName} value={lastName} id="surname"
                                   type="text"/>
                        </div>

                    </div>
                    <div className="contact">
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input disabled={isDisabled} onChange={handleChangeEmail} value={email} id="email"
                                   type="email"/>
                        </div>

                        <div className="phone">
                            <label htmlFor="Phone">Telefon</label>
                            <input disabled={isDisabled} onChange={handleChangePhone} value={phone} id="Phone"
                                   type="text"/>
                        </div>

                    </div>
                    <div className="btns">
                        <button onClick={(e) => edit(e)} className={hide ? 'd-none' : 'edit'}><ImPencil2
                            className="me-2"/> Məlumatları yenilə
                        </button>
                        <button type="submit" className={hide ? 'submit' : 'd-none '}><FaRegSave
                            className="me-2"/> Məlumatları Yadda
                            saxla
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileInfo;