import { useSelector } from "react-redux";
import { RES_LOGO } from "../utils/constants"
import { useState } from "react";
const CartItem = (props) => {
    const[count,setCount] = useState(1);
    const {name, price,imageId,description,id} = props.data.card.info;
    const num = useSelector((store)=>store.cart.items);
    //console.log(num)
    const nums = num.filter((item)=> {
        return item.card.info.id === id;
    })
    
    return(
        <div className="bg-gray-200 mx-auto h-auto w-8/12  m-2 rounded-md flex justify-between items-center ">
            <div className="w-auto px-2 pb-1">
            <h1>{name}</h1>
            <h1>Rs. {price/100}</h1>
            <h1>Added {count}</h1>
            </div>
            <div className="w-2/12"> 
            <img className="rounded-md" src={RES_LOGO+imageId}></img>
            </div>
        </div>
        
    )
}
export default CartItem;