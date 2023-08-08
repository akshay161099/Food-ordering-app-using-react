import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
const Body = () =>{
    let [resList,setRestaurantList] = useState([]);
    useEffect(()=>{fetchData();},[]);
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265");
        const json = await data.json();
        console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
                   
    return (
        <div className="body">
            
            <div className="search">
                <h4>Search</h4>
            </div>
            
                <button className="filter-btn" onClick={()=>{{
                    resList = resList.filter((res)=> res.info.avgRating>4)
                    setRestaurantList(resList);
                }
                    
                }}> Filter the Buttons</button>
            
            <div className="res-container">
                {
                    resList.map((res)=>{
                        return <RestaurantCard resData={res.info} key={res.info.id} />
                    })
                }
                
            </div>
        </div>
    );
}
export default Body;