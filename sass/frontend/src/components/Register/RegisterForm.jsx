import React, { useState } from 'react'
import logo from "../../../public/logo.png"
import OwnerForm from './OwnerForm'
import SchoolForm from './SchoolForm'
const RegisterForm = () => {
  const [formData , setFormData] =  useState({
    fullName:"",
    email:"",
    password:"",
    phone:"",
    plan:"",
    name:"",
    city:"",
    address:"",
    contactNumber:"",
    type:""
  })
  const [step , setStep] = useState(1)

   
function handleChange(e){
    const {name , value} = e.target
    setFormData((prev)=>{
      console.log(formData)
       return {
        ...prev , [name]:value
       }
    })
}

//steps
function handleNext(){
    setStep((prev)=>prev+1)
}

function handlePrev(){
  setStep((prev)=>prev-1)
}


// hanlde register 

function handleSubmit(){
      fetch("http://localhost:7070/api/v1/owner/register" , {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials:"include",
        body:JSON.stringify(formData)
      }).then((res)=>{
        console.log(res)
        return res.json()
      })
      .then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })
}







  return (
    <div>
        <div className='flex flex-col gap-4'>
            <img src={logo}  className='w-[200px]'   alt="" />
            <div className='flex  pl-4 flex-col gap-2'>
               <h3 className='text-3xl font-semibold'>Welcome to <br/>
               Schoolify lms 👋</h3>
               <p className='text-sm text-slate-700'>Kindly fill in your details below to sign in.</p>
            </div>
        </div>
        <div>
            {step === 1 && <OwnerForm  handleNext={handleNext}  formData={formData}    handleChange={handleChange}/>}
            {step === 2 && <SchoolForm   handlePrev={handlePrev}  formData={formData}  handleChange={handleChange}  handleSubmit={handleSubmit}/>}
        </div>
    </div>
  )
}

export default RegisterForm