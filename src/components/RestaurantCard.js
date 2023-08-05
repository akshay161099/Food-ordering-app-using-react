
import {RES_LOGO} from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,id,cuisines,deliveryTime,rating} = resData;
    return (
        <div className="res-card">
            <img className="res-logo" src={RES_LOGO} alt="KFC"></img>
            <h4>{name}hello</h4>
            <h4>{cuisines}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{rating}</h4>
        </div>

    );
}
export default RestaurantCard;