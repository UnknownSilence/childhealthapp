import React from "react";
import { Grid, Typography, Button, Item, TextField } from "@material-ui/core";
import { ReactComponent as Sleeping } from "./SleepPatient.svg";
//import { Link, BrowserRouter as Router } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ailments } from "./ailmennts";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Home = () => {
  const [disease, setdisease] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault()
    if(disease === "Influenza" ){
      history.push("/flu");
    }
    else if(disease === "Pink Eye"){
      history.push("/pinkeye")
    }
    else if(disease === "Diabetes"){
      history.push("/diabetes")
    }
    else if(disease === "Ear Infection"){
      history.push("/earinfection")
    }
  }
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
          <Typography>My doctor said I have...</Typography>
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
            onChange={(e, value) => setdisease(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                justify="center"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={(e) => setdisease(e.target.value)}
              />
            )}
          />
          <Button variant="outline" onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
