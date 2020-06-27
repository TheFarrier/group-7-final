// src/components/NavBar.js
import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
// NEW - import the Link component
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {/* NEW - add a link to the home and profile pages */}
      {isAuthenticated && (
        <span>
          <Link to="/">  Home</Link>&nbsp;
          <Link to="/profile">  Profile</Link>  
          <Link to="/Vendor">  Become a Vendor</Link>
        </span>
      )}

      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>  Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>  Log out</button>}

    </div>
  );
};

export default NavBar

