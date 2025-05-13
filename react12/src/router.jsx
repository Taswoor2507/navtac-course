import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/dashboard",
        element:<ProtectedRoute><Dashboard/>z</ProtectedRoute>
    },
    {
        path:"/login",
        element:<Login/>
    }
]);

export default router;