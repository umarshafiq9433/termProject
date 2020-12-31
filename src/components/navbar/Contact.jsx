import { Grid } from "@material-ui/core";
import React from "react";
function Contact() {
  return (
    <Grid md={4}>
      <Grid container justify="flex-end">
        <Grid md={5} className="contact">
          +92-3244444311
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
