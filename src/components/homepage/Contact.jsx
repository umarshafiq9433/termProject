import { Grid } from "@material-ui/core";
import { Create, PhoneIphone, Room } from "@material-ui/icons";
import React from "react";
import "./Contact.css";
import Line from "../../images/vertical_line3.png";

function Contact() {
  return (
    <Grid
      container
      justify="center"
      style={{
        backgroundColor: "rgb(128,128,128,0.1)",
      }}
    >
      <Grid container justify="center">
        <img src={Line} alt="Line" />
      </Grid>
      <Grid md={10}>
        <Grid
          container
          justify="center"
          className="contactCont"
          style={{ padding: "50px 0px" }}
        >
          <Grid md={4}>
            <Grid container justify="center">
              <PhoneIphone
                className="contactIcon"
                style={{
                  fontSize: "130px",
                  color: "#a0ce4e",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border: "3px solid rgb(128,128,128,0.1)",
                  padding: "10px",
                  boxShadow: "0 0 0 3px white",
                }}
              ></PhoneIphone>
            </Grid>
            <h1>Call Us</h1>
            <p>+92-3244444311</p>
            <p>+92-3244444312</p>
          </Grid>
          <Grid md={4}>
            <Grid container justify="center">
              <Create
                className="contactIcon"
                style={{
                  fontSize: "130px",
                  color: "#00bea3",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border: "3px solid rgb(128,128,128,0.1)",
                  padding: "10px",
                  boxShadow: "0 0 0 3px white",
                }}
              ></Create>
            </Grid>
            <h1>Email</h1>
            <p>info@securehops.com</p>
          </Grid>
          <Grid md={4}>
            <Grid container justify="center">
              <Room
                className="contactIcon"
                style={{
                  fontSize: "130px",
                  color: "#f18b4f",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border: "3px solid rgb(128,128,128,0.1)",
                  padding: "10px",
                  boxShadow: "0 0 0 3px white",
                }}
              ></Room>
            </Grid>
            <h1>Visit Us</h1>
            <p>Block E1, Building # 80, Wapda Town, Lahore</p>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <img src={Line} alt="Line" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
