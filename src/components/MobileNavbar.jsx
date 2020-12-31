import {
  AppBar,
  Collapse,
  Grid,
  IconButton,
  List,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function MobileNavbar() {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);

  function menuToggle() {
    setMenu(!menu);
  }

  return (
    <Grid md={6} xs={12} className="mobileMenu">
      <Grid coontainer className={classes.root}>
        <AppBar position="static">
          <Grid container justify="flex-end">
            <Toolbar onClick={menuToggle}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon className="nav-link" />
              </IconButton>
            </Toolbar>
          </Grid>
          <Collapse in={menu}>
            <Grid container justify="center">
              <List>
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </List>
            </Grid>
          </Collapse>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default MobileNavbar;
