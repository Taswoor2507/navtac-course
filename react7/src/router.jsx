import { createBrowserRouter } from "react-router-dom"
import PagesLayout from "./PagesLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users"
import NotFound from "./NotFound"
import UserDetail from "./pages/UserDetail"

const router = createBrowserRouter([
  {
    path:"/" ,
    element:<PagesLayout/>,
    children:[
        {
           index:true , 
           element:<Home/>,
        } , 
        {
            path:"about",
            element:<About/>
        } ,
        {
            path:'users',
            element:<Users/>
        }, 
        {
            path:"user/:userid",
            element:<UserDetail/>
        } , 
        {
          path:'*',
          element:<NotFound/>
        }
    ]
  }

])


export default router