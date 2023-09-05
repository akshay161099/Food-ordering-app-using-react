import { useDispatch } from "react-redux";
import {RES_LOGO} from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const RestaurantCard = (resData) => {
    //console.log(resData.resData);
    const {name,cuisines,areaName,avgRating,cloudinaryImageId} = resData.resData;
    
    
    //console.log(resData.resData)
    return (
        <div className=" w-[200px] m-4 p-5 bg-slate-200 hover:bg-slate-300 rounded-lg">
            <div className="flex">
            <img className="rounded-md" src={RES_LOGO.concat(cloudinaryImageId)} alt="KFC"></img>
            </div>    
            <h4 className="font-bold text-lg">{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRating}</h4>
            
        </div>
    );
}
export default RestaurantCard;