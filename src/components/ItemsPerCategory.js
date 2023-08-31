import { RES_LOGO } from "../utils/constants";
const ItemsPerCategory = (params) =>{
    console.log(params.data.itemCards);
    const items = params?.data?.itemCards;
    return(
        <div>
            {
                items.map((item) => (
                    
                    <div className=" justify-between w-auto h-auto border-b border-black h-10 p-3 m-3 shadow-md text-black flex" >
                        <div>
                        <h2 className="text-xl">{item.card.info.name}</h2>
                        <h2>Rs. {item.card.info.price}</h2>
                        <h3 className="text-sm text-gray-400">{item.card.info.description}</h3>
                        </div>
                        <div className="w-auto ">
                            <img className="rounded-md w-40"  src={RES_LOGO + item.card.info.imageId}></img>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
    
    
}
export default ItemsPerCategory;