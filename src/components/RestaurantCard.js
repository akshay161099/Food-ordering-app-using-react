
import {RES_LOGO} from "../utils/constants";
const RestaurantCard = (resData) => {
    //console.log(resData.resData);
    const {name,cuisines,areaName,avgRating,cloudinaryImageId} = resData.resData;
    return (
        <div className="res-card">
            <img className="res-logo" src={RES_LOGO.concat(cloudinaryImageId)} alt="KFC"></img>
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
}
export default RestaurantCard;