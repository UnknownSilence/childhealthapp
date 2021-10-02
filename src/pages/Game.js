import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Game = () => {
  return (
    <Grid>
      <Typography variant="h1" component="h2">
        Game
      </Typography>
      <Typography>&nbsp;</Typography>
      <Typography variant="body3">I'm a game!</Typography>
      <Box m={15} pt={10}></Box>
    </Grid>
  );
};

export default Game;
