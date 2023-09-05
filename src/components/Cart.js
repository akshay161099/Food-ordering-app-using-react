import { useSelector } from "react-redux"
import CartItem from "./CartItem"
const Cart = () =>{
    const selectorItems = useSelector((item) => item.cart.items)    
    console.log(selectorItems);
    return(
        <div className="p-4 m-4 w-full h-screen ">
            <h1 className="text-2xl">Cart</h1>
            <div >
                {
                    selectorItems.map((cartItem)=>{
                        return <CartItem key={cartItem.id} data={cartItem}></CartItem>
                    })
                }
            </div>
            
        </div>
    );
}
export default Cart;