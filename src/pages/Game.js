import React from "react";
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
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

import { ReactComponent as NurseGirl } from "./nurseIcon.svg";
import { ReactComponent as DocOffice } from "./docOffice.svg";

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(1)
  }
}))


const Game = () => {

  const classes = useStyles()
  const data = [
      { name: "Card 1", advg: "Fire", desc: 13000 },
      { name: "Card 2", advg: "Water", desc: 13000 },
      { name: "Card 3", advg: "Electric", desc: 1000 },
      { name: "Card 4", advg: "Ground", desc: 13000 },
    
  ]



  return (


    
    <Grid>

      <Box id="symptoms" variant="contained" m={10} pt={5}>
                        <Card spacing={15}>
                            <CardHeader id="docDiag"
                                title = "Doctor's Diagnosis"
                                                             
                            >
                              
                              
                            </CardHeader>
                  
                            <CardContent>
                            <CardMedia>
                              <img id="targetElement" src="https://i.imgur.com/3grc0Gz.png"/>
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
        <Typography variant="h2">Alan is sick!</Typography>
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
                      <Button>
                        <Card>
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
