import React, { useState } from "react";
import logo from "/logo.png";
import OwnerForm from "./OwnerForm";
import SchoolForm from "./SchoolForm";
import toast, { Toaster } from "react-hot-toast";
import OtpInput from "./OtpInput";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    plan: "",
    name: "",
    city: "",
    address: "",
    contactNumber: "",
    type: "",
  });
  const [step, setStep] = useState(1);
  const [loading , setLoading] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      console.log(formData);
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  //steps
  function handleNext() {
    setStep((prev) => prev + 1);
  }

  function handlePrev() {
    setStep((prev) => prev - 1);
  }

  // hanlde register

  function handleSubmit() {
   setLoading(true)
    fetch("http://localhost:7070/api/v1/owner/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status === 409) {
          return toast.error("Email already exists");
        }
        if (!res.ok) {
          return toast.error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 1) {
          setStep(3)
          return toast.success("OTP send to your email please verify");

        }
      })
      .catch(() => {
        toast.error("Registration failed try again ");
      })
      .finally(()=>{
        setLoading(false)
      })
  }

  return (
    <div className="flex h-[105vh]">
      <div className="flex-1  pl-6">
        <div className="flex flex-col gap-4">
          <img src={logo} className="w-[200px]" alt="" />
          <div className="flex  pl-4 flex-col gap-2">
            <h3 className="text-3xl font-semibold">
              Welcome to <br />
              Schoolify lms 👋
            </h3>
            <p className="text-sm text-slate-700">
              Kindly fill in your details below to sign in.
            </p>
          </div>
        </div>
        <div>
          {step === 1 && (
            <OwnerForm
              handleNext={handleNext}
              formData={formData}
              handleChange={handleChange}
            />
          )}
          {step === 2 && (
            <SchoolForm
              handlePrev={handlePrev}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          )}
          {
            step === 3 && <OtpInput  formData={formData}/>
          }
        </div>
      </div>
      <div className="flex-1 bg-red-400">
      <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/full-shot-kids-teacher-sitting-table_23-2149355204.jpg?uid=R81763851&ga=GA1.1.1431774858.1747201417&semt=ais_hybrid&w=740" alt="" />
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default RegisterForm;
