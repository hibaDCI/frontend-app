import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import axios from "axios";

function Login() {
  const [msg, setMsg] = useState("You need to login ");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      const response = await axios.post("/api/auth/login", data);
      console.log(response.data);
      setMsg(response.data.msg);

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container d-flex justify-content-center flex-column text-info align-items-center ">
      <div>{msg}</div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required={true}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required={true}
        />
        <button type="submit" className="btn btn-info">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
