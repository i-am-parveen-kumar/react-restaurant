import "../scss/Header.scss";
import logo from "../assests/images/logo-2.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="header-container">
      <div className="logo-container" alt="website-logo">
        <img src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};
