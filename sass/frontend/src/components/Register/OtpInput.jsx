
import React, { useRef, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const OtpInput = ({formData}) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);
  const inputRefs = useRef([]);
  const navigate =  useNavigate()

  useEffect(() => {
    if (timer === 0) {
      setResendEnabled(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
//clean up
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (!value) return;

    const newOtp = [...otp]; //["" ,""]
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join('');
    // fetch
    fetch("http://localhost:7070/api/v1/owner/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        otp: finalOtp,
        email:formData.email
      }),
    })
    .then(async (res)=>{
         const data = await res.json();
         if(!res.ok){
            return toast.error(data.message);
         }
       return data
    })
    .then((data)=>{
        if(data.status === 1){
          navigate("/auth/login") 
          return toast.success("OTP verified successfully");

        }
    })
    .catch(()=>{
      toast.error("Something went wrong");
    })
  };

  const handleResend = () => {
    setOtp(new Array(6).fill(''));
    setTimer(60);
    setResendEnabled(false);
    
    // 👉 Add your resend API logic here
    fetch("http://localhost:7070/api/v1/owner/resend-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: formData.email,
      }),
    })
    .then(async (res)=>{
        const data = await res.json();
        if(data.status === 0){
           throw new Error(data.message);
        }
        if(!res.ok){
           return toast.error(data.message);
        }
      return data
    })
    .then((data)=>{
        if(data.status === 1){
           return toast.success("OTP send to your email please verify");
        }
    })
    .catch((err)=>{
      toast.error(err.message || "Something went wrong");
    })






  };

  return (
    <div className="flex flex-col mt-4 gap-4 p-4">
      <div className="flex gap-2 justify-between">
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

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Verify OTP
      </button>

      <div className="text-gray-600">
        {resendEnabled ? (
          <button
            onClick={handleResend}
            className="text-blue-600 underline hover:text-blue-800"
          >
            Resend OTP
          </button>
        ) : (
          <span>Resend OTP in {timer}s</span>
        )}
      </div>
    </div>
  );
};

export default OtpInput;