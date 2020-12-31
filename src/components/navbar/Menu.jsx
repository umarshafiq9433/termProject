import { Grid, List } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Grid md={6} className="menu" justify="center">
      <List className="navbar">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </List>
    </Grid>
  );
}

export default Menu;
