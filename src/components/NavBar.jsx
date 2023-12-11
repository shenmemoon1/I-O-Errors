import { useState } from "react";
import { NavLink } from "react-router-dom";
import { farmer, menu } from "../assets";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-6 py-3 ${isActive ? "text-blue-500" : "text-black"}`
        }
      >
        <img src={farmer} alt="Farmer" className="w-6 h-6" />
      </NavLink>

      {/* 移动端菜单 */}
      <div
        className={`lg:hidden absolute right-2 border px-3 py-2 rounded-lg top-16 bg-gradient-to-bl from-indigo-400 to-indigo-200 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <NavLink to="/frontend" className="block px-6 py-3">
          FrontEnd
        </NavLink>
        <NavLink to="/flutter" className="block px-6 py-3">
          Flutter
        </NavLink>
        <NavLink to="/dotnet" className="block px-6 py-3">
          DotNet
        </NavLink>
        <NavLink to="/about" className="block px-6 py-3">
          About
        </NavLink>
        <NavLink
          to="/login"
          className="block px-6 py-2 mt-3 rounded-full shadow-md text-white bg-gradient-to-r from-purple-500 to-indigo-500"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="block px-6 py-2 mt-2 rounded-full shadow-md border-solid border-2 border-indigo-500 text-indigo-500"
        >
          SignUp
        </NavLink>
      </div>

      {/* 大屏幕上的导航 */}
      <div className="justify-center align-middle hidden lg:flex">
        <NavLink
          to="/frontend"
          className={({ isActive }) =>
            `px-6 py-3 ${isActive ? "text-blue-500 font-bold" : "text-black"}`
          }
        >
          FrontEnd
        </NavLink>
        <NavLink
          to="/flutter"
          className={({ isActive }) =>
            `px-6 py-3 ${isActive ? "text-blue-500 font-bold" : "text-black"}`
          }
        >
          Flutter
        </NavLink>
        <NavLink
          to="/dotnet"
          className={({ isActive }) =>
            `px-6 py-3 ${isActive ? "text-blue-500 font-bold" : "text-black"}`
          }
        >
          DotNet
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-6 py-3 ${isActive ? "text-blue-500 font-bold" : "text-black"}`
          }
        >
          About
        </NavLink>
      </div>

      {/* 大屏幕上的登录和注册 */}
      <div className="justify-center align-middle gap-3 hidden lg:flex">
        <NavLink
          to="/login"
          className="relative flex items-center justify-center px-6 py-2 rounded-full shadow-md text-white bg-gradient-to-r from-purple-500 to-indigo-500"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="relative flex items-center justify-center px-6 py-2 rounded-full shadow-md border-solid border-2 border-indigo-500 text-indigo-500"
        >
          SignUp
        </NavLink>
      </div>

      {/* 菜单图标 */}
      <div
        className="rounded-sm shadow-md px-3 py-2 w-12 lg:hidden"
        onClick={toggleMenu}
      >
        <img src={menu} alt="menu" />
      </div>
    </header>
  );
};

export default Navbar;
