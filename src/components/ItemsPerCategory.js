import { RES_LOGO } from "../utils/constants";
const ItemsPerCategory = (params) =>{
    //console.log(params.data.itemCards);
    const items = params?.data?.itemCards;
    return(
        <div>
            {
                items.map((item) => (
                    
                    <div className="bg-gray-200 justify-between w-auto h-auto border-b border-black h-10 p-3 m-3 shadow-sm text-black flex" >
                        <div>
                        <h2 className="text-xl">{item.card.info.name}</h2>
                        <h2>Rs. {item.card.info.price}</h2>
                        <h3 className="text-sm text-gray-800">{item.card.info.description}</h3>
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