import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  // Check token
  const token = localStorage.getItem("token");


  // Logout Function
  const handleLogout = () => {

    localStorage.removeItem("token");

    alert("Logged Out");

    navigate("/login");

  };


  return (

    <nav className="sticky top-0 z-50 bg-black/100 backdrop-blur-3xl border-b border-white/10 shadow-2xl">

  <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

    {/* Logo */}

    <Link
      to="/"
      className="text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
    >
      ResumeAI
    </Link>



    {/* Nav Links */}

    <div className="flex gap-10 items-center text-lg font-semibold text-white">

      <Link
        to="/"
        className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
      >
        Home
      </Link>


      {/* If User NOT Logged In */}

      {
        !token && (

          <>
            <Link
              to="/login"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Register
            </Link>
          </>

        )
      }


      {/* If User Logged In */}

      {
        token && (

          <>
            <Link
              to="/dashboard"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              ATS Analyzer
            </Link>
 
 
            <Link
              to="/cover-letter"
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Cover Letter
            </Link>


            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/40"
            >
              Logout
            </button>
          </>

        )
      }

    </div>

  </div>

</nav>
  );
};

export default Navbar;