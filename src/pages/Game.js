import React from "react";
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

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(2)
  }
}))


const Game = () => {

  const classes = useStyles()
  const data = [
      { name: "Card 1", advg: "Fire", desc: 13000 },
      { name: "Card 2", advg: "Fire", desc: 13000 },
      { name: "Card 3", advg: "Fire", desc: 13000 },
      { name: "Card 4", advg: "Fire", desc: 13000 },
  ]



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
                     </Grid>
                ))}
            </Grid>
        </div>
    </Grid>
  );
};

export default Game;
