import { useContext, useEffect } from "react";
import { AuthContext } from "../authContext/AuthContext";
import PrivateAxios from "../axios/PrivateAxios";
import useRefresh from "./useRefresh"
function useAxiosPrivate(){
    const {auth} = useContext(AuthContext);
    const axiosPrivate = PrivateAxios()
    const refresh = useRefresh()
    
   useEffect(()=>{
      const requestIntercept = axiosPrivate.interceptors.request.use(
        (config)=>{
            if(!config.headers['Authorization']){
                config.headers['Authorization']  = `Bearer ${auth.accessToken}`;
            }
            return config 
        } ,
        (err)=>{
            return Promise.reject(err)
        }




      ) 

      const responseIntercept  = axiosPrivate.interceptors.response.use(
        (response)=>{return response} , 
        async (err)=>{
                const prevRequest = err?.config
                if(err?.response?.status === 403 && !prevRequest._retry){
                    prevRequest._retry = true;
                    try {
                    const newAccessToken =  await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                     return axiosPrivate(prevRequest);
                    } catch (error) {
                    return Promise.reject(error);
                    }
                }else{
                    return Promise.reject(err);
                }
        }
      )


//   clean up function 
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };




   } ,  [auth , refresh])


  return axiosPrivate
}


export default useAxiosPrivate