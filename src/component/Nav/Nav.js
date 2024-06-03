import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul className="NavUl">
        <li className="NavItem">
          <NavLink to="/" className="NavLink">
            Home
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about" className="NavLink">
            About
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/orders" className="NavLink">
            Orders
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/support" className="NavLink">
            Support
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
