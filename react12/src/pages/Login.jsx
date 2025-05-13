import React, { useContext } from 'react'
import { authContext } from '../AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
   const navigate = useNavigate()
    const {login} = useContext(authContext)

    const {user}  =useContext(authContext)
    if(user){
       return  <Navigate to={"/"}/>
    }

function handleSubmit(e){
    e.preventDefault();
    // formData
   const formdata = new FormData(e.target);
   const username = formdata.get("username")
   const password =  formdata.get("password");

   if(!username || !password){
    return
   }

   login({name:username , password:password})
//    Navigate("/dashboard")
navigate("/dashboard")
   console.log("form submit")
}


  return (
    <div>
        <h1>Login</h1>
        <form action=""  onSubmit={handleSubmit}>
            <input type='name'   name='username' />
            <input type='password'  name='password'  />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login