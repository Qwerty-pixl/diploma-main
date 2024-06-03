import "./Logo.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo"/>
      </NavLink>
    </div>
  );
}