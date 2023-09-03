import { useState } from "react";
import ItemsPerCategory from "./ItemsPerCategory";
const FoodItems = ({foodItems,showIndex,setItems}) =>{
    const dataItems = foodItems?.card?.card;
    const {title} = dataItems;
    const [isClicked,setIsClicked] = useState(false);
    const handleClick = ()=>{
        setIsClicked(!isClicked);
        setItems();
        console.log(showIndex);
    };
    //console.log(params)
    return(
        <div className=" bg-gray-200 text-black p-4 m-4 rounded-md cursor-pointer shadow-md">
            <div className="justify-between w-auto flex  text-2xl " onClick={handleClick}> 
                <h2 >{title + " ("+dataItems.itemCards.length+")"}</h2>▼
            </div>
            <div className="text-left h-auto w-auto">
                {
                    isClicked && showIndex && <ItemsPerCategory data={dataItems} /> 
                }
                
                   
            </div>
            
        </div>
    );
}
export default FoodItems;