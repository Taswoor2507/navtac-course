import React, { useState, useRef, useEffect } from "react";
import logo from "/logo.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const VerifyAccount = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
const navigate = useNavigate();
  const [timer, setTimer] = useState(0);
  const [resendEnabled, setResendEnabled] = useState(false);

  function handleResendOtp() {
    if (!email) {
      toast.error("Please enter your email");
      setTimer(0);
      return;
    }

      fetch("http://localhost:7070/api/v1/owner/resend-otp", {
             method: "POST",
             headers:{
                "Content-Type": "application/json",
             },
             body: JSON.stringify({ email }),
      })
      .then(async (res)=>{
           const data = await res.json();
           if(!res.ok){
            toast.error(data.message || "Something went wrong");
            return
           }
           return data;
      })
      .then((data)=>{
        if(data?.status === 1){
          toast.success("OTP sent successfully");
          setTimer(60);
          setResendEnabled(false);
        }
      })
      .catch((error)=>{
        toast.error(error.message || "Something went wrong");
      })

  }

  useEffect(() => {
    if (timer === 0) {
      setResendEnabled(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmitOtp = () => {
    const enteredOtp = otp.join(""); //[1,23,4,5]  --> "12345"

    if(enteredOtp.length < 6){
       toast.error("Please enter a valid otp");
       return;
    }
    
// fetch
    fetch("http://localhost:7070/api/v1/owner/verify-otp", {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp: enteredOtp }),
    })
    .then(async(res)=>{
      const data = await res.json();
      if(!res.ok){
        toast.error(data?.message || "Something went wrong");
        return 
      }
      return data;
    })
    .then((data)=>{
      if(data?.status ===1){
        toast.success("OTP verified successfully");
        navigate("/auth/login")
      }
    })
    .catch((error)=>{
      toast.error(error.message || "Something went wrong");
    })

  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1">
        <div>
          <img src={logo} alt="logo" className="w-[200px]" />
        </div>
        <div className="pl-4 pt-4">
          <h2 className="font-semibold text-2xl">Verify your account</h2>
          <p className="text-gray-600 text-sm">
            Please enter the OTP sent to your email
          </p>
        </div>
        <div className="px-4 pt-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-6 border border-gray-300 rounded"
          />
          <div className="flex justify-between gap-2 px-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center text-xl border border-gray-400 rounded focus:outline-blue-500"
              />
            ))}
          </div>

          <div className="pt-4 text-sm text-gray-700 px-4">
            {resendEnabled ? (
              <button
                onClick={handleResendOtp}
                className="text-blue-600 underline hover:text-blue-800"
              >
                Resend OTP
              </button>
            ) : (
              <span>Resend OTP in {timer}s</span>
            )}
          </div>

          <div className="px-4 pt-6">
            <button
              onClick={handleSubmitOtp}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Submit OTP
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="background"
        />
      </div>
    </div>
  );
};

export default VerifyAccount;
