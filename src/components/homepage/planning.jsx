import { Grid } from "@material-ui/core";
import React from "react";
import "./planning.css";
import Line from "../../images/vertical_line2.png";
import Step1 from "../../images/step_img_1.png";
import Step2 from "../../images/step_img_6.png";
import Step3 from "../../images/step_img_7.png";
import Step4 from "../../images/step_img_8.png";
import RightArrow from "../../images/right_arrow.png";
import LeftArrow from "../../images/left_arrow.png";

function Planning() {
  return (
    <div className="background">
      <Grid container justify="center" style={{ marginBottom: "50px" }}>
        <Grid xs={10}>
          <Grid
            container
            style={{ marginBottom: "30px" }}
            justify="center"
            alignItems="center"
          >
            <img src={Line} alt="Vertical Line" />
          </Grid>
          <Grid container justify="space-evenly">
            <Grid md={4}>
              <Grid container alignItems="center">
                <Grid xs={6} className="number">
                  01
                </Grid>
                <Grid xs={6} className="numText">
                  STRATEGY
                </Grid>
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container justify="center">
                <img src={Step1} alt="Step 1" />
              </Grid>
            </Grid>
            <Grid md={4} className="desText">
              <Grid container style={{ height: "100%" }} alignItems="center">
                We define your competition and target audience. Discover what is
                working in your online industry, then design your website
                accordingly.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className="arrow">
        <Grid md={2}>
          <Grid container justify="flex-end">
            <img src={RightArrow} alt="Right Arrow" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ marginBottom: "50px" }}>
        <Grid xs={10}>
          <Grid container justify="space-evenly">
            <Grid md={4} className="desText">
              <Grid container style={{ height: "100%" }} alignItems="center">
                Color scheme, layout, sitemap, and style. We will bring your
                brand to life with a one of a kind masterpiece, built just for
                you.
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container justify="center">
                <img src={Step2} alt="Step 1" />
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container alignItems="center">
                <Grid xs={6} className="number" style={{ color: "#a0ce4e" }}>
                  02
                </Grid>
                <Grid xs={6} className="numText">
                  DESIGN
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className="arrow">
        <Grid md={2}>
          <Grid container justify="flex-start">
            <img src={LeftArrow} alt="Left Arrow" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ marginBottom: "50px" }}>
        <Grid xs={10}>
          <Grid container justify="space-evenly">
            <Grid md={4}>
              <Grid container alignItems="center">
                <Grid xs={6} className="number" style={{ color: "#00bea3" }}>
                  03
                </Grid>
                <Grid xs={6} className="numText">
                  DEVELOP
                </Grid>
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container justify="center">
                <img src={Step3} alt="Step 1" />
              </Grid>
            </Grid>
            <Grid md={4} className="desText">
              <Grid container style={{ height: "100%" }} alignItems="center">
                We turn your ideas into a reality. Your website is placed on a
                "development server" where you get to watch the whole process,
                live.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className="arrow">
        <Grid md={2}>
          <Grid container justify="flex-end">
            <img src={RightArrow} alt="Right Arrow" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid xs={10}>
          <Grid container justify="space-evenly">
            <Grid md={4} className="desText">
              <Grid container style={{ height: "100%" }} alignItems="center">
                This is where you go live, to the world. Design, marketing, and
                maintenance; we'll be at your side for the life of your site.
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container justify="center">
                <img src={Step4} alt="Step 1" />
              </Grid>
            </Grid>
            <Grid md={4}>
              <Grid container alignItems="center">
                <Grid xs={6} className="number" style={{ color: "#f1894c" }}>
                  04
                </Grid>
                <Grid xs={6} className="numText">
                  SUPPORT
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            style={{ marginTop: "30px" }}
            justify="center"
            alignItems="center"
          >
            <img src={Line} alt="Vertical Line" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Planning;
