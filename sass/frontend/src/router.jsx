import {createBrowserRouter} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Auth from "./layouts/Auth";
const router =  createBrowserRouter([
    {
        path:"/auth",
        element:<Auth/>,
        children:[
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<Login/>
            }
        ]
    }
])


export default router