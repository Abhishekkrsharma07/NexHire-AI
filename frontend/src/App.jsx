import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./page/Home";

import Login from "./page/Login";

import Register from "./page/Register";

import Dashboard from "./page/Dashboard";

import CoverLetter from "./page/CoverLetter";

import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {

  return (

    <>

      <Navbar />



      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<Home />}
        />



        <Route
          path="/login"
          element={<Login />}
        />



        <Route
          path="/register"
          element={<Register />}
        />



        {/* Protected Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />



        {/* Protected Cover Letter */}

        <Route
          path="/cover-letter"
          element={
            <ProtectedRoute>
              <CoverLetter />
            </ProtectedRoute>
          }
        />

      </Routes>

    </>

  );

};

export default App;