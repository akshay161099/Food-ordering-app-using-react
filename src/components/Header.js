import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL, CART_LOGO } from "../utils/constants";
import User from "./User";
const Header = () => {
    const [filterValue,setFilterValue] = useState("Logout");
    return(
        <div className="flex justify-between bg-slate-200">
            <div className="">
            <Link to={"./"}><img className="ml-4 w-20 mix-blend-multiply" src={LOGO_URL}></img></Link>
            </div>
            <div className="flex pr-10 px-4">
                <ul className="flex items-center">
                    <li className="px-4"><Link to={"./"}>Home</Link></li>
                    <li className="px-4"><Link to={"./about"}>About Us</Link></li>
                    <li className="px-4"><Link to={"./contact"}>Contact Us</Link></li>
                    <li className="px-4"><img className="w-[50px] mix-blend-multiply" src={CART_LOGO}></img></li>
                    <button className="logout-btn" onClick={()=>{
                        filterValue === "Logout"?setFilterValue("Login"):setFilterValue("Logout");
                    }}>{filterValue}</button>
                    
                </ul>
            </div>
        </div>
    );
}
export default Header;