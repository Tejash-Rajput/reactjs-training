import React from "react";
import { NavLink } from "react-router-dom";
/**
 * Navbar Component - Navigation bar with links to different pages.
 * @component
 * @returns {JSX.Element} The Navbar component.
 */
const Navbar = () => {
  return (
    <div className="navbar">

        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "no";
          }}
          to="home"
        >
          home
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "no";
          }}
          to="about"
        >
          about
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "no";
          }}
          to="contact"
        >
          contact
        </NavLink>

    </div>
  );
};

export default Navbar;
