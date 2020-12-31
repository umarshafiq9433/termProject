import { Grid } from "@material-ui/core";
import React from "react";
import logo from "../../images/logoSecurehops.png";
function Logo() {
  return (
    <Grid item md={2} xs={6}>
      <Grid container justify="flex-start ">
        <img src={logo} alt="Securehops.com" title="Securehops" width="40%" />
      </Grid>
    </Grid>
  );
}

export default Logo;
