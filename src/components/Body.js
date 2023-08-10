import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
const Body = () =>{
    const [resList,setRestaurantList] = useState([]);
    const[resFilterList,setResFilterList] = useState([]);
    const [searchData, setSearchData] = useState("");
    useEffect(()=>{fetchData();},[]);
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265");
        const json = await data.json();
        //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResFilterList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
      
    return (
        <div className="body">
            <div className="header-btn">
            <div className="search">
                <input type="text" className="search-box" value={searchData} 
                    onChange={(e)=>{
                        setSearchData(e.target.value);
                    }}
                />
                <button className="search-btn" onClick={()=>{
                    //setResFilterList(resList);
                    
                    const filteredData = resList.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchData.toLowerCase());
                    })
                    setResFilterList(filteredData);
                    console.log(resList);
                    
                    console.log(resFilterList);
                    
                }}>Search</button>
            </div>
            
                <button className="filter-btn" onClick={()=>{{
                    const newList = resFilterList.filter((res)=> res.info.avgRating>4)
                    setResFilterList(newList);
                }
                    
                }}> Filter the Buttons</button>
            </div>
            <div className="res-container">
                {
                    resFilterList.map((res)=>{
                        return <RestaurantCard resData={res.info} key={res.info.id} />
                    })
                }
                
            </div>
        </div>
    );
}
export default Body;