import axios from  "axios"
import { useContext } from "react"
import {AuthContext}   from "../authContext/AuthContext";
function PrivateAxios(){
    const {auth} =  useContext(AuthContext)
    return axios.create({
        baseURL: "http://localhost:7070/api/v1/owner",
        withCredentials:true , 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${auth.accessToken}`
        }
    })
}


export default PrivateAxios;