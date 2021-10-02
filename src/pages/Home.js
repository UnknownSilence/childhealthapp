import React from "react";
import { Grid, Typography, Button, Item, TextField } from "@material-ui/core";
import { ReactComponent as Sleeping } from "./SleepPatient.svg";
//import { Link, BrowserRouter as Router } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ailments } from "./ailmennts";

const Home = () => {
  return (
    <div>
      <Grid container direction="column" item xs={12} align="center">
        <Grid item container display="flex" justify="center">
          <Sleeping></Sleeping>
        </Grid>
        <Grid item container direction="column" display="flex" justify="center">
          <Typography>&nbsp;</Typography>
          <Typography>&nbsp;</Typography>
          <Typography>&nbsp;</Typography>
          <Typography>&nbsp;</Typography>
          <Typography>&nbsp;</Typography>
          <Typography>&nbsp;</Typography>
          <Typography>&nbsp;</Typography>
          <Typography>&nbsp;</Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="flex-end"
          justify="center"
        >
          <Typography>My ddoctor said I have...</Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="flex-end"
          justify="center"
        >
          <Autocomplete
            freeSolo
            id="free-solo-demo"
            options={ailments}
            renderInput={(params) => (
              <TextField
                {...params}
                justify="center"
                margin="normal"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
