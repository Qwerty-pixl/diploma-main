import { NavLink } from "react-router-dom";
import "./NavLast.css";

export default function NavTwo(props) {
  const handleNavigationClick = () => {
    if (props.onNavigationClick) {
      props.onNavigationClick();
    }
  };

  return (
    <div className="NavTwo">
      <nav className="topbar-last-nav">
        <ul>
          <li className="NavItem" onClick={handleNavigationClick}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="NavItem" onClick={handleNavigationClick}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="NavItem" onClick={handleNavigationClick}>
            <NavLink to="/orders">Orders</NavLink>
          </li>
          <li className="NavItem" onClick={handleNavigationClick}>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}