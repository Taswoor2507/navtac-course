import {createBrowserRouter} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Auth from "./layouts/Auth";
import VerifyAccount from "./pages/VerifyAccount";
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
            }, 
            {
                path:"verify",
                element:<VerifyAccount/>
            }
        ]
    }
])


export default router