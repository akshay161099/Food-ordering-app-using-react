import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img className="logoImage" src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li><img className="cartLogo" src="https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg"></img></li>
                </ul>
            </div>
        </div>
    );
}
const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png" alt="KFC"></img>
            <h4>KFC</h4>
            <h4>30 mins</h4>
            <h4>4.6 starts</h4>
        </div>

    );
}
const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                <h3>Search</h3>
            </div>
            <div className="res-container">
                <RestaurantCard></RestaurantCard>
            </div>
        </div>
    );
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
        
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);