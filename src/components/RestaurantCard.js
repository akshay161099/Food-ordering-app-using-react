
import {RES_LOGO} from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,id,cuisines,deliveryTime,rating} = resData;
    return (
        <div className="res-card">
            <img className="res-logo" src={RES_LOGO} alt="KFC"></img>
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{rating}</h4>
        </div>
    );
}
export default RestaurantCard;