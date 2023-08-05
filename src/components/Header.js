import { LOGO_URL, CART_LOGO } from "../utils/constants";
const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img className="logoImage" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li><img className="cartLogo" src={CART_LOGO}></img></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;