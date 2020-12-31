import { Grid } from "@material-ui/core";
import React from "react";
import "./Portfolio.css";
import DunesManor from "../../images/DunesManor.jpg";
import Educate from "../../images/educatejjjjkkkk.jpg";
import Maersk from "../../images/maerskyyyyyuuuuooooo.jpg";
import Sylvan from "../../images/sylvanggggtttttuhhhaaaaaaammmm.jpg";
import Jazeera from "../../images/work-1qqqqqffffqqqs.jpg";
import Almeera from "../../images/almeerajjjjjjjjjjjuuu.jpg";

function Portfolio() {
  return (
    <Grid container style={{ paddingTop: "50px" }}>
      <Grid container justify="center" className="portfolioHeading">
        Portfolio
      </Grid>
      <Grid container justify="center">
        <ul className="portfolioList">
          <li>Show All</li>
          <li>Android</li>
          <li>Desktop</li>
          <li>INTERNATIONAL</li>
          <li>IOS</li>
          <li>Networking</li>
          <li>Web</li>
        </ul>
      </Grid>
      <Grid container justify="center">
        <Grid xs={8}>
          <Grid container justify="center">
            <Grid md={4}>
              <Grid container justify="center">
                <img
                  src={DunesManor}
                  alt="Dunes Manor"
                  className="portfolioImage"
                />
              </Grid>
              <Grid xs={12}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  itemsalalignItems="center"
                  className="portfolioGrid"
                >
                  <h1>DUNES MANOR</h1>
                  <p>Network Security</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container justify="center">
                <img src={Educate} alt="Educate" className="portfolioImage" />
              </Grid>
              <Grid xs={12}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  itemsalalignItems="center"
                  className="portfolioGrid"
                >
                  <h1>EDUCATE</h1>
                  <p>Android Apps & Web Design</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container justify="center">
                <img src={Maersk} alt="Maersk" className="portfolioImage" />
              </Grid>
              <Grid xs={12}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  itemsalalignItems="center"
                  className="portfolioGrid"
                >
                  <h1>MAERSK</h1>
                  <p>IOS web & Network Security</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container justify="center">
                <img
                  src={Sylvan}
                  alt="Dunes Manor"
                  className="portfolioImage"
                />
              </Grid>
              <Grid xs={12}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  itemsalalignItems="center"
                  className="portfolioGrid"
                >
                  <h1>SYLVAN LEARNING</h1>
                  <p>IOS App & Network Management</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container justify="center">
                <img src={Jazeera} alt="Educate" className="portfolioImage" />
              </Grid>
              <Grid xs={12}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  itemsalalignItems="center"
                  className="portfolioGrid"
                >
                  <h1>AL AZEERA</h1>
                  <p>Web Design</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container justify="center">
                <img src={Almeera} alt="Maersk" className="portfolioImage" />
              </Grid>
              <Grid xs={12}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  itemsalalignItems="center"
                  className="portfolioGrid"
                >
                  <h1>AL MEERA</h1>
                  <p>Android & Desktop Application</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
