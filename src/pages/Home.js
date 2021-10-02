import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { ReactComponent as Sleeping } from "./SleepPatient.svg";
//import { Link, BrowserRouter as Router } from "react-router-dom";

const Home = () => {
  return (
    <di>
      <Grid directioon="column" alignItems="center" justify="center" container>
        <Sleeping></Sleeping>
      </Grid>
      <Grid container xs={8} spacinng={12}></Grid>
      <Grid directioon="column" alignItems="center" justify="center" container>
        <Typography style={{ fontWeight: 600 }} type className="promptText">
          My Doctor said I have...
        </Typography>
      </Grid>
    </di>
  );
};

export default Home;
