import { Grid, TextField } from "@material-ui/core";
import React from "react";
function Search(props) {
  return (
    <Grid className={props.class}>
      <TextField
        style={{ Display: "inline" }}
        id="standard-basic"
        label="Search"
      />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    </Grid>
  );
}

export default Search;
