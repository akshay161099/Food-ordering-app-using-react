import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () =>{
    const [resList,setRestaurantList] = useState([]);
    const[resFilterList,setResFilterList] = useState([]);
    const [searchData, setSearchData] = useState("");
    useEffect(()=>{fetchData();},[]);
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265");
        const json = await data.json();
        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResFilterList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(resFilterList.length === 0){
        return(<Shimmer/>);
    }
    return (
        resFilterList.length === 0? <Shimmer/>:
        <div className="m-5">
            <div className="flex">
            <div className="">
                <input type="text" className=" px-2 border-[2px] border-solid border-black rounded-md" value={searchData} 
                    onChange={(e)=>{
                        setSearchData(e.target.value);
                    }}
                />
                <button className="px-4 py-0.5 mx-4 bg-green-400 rounded-md" onClick={()=>{
                    //setResFilterList(resList);
                    const filteredData = resList.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchData.toLowerCase());
                    })
                    setResFilterList(filteredData);
                }}>Search</button>
            </div>
            
                <button className="px-4 py-0.5 mx-4 bg-green-400 rounded-md" onClick={()=>{{
                    const newList = resFilterList.filter((res)=> res?.info?.avgRating>4)
                    setResFilterList(newList);
                }
                    
                }}> Filter the Buttons</button>
            </div>
            <div className="flex flex-wrap px-5">
                {
                    resFilterList.map((res)=>{
                        return <Link key={res?.info?.id} to={"./restaurants/"+res?.info?.id} className="linkTag"><RestaurantCard resData={res.info}  /></Link>
                    })
                }
                
            </div>
        </div>
    );
}
export default Body;