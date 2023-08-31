import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Offers from "./Offers";
import FoodItems from "./FoodItems";
const Restaurantmenu = () =>{
    const [menuList, setMenuList] = useState(null); 
    useEffect(()=>{fetchMenu();},[])
    const params = useParams();
    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL+params.resId);
        
        const json_data = await data.json();
        //console.log(json_data.data.cards[0].card.card.info);
        
        setMenuList(json_data.data);
    }
    
    
    if(menuList === null){
        return(<Shimmer/>);
    }
    //console.log(menuList?.cards[0]?.card?.card?.info);
    
    const {name,cuisines,avgRating,city,costForTwo} = menuList?.cards[0]?.card?.card?.info;
    const offers = menuList?.cards[1]?.card.card.gridElements.infoWithStyle.offers;
    const foodItems = menuList?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    const categories = foodItems.filter((category) => {
        return category?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'});
    //const {couponCode, description, header, offerLogo} =  
    //console.log(categories)
    return(
        
        <div className="w-6/12 m-auto text-center ">
            <div className="text-xl text-b p-4 ">
                <h1 className="text-xl">{name}</h1>
                <h3>{cuisines.join(", ")}</h3>
            </div>
            <div>
                {
                    
                    categories.map((food)=>{
                        //console.log(food)
                        return(
                            <FoodItems foodItems={food} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Restaurantmenu;