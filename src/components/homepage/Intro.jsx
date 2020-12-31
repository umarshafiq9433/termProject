import React from "react";
import "./intro.css";
import Line from "../../images/vertical_line.png";
import { Button, Grid } from "@material-ui/core";
function Intro() {
  return (
    <Grid container justify="center">
      <Grid md={6}>
        <h1 className="heading">We worry about IT.....so you don't have to.</h1>
        <p className="paragraph">
          Getting online is easy. Succeeding online is a different story. You’ll
          need more than just a beautiful website to stand out these days.
          <b>Online marketing solutions</b>. Conversion-based web design coupled
          with a lead generating marketing plan, your online success is
          inevitable.
        </p>
      </Grid>
      <Grid container justify="center">
        <img src={Line} alt="Vertical Line" />
      </Grid>
      <Grid container justify="center" className="btn-container">
        <Button className="button" variant="outlined" color="secondary">
          GET STARTED
        </Button>
      </Grid>
      <Grid container justify="center">
        <img src={Line} alt="Vertical Line" />
      </Grid>
    </Grid>
  );
}

export default Intro;
