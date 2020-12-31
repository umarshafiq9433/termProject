import { Button, Grid } from "@material-ui/core";
import React from "react";
import "./Project.css";
import Line from "../../images/vertical_line.png";

function Project() {
  return (
    <Grid container justify="center">
      <Grid container justify="center">
        <img src={Line} alt="Vertical Line" />
      </Grid>
      <Grid
        container
        justify="center"
        direction="column"
        className="projectCont"
      >
        <h1>
          Lets Get Started
          <br /> Your Project
        </h1>
        <p>We’ll help to achieve your goals and to grow business</p>
      </Grid>
      <Grid container justify="center">
        <img src={Line} alt="Vertical Line" />
      </Grid>
      <Grid container justify="center" className="btn-container">
        <Button className="button" variant="outlined" color="secondary">
          LET'S TALK
        </Button>
      </Grid>
      <Grid container justify="center">
        <img src={Line} alt="Vertical Line" />
      </Grid>
    </Grid>
  );
}

export default Project;
