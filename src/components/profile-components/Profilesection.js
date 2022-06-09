import commerce from "../../lib/Ecommerce";
import {Link} from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";
import {MdOutlineExitToApp} from "react-icons/md";
import "../../css/scss/profilesection.scss";

const linkStyle = {
    textDecoration: "none",
    color: '#4F4F4F'
};
const linkStyle2 = {
    textDecoration: "none",
    color: '#4F4F4F',
    margin: '1rem 0',
    display: 'block'
};
const Profilesection = () => {

    async function logout() {
        commerce.customer.logout();
        window.location = '/';
    }

    return (
        <div className="ProfileSection">
            <h2 className="ProfileSection-text">Profilim</h2>
            <ul className="ProfileSection-list">

                <Link to="info" style={linkStyle}>
                    <li><AiOutlineUser className="list-icon"/> Şəxsi məlumatlar</li>
                </Link>
                <li onClick={logout}><MdOutlineExitToApp className="list-icon"/> Çıxış</li>
            </ul>
        </div>
    );
};

export default Profilesection;