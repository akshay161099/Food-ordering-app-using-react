import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Restaurantmenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";

const AppLayout = () =>{
    const [userName, setUserName] = useState("");
    return(<Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setUserName} }>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    );
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<Restaurantmenu/>
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            }
        ],
        
        errorElement:<Error/>
    }
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);