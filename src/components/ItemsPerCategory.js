import { RES_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemsPerCategory = (params) =>{
    //console.log(params.data.itemCards);
    const items = params?.data?.itemCards;
    const dispather = useDispatch();
    console.log("hello")
    console.log(params.data.itemCards)
    const addCartItem = ()=>(
        dispather(addItem())
        
    )
    return(
        <div>
            {
                items.map((item) => (
                    
                    <div className="bg-gray-200 justify-between  border-b border-black p-3 m-3 shadow-sm text-black flex" >
                        <div>
                        <h2 className="text-xl">{item.card.info.name}</h2>
                        <h2>Rs. {item.card.info.price/100}</h2>
                        <h3 className="text-sm text-gray-800">{item.card.info.description}</h3>
                        </div>
                        <div className="w-3/12 flex ">
                            <img className=" rounded-md w-auto"  src={RES_LOGO + item.card.info.imageId}></img>
                            <div className="bg-green-400 p-1 float-right  rounded-md text-center absolute hover:scale-110" onClick={()=>{
                                dispather(addItem(item))
                            }}>Add+</div> 
            
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
    
    
}
export default ItemsPerCategory;