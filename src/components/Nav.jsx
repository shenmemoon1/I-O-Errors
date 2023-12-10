import { NavLink } from "react-router-dom";
import { farmer } from "../assets";

const Nav = () => {
  return (
    <div className=" w-full h-10">
      <NavLink to="/">
        <img src={farmer} />
      </NavLink>
      <NavLink to="/frontend">FrontEnd</NavLink>
      <NavLink to="/flutter">Flutter</NavLink>
      <NavLink to="/dotnet">DotNet</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
    </div>
  );
};

export default Nav;
