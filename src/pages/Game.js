import React from "react";
import Confetti from 'react-dom-confetti';
import { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Item,
  Divider,
  Card,
  CardContent,
  CardHeader
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles'
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

import { ReactComponent as NurseIcon } from "./nurseIcon.svg";
import { ReactComponent as DocOffice } from "./docOffice.svg";
import CoughMedicine from "../components/CoughMedicineCard";
import EyeDrops from "../components/EyeDropsCard";
import Penicillin from "../components/PenicillinCard";
import Insulin from "../components/InsulinCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
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
  const classes = useStyles()
  let cm_desc = "If one of your symptoms is a non-stop cough where you cough all the time, cough medicine will help give you a "+
  "break from coughing.";
  let p_desc = "Penicillin was the first antibiotic that doctors used. They saved millions of lives." + 
  " They are effective to diseases that are found in the throat or lungs.";
  let ed_desc = "Eye drops keep your eye wet. If one or both of your eyes ever feel dry or itchy, apply eyedrops.";
  let i_desc = "insulin is used to control blood sugar in people who have type 1 diabetes" +
  "(condition in which the body does not make insulin and therefore cannot control the amount of sugar in the blood)" +
  "or in people who have type 2 diabetes (condition in which the blood sugar is too high because the body does not " +
  "produce or use insulin normally) that cannot be controlled with oral medications alone.";
  const data = [
    { name: "Cough medicine", advg: "flu, bronchitis, pneumonia", desc: cm_desc },
    { name: "Penicillin", advg: "pneuomina, scarlet fever, strep throat, syphillis, gonorrhea", desc: p_desc },
    { name: "Eye drops", advg: "pink eye, allergies", desc: ed_desc },
    { name: "Insulin", advg: "type 1 diabetes, type 2 diabetes", desc: i_desc },

  ]

  const clicked = (e) => {
    if(e === data[0].name)
    {
      let medicine = new CoughMedicine();
      setWin(medicine.include(e));
    }
    else if (e === data[1].name)
    {
      let medicine = new Penicillin();
      setWin(medicine.include(e));
      console.log("wrong");
    }
    else if (e === data[2].name)
    {
      let medicine = new EyeDrops();
      setWin(medicine.include(e));
      console.log("wrong");
    }
    else
    {
      let medicine = new Insulin();
      setWin(medicine.include(e));
      console.log("wrong");
    }
  }

  return (
    <Grid>
      <Box m={1} pt={1}>
        <DocOffice></DocOffice>
      </Box>



      <Grid item container direction="column" display="flex" justify="center">
        <NurseIcon></NurseIcon>
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
                <Card >
                  <CardHeader
                    title={`name : ${elem.name}`}
                    subheader={`advg : ${elem.advg}`}
                  />
                  <CardContent>
                    {`desc : ${elem.desc}`}
                    <Typography variant="h5" gutterBottom>
                      Hello World
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
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  );
};

export default Game;
