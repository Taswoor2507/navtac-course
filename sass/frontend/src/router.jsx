import {createBrowserRouter} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Auth from "./layouts/Auth";
import VerifyAccount from "./pages/VerifyAccount";
import Owner from "./layouts/Owner";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
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
    },
    {
        path:"/owner",
        element:<Owner/>,
        children:[
            {
                element:<ProtectedRoutes/>,
                children:[
                    {
                        path:"dashboard",
                        element:<Dashboard/>
                    }
                ]
            }
        ]
    }
])


export default router