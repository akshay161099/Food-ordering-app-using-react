import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL, CART_LOGO } from "../utils/constants";

import cartSlice from "../utils/cartSlice";
import appStore from "../utils/appStore";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
const Header = () => {
    const [filterValue,setFilterValue] = useState("Logout");
    const cartItems = useSelector((store) => store.cart.items)
    return(
        <div className="flex justify-between bg-slate-200">
            <div className="">
            <Link to={"./"}><img className="ml-4 w-20 mix-blend-multiply" src={LOGO_URL}></img></Link>
            </div>
            <div className="flex pr-10 px-4">
                <ul className="flex items-center">
                    <li className="px-4">{window.navigator.onLine? <h1 className="text-green-600">Online</h1>:<h1 className="text-red-600">Offline</h1>}
                    </li>
                    <li className="px-4"><Link to={"./"}>Home</Link></li>
                    <li className="px-4"><Link to={"./about"}>About Us</Link></li>
                    <li className="px-4"><Link to={"./contact"}>Contact Us</Link></li>
                    <Link to={"./cart"}><li className="px-4 flex items-center">
                        <img className="w-[50px] mix-blend-multiply" src={CART_LOGO}></img>({cartItems.length})</li></Link>
                    <button className="logout-btn" onClick={()=>{
                        filterValue === "Logout"?setFilterValue("Login"):setFilterValue("Logout");
                    }}>{filterValue}</button>
                    
                </ul>
            </div>
        </div>
    );
}
export default Header;