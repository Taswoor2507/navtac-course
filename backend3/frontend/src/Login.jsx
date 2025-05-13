import React from "react";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  // form
  function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    let email = formdata.get("email");
    let password = formdata.get("password");

    //   check
    if (!password || !email) {
      alert("All fields are required");
      return;
    }
    const user = { email, password };
    fetch("http://localhost:8080/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast.success(data.message)
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" />
        <input type="password" name="password" id="" />
        <button>login</button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
