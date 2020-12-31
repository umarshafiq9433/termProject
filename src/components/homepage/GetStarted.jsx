import { Button, Grid } from "@material-ui/core";
import React from "react";
import "./GetStarted.css";
import Line from "../../images/vertical_line.png";

function GetStarted() {
  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: "purple",
          height: "100px",
          marginTop: "-1px",
        }}
      ></Grid>
      <Grid container justify="center" className="btn-cont">
        <Button className="btn" variant="outlined" color="secondary">
          GET STARTED
        </Button>
      </Grid>
      <Grid container justify="center">
        <img src={Line} alt="Vertical Line" />
      </Grid>
    </>
  );
}

export default GetStarted;
