import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/auth/login", formData);

      alert(res.data.message);

      // Save token
      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (error) {

      alert(error.response.data.message);

    }

  };


  return (

    <div className="relative min-h-screen overflow-hidden bg-black flex justify-center items-center px-6">

  {/* Background Glow Effects */}

  <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full" />

  <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full" />



  {/* Animated Grid */}

  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />



  {/* Login Card */}

  <form
    onSubmit={handleSubmit}
    className="relative z-10 w-full max-w-md backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-10 rounded-[30px]"
  >

    {/* Heading */}

    <div className="text-center mb-10">

      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

        Welcome Back

      </h1>

      <p className="text-gray-400 mt-4 text-lg">

        Login to continue your AI journey

      </p>

    </div>



    {/* Email Input */}

    <div className="mb-6">

      <label className="text-gray-400 text-sm block mb-2 tracking-wide">

        EMAIL

      </label>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        className="w-full bg-black/40 border border-white/10 text-white placeholder-gray-500 p-4 rounded-2xl outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
        onChange={handleChange}
      />

    </div>



    {/* Password Input */}

    <div className="mb-8">

      <label className="text-gray-400 text-sm block mb-2 tracking-wide">

        PASSWORD

      </label>

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        className="w-full bg-black/40 border border-white/10 text-white placeholder-gray-500 p-4 rounded-2xl outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
        onChange={handleChange}
      />

    </div>



    {/* Login Button */}

    <button
      className="relative overflow-hidden w-full py-4 rounded-2xl font-bold text-lg group"
    >

      {/* Animated Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 group-hover:scale-110 transition-all duration-500" />



      {/* Glow */}

      <div className="absolute inset-0 blur-xl bg-cyan-400/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />



      <span className="relative z-10 text-white tracking-wide">

        Login

      </span>

    </button>



    {/* Footer Text */}

    <p className="text-center text-gray-500 mt-8">

      Powered by AI Resume Intelligence

    </p>

  </form>

</div>

  );
};

export default Login;