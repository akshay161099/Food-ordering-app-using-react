import { useState } from "react";
import ItemsPerCategory from "./ItemsPerCategory";

const FoodItems = (params) =>{
    const foodItems = params?.foodItems?.card?.card;
    const {title} = foodItems;
    const [items,setItems] = useState(false);
    
    const handleClick = ()=>{
        setItems(!items);
    }
    //console.log(params)
    return(
        <div className=" bg-gray-700 text-white p-4 m-4 rounded-md cursor-pointer ">
            <div className="justify-between w-auto flex  text-2xl" onClick={handleClick}> 
                <h2 >{title}</h2>▼
            </div>
            <div className="text-left h-auto w-auto">
                {
                    items && <ItemsPerCategory data={foodItems} />
                }
                
                   
            </div>
            
        </div>
    );
}
export default FoodItems;