import { NavLink } from "react-router-dom";
import { farmer } from "../assets";

const Nav = () => {
  return (
    <header className="header">
      <div className="flex justify-center align-middle">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-6 py-3 ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          <img src={farmer} className="w-6 h-6" />
        </NavLink>
        <NavLink
          to="/frontend"
          className={({ isActive }) =>
            `px-6 py-3 ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          FrontEnd
        </NavLink>
        <NavLink
          to="/flutter"
          className={({ isActive }) =>
            `px-6 py-3 ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          Flutter
        </NavLink>
        <NavLink
          to="/dotnet"
          className={({ isActive }) =>
            `px-6 py-3 ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          DotNet
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-6 py-3 ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          About
        </NavLink>
      </div>
      <div className="flex justify-center align-middle gap-3">
        <NavLink
          to="/login"
          className="relative flex items-center justify-center px-6 py-2 rounded-full shadow-md text-white bg-gradient-to-r from-purple-500 to-indigo-500"
        >
          <span className="absolute w-full h-full top-0 left-0 border-2 border-gradient rounded-full"></span>
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="relative flex items-center justify-center px-6 py-2 rounded-full shadow-md border-solid border-2 border-indigo-500 text-indigo-500"
        >
          SignUp
        </NavLink>
      </div>
    </header>
  );
};

export default Nav;
