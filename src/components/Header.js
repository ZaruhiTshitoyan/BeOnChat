import React from "react";
import { NavLink } from "react-router-dom";

import Button from "@/components/uiLibrary/Button";

const Header = () => {

  return (
    <header>
      <NavLink to="/login">
        <Button>Login</Button>
      </NavLink>
      {/* <button onClick={logout}>Logout</button> */}
    </header>
  );
};

export default Header;
