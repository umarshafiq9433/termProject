import {
  Grid,
  LinearProgress,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";
import Line from "../../images/vertical_line2.png";
import "./Skills.css";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 4,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Skills() {
  const classes = useStyles();
  return (
    <div className="background" style={{ marginTop: "0px" }}>
      <Grid container justify="center" className="skillsContainer">
        <Grid container justify="center" alignItems="center">
          <img src={Line} alt="Vertical Line" />
        </Grid>
        <h1>
          OUR SKILLS AND EXPERTISE
          <br /> We worry about IT....so you don't have to
        </h1>
        <Grid container justify="center">
          <Grid xs={10}>
            <Grid container justify="space-between">
              <Grid md={6}>
                <h1 style={{ textAlign: "left" }}>Why choose us</h1>
                <p>
                  We have best IT developers to meet best requirements of the
                  user.
                </p>
                <ul>
                  <li>We develop uniqueness and quality</li>
                  <li>Delivering fast and excellent results</li>
                  <li>Tons of useful widgets & shortcodes</li>
                  <li>Best in designing UI.</li>
                </ul>
              </Grid>
              <Grid xs={12} md={6} style={{ marginBottom: "50px" }}>
                <Grid container alignItems="center" style={{ height: "100%" }}>
                  <Grid container justify="flex-start">
                    <Grid xs={12}>
                      <p>ios</p>
                    </Grid>
                    <Grid xs={12}>
                      <div className={classes.root}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={95}
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid xs={12}>
                      <p>Android</p>
                    </Grid>
                    <Grid xs={12}>
                      <div className={classes.root}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={90}
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid xs={12}>
                      <p>Web</p>
                    </Grid>
                    <Grid xs={12}>
                      <div className={classes.root}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={80}
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid xs={12}>
                      <p>Desktop</p>
                    </Grid>
                    <Grid xs={12}>
                      <div className={classes.root}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={75}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <img src={Line} alt="Vertical Line" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
