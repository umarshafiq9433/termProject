import { Grid } from "@material-ui/core";
import Menu from "./navbar/Menu";
import React from "react";
import "./navbar.css";
import Logo from "./navbar/Logo";
import Contact from "./navbar/Contact";
function Navbar() {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ backgroundColor: "#f4f4f5" }}
    >
      <Logo />
      <Menu />
      <Contact />
    </Grid>
  );
}

export default Navbar;
