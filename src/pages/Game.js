import React from "react";
import Confetti from 'react-dom-confetti';
import { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia
} from "@material-ui/core";




import { makeStyles } from '@material-ui/core/styles'
import { ReactComponent as DocOffice } from "./docOffice.svg";
import CoughMedicine from "../components/CoughMedicineCard";
import EyeDrops from "../components/EyeDropsCard";
import Penicillin from "../components/PenicillinCard";
import Insulin from "../components/InsulinCard";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1)
  }
}))


const Game = () => {
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: "46",
    elementCount: 70,
    dragFriction: "0.09",
    duration: "6870",
    stagger: "2",
    width: "26px",
    height: "52px",
    perspective: "772px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  const [win, setWin] = useState(false);
  const [wrong, setWrong] = useState(false);
  const classes = useStyles()
  let cm_desc = "Cough medicine will help ease non-stop coughs. Common treatment for the flu.";
  let p_desc = "They are effective to diseases that are found in the throat or lungs.";
  let ed_desc = "Eye drops keep your eye wet. If one or both of your eyes ever feel dry or itchy, apply eyedrops.";
  let i_desc = "insulin is used to control blood sugar in people who have type 1 diabetes or " + 
            "type 2 diabetes that cannot be controlled with oral medications alone.";
  const data = [
    { name: "Cough medicine", advg: "flu, bronchitis, pneumonia", desc: cm_desc, link: "https://i.imgur.com/ptNQLUj.png" },
    { name: "Penicillin", advg: "pneuomina, scarlet fever, strep throat, syphillis, gonorrhea", desc: p_desc, link: "https://i.imgur.com/TMGBmel.png" },
    { name: "Eye drops", advg: "pink eye, allergies", desc: ed_desc, link: "https://i.imgur.com/XHJdz8q.png" },
    { name: "Insulin", advg: "type 1 diabetes, type 2 diabetes", desc: i_desc, link: "https://i.imgur.com/yFRMHOu.png"},

  ]

  const clicked = (e) => {
    if (e == data[0].name) {
      const medicine = new CoughMedicine();
      console.log(win);
      setWin(medicine.include("flu"));
      setTimeout(() => setWin(false), 100);
      console.log(win);
      
    }
    else if (e === data[1].name) {
      const medicine = new Penicillin();
      setWin(medicine.include("flu"));
      setWrong(true);
      setTimeout(() => setWrong(false), 1500);
      console.log("wrong");
      
      
    
    }
    else if (e === data[2].name) {
      const medicine = new EyeDrops();
      setWin(medicine.include("flu"));
      setWrong(true);
      setTimeout(() => setWrong(false), 1500);
      console.log("wrong");
    }
    else {
      const medicine = new Insulin();
      setWin(medicine.include("flu"));
      setWrong(true);
      setTimeout(() => setWrong(false), 1500);
      console.log("wrong");
    }
  }

  return (

    <Grid>
      <Box id="symptoms" className={wrong ? "WrongAnswer":""}variant="contained" m={10} pt={5}>
        <Confetti active={win} config={config} />
        <Card spacing={15}>
          <CardHeader id="docDiag"
            title="Doctor's Diagnosis"
          >
          </CardHeader>

          <CardContent>
            <CardMedia>
              <img id="targetElement" src="https://i.imgur.com/3grc0Gz.png" />
            </CardMedia>

            <Typography variant="h6" gutterBottom>
              Alan seems to have a runnny nose, sore throat, and feels tired and cold.
            </Typography>
            <Grid item container direction="column" display="flex" justify="center">
              <Typography>&nbsp;</Typography>
              <Typography>&nbsp;</Typography>
              <Typography>&nbsp;</Typography>
              <Grid item container direction="column" display="flex" justify="center">
                <Typography>&nbsp;</Typography>
                <Typography>&nbsp;</Typography>
                <Typography>&nbsp;</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box variant="contained" m={1} pt={1}>
        <Typography id="alantext" variant="h2"><span id='alan'>Alan is sick!</span></Typography>
      </Box>


      <Box m={1} pt={1}>
        <DocOffice></DocOffice>
      </Box>



      <Grid item container direction="column" display="flex" justify="center">
        <Box variant="contained" m={1} pt={1}>
          <Typography variant="h6">What is the best treatment?</Typography>
        </Box>
      </Grid>

      <div className={classes.root}>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.map(elem => (
            <Grid item xs={3} sm={3} md={3} key={data.indexOf(elem)}>
              <Button onClick={() => clicked(`${elem.name}`)}>
                <Confetti active={win} config={config} />

                <Card >
                  <CardHeader
                    title={`${elem.name}`}
                    subheader={`Super effective against: ${elem.advg}`}
                  />
                  <CardMedia>
              <img id="targetElement" src={`${elem.link}`} />
            </CardMedia>
                  <CardContent>
                    {`${elem.desc}`}
                    <Grid item container direction="column" display="flex" justify="center">
                      <Typography>&nbsp;</Typography>
                      <Grid item container direction="column" display="flex" justify="center">
                        <Typography>&nbsp;</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  );
};

export default Game;
