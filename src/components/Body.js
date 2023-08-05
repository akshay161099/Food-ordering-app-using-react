import { useState } from "react";
import { resArr } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
const Body = () =>{
    let [resList,setRestaurantList] = useState(resArr);
    return (
        <div className="body">
            
            <div className="search">
                <h4>Search</h4>
            </div>
            
                <button className="filter-btn" onClick={()=>{{
                    resList = resList.filter((res)=> res.rating>4)
                    setRestaurantList(resList);
                }
                    
                }}> Filter the Buttons</button>
            
            <div className="res-container">
                {
                    resList.map((res)=>{
                        return <RestaurantCard resData={res} key ={res.id} />
                    })
                }
                
            </div>
        </div>
    );
}
export default Body;