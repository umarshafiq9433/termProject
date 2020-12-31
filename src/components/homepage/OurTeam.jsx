import { Grid } from "@material-ui/core";
import React from "react";
import Team from "../../images/team_7.jpg";
import "./OurTeam.css";
import Line from "../../images/vertical_line.png";

function OurTeam() {
  return (
    <Grid id="about" container justify="center" style={{ paddingTop: "50px" }}>
      <Grid className="portfolioHeading">OUR GREAT TEAM</Grid>
      <Grid xs={10}>
        <Grid container justify="space-between" style={{ padding: "30px 0px" }}>
          <Grid md={2} className="teamContainer">
            <img src={Team} alt="Team Member" style={{ width: "100%" }} />
            <h1>HASSAN</h1>
          </Grid>
          <Grid md={2} className="teamContainer">
            <img src={Team} alt="Team Member" style={{ width: "100%" }} />
            <h1>UMAR</h1>
          </Grid>
          <Grid md={2} className="teamContainer">
            <img src={Team} alt="Team Member" style={{ width: "100%" }} />
            <h1>FAIZ</h1>
          </Grid>
          <Grid md={2} className="teamContainer">
            <img src={Team} alt="Team Member" style={{ width: "100%" }} />
            <h1>TALHA</h1>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <img src={Line} alt="Vertical Line" />
      </Grid>
    </Grid>
  );
}

export default OurTeam;
