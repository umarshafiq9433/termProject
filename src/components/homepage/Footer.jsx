import { Grid } from "@material-ui/core";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <Grid container>
      <Grid container justify="center" className="footerCont">
        <h1>SECUREHOPS</h1>
      </Grid>
      <Grid
        container
        justify="center"
        className="footerFoot"
        style={{ backgroundColor: "#ff497c" }}
      >
        <p>© COPYRIGHT 2019 SECUREHOPS</p>
      </Grid>
    </Grid>
  );
}

export default Footer;
