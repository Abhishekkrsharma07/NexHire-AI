import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      const res = await API.post("/auth/register", formData);

      alert(res.data.message);

      navigate("/login");

    } catch (error) {

      alert(error.response.data.message);

    }

  };


  return (

  <div className="relative min-h-screen overflow-hidden bg-black flex justify-center items-center px-6">

    {/* Background Glow Effects */}

    <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

    <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />



    {/* Animated Grid */}

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />



    {/* Floating Blur Circle */}

    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />



    {/* Register Card */}

    <form
      onSubmit={handleSubmit}
      className="relative z-10 w-full max-w-md backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-10 rounded-[32px]"
    >

      {/* Heading */}

      <div className="text-center mb-10">

        <p className="uppercase tracking-[8px] text-gray-500 text-xs mb-4">

          AI Resume Platform

        </p>



        <h1 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

          Create
          <br />
          Account

        </h1>



        <p className="text-gray-400 mt-5 text-lg leading-8">

          Build resumes that impress recruiters
          and pass ATS systems with AI.

        </p>

      </div>



      {/* Name Input */}

      <div className="mb-5">

        <label className="text-gray-400 text-sm block mb-2 tracking-wide">

          FULL NAME

        </label>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="w-full bg-black/40 border border-white/10 text-white placeholder-gray-500 p-4 rounded-2xl outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
          onChange={handleChange}
        />

      </div>



      {/* Email Input */}

      <div className="mb-5">

        <label className="text-gray-400 text-sm block mb-2 tracking-wide">

          EMAIL ADDRESS

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



      {/* Register Button */}

      <button
        className="relative overflow-hidden w-full py-4 rounded-2xl font-bold text-lg group"
      >

        {/* Animated Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 group-hover:scale-110 transition-all duration-500" />



        {/* Glow */}

        <div className="absolute inset-0 blur-xl bg-cyan-400/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />



        <span className="relative z-10 text-white tracking-wide">

          Register

        </span>

      </button>



      {/* Footer */}

      <p className="text-center text-gray-500 mt-8 text-sm leading-7">

        Experience the future of AI-powered
        resume optimization and job matching.

      </p>

    </form>

  </div>

);
};

export default Register;