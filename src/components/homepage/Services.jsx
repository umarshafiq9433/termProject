import { Grid } from "@material-ui/core";
import {
  Android,
  Apple,
  Code,
  DesktopMac,
  Eco,
  Sync,
} from "@material-ui/icons";
import React, { Fragment } from "react";
import "./services.css";
import Line from "../../images/vertical_line.png";

function Services() {
  return (
    <Fragment>
      <Grid container justify="center" style={{ paddingTop: "30px" }}>
        <Grid md={3} className="grid">
          <Apple className="icon" style={{ fontSize: "100px" }}></Apple>
          <h1 className="heading extra">IOS Development</h1>
          <p className="paragraph extra">
            We develop customizable iOS application for personal and general
          </p>
        </Grid>
        <Grid md={3} className="grid">
          <Android className="icon" style={{ fontSize: "100px" }}></Android>
          <h1 className="heading extra">Android Development</h1>
          <p className="paragraph extra">
            We develop customizable Andriod application for personal and general
            purpose.
          </p>
        </Grid>
        <Grid md={3} className="grid">
          <Code className="icon" style={{ fontSize: "100px" }}></Code>
          <h1 className="heading extra">Web development</h1>
          <p className="paragraph extra">
            We Develop web application responsive and well developed.
          </p>
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ paddingTop: "30px" }}>
        <Grid md={3} className="grid">
          <Eco className="icon" style={{ fontSize: "100px" }}></Eco>
          <h1 className="heading extra">Network Security</h1>
          <p className="paragraph extra">
            We provide solution for security of domains and network.
          </p>
        </Grid>
        <Grid md={3} className="grid">
          <Sync className="icon" style={{ fontSize: "100px" }}></Sync>
          <h1 className="heading extra">24/7 Support</h1>
          <p className="paragraph extra">
            We are available 24/7 to provide you the best solutions.
          </p>
        </Grid>
        <Grid md={3} justify="center" className="grid">
          <DesktopMac
            className="icon"
            style={{ fontSize: "100px" }}
          ></DesktopMac>
          <h1 className="heading extra">Desktop Application</h1>
          <p className="paragraph extra">
            We develop desktop applcations or softwares for local use or for
            multi user
          </p>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <img src={Line} alt="Vertical Line" />
      </Grid>
    </Fragment>
  );
}

export default Services;
