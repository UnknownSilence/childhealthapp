import React from "react";
import {
  Grid,
  Typography,
  Box,
  Item,
  Divider,
  Card,
  CardContent,
} from "@material-ui/core";

import { ReactComponent as DocOffice } from "./docOffice.svg";

const Game = () => {
  return (
    <Grid>
      <Typography variant="h1" component="h2">
        Game
      </Typography>
      <Box m={1} pt={1}>
        <DocOffice></DocOffice>
      </Box>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            <Typography variant="h6">
              {" "}
              There are multiple types of ear infections. One of these
            </Typography>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            <Typography variant="h6">
              {" "}
              There are multiple types of ear infections. One of these
            </Typography>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            <Typography variant="h6">
              {" "}
              There are multiple types of ear infections. One of these
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Game;
