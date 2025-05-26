import { useContext } from "react"
import {AuthContext} from "../authContext/AuthContext"
import axios from  "axios"
function useRefresh(){
   const {setAuth} =  useContext(AuthContext)
     return   async function  refresh(){
          try {
            const res= await axios.get("http://localhost:7070/api/v1/owner/refresh" , {withCredentials:true});
   
          if(res?.data?.status === 1){
            setAuth((prev)=>{
                return {
                    ...prev, 
                    accessToken :res?.data?.accessToken
                }
            })

            return res?.data?.accessToken;
          }   
          }catch (error) {
            console.error("Error refreshing token:", error);
            setAuth((prev)=>{
                return {
                    ...prev, 
                    accessToken :null
                }
            })
            return null; 
          }
      }


}


export default useRefresh