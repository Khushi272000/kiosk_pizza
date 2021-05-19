import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./NavBarElement";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Shopizza</NavLink>
      <NavIcon>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
};

export default Navbar;
