import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import React from "react";
import Emoji from "../components/Emoji";
import { ReactComponent as EarPic } from "./earPic.svg";
import { ReactComponent as SwimPic } from "./swimmer.svg";

export default function EarInfection() {
  return (
    <Grid>
      <Typography variant="h1">Ear Infection</Typography>
      <Grid item container direction="column" display="flex" justify="center">
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
      </Grid>
      <Grid item container display="flex" justify="center">
        <EarPic></EarPic>
      </Grid>
      <Grid item container direction="column" display="flex" justify="center">
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
      </Grid>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            <Typography variant="h6">
              {" "}
              There are multiple types of ear infections. One of these
              infections, called swimmer's ear , are caused by bacterial in the
              ear
              <Emoji symbol="👂" />. It is called swimmer's ear because it is
              mostly caused by the water that remains in the ear after swimming
              <Emoji symbol="🏊" />.
            </Typography>
            <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          </Typography>
          <Typography variant="h6">
            Putting in ear drops
            <Emoji symbol="💧" /> can help swimmer's ear because it contains an
            antibiotic acid.
          </Typography>
          <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
        </CardContent>
        <CardActions>
          <a
            target="_blank"
            href="https://kidshealth.org/en/parents/otitis-media.html"
          >
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </Card>
      <Grid item container direction="column" display="flex" justify="center">
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
      </Grid>
      <Grid item container display="flex" justify="center">
        <SwimPic></SwimPic>
      </Grid>
      <Grid item container direction="column" display="flex" justify="center">
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
      </Grid>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            <Typography variant="h6"> lorem ipsulum!</Typography>
            <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          </Typography>
          <Typography variant="h6" component="div">
            Lorem Ipsulum! of using insulin <Emoji symbol="🏋️" />!
          </Typography>
        </CardContent>
        <CardActions>
          <a
            target="_blank"
            href="https://kidshealth.org/en/parents/otitis-media.html"
          >
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </Card>
      <Typography variant="body1"></Typography>
      <Grid item container direction="column" display="flex" justify="center">
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
      </Grid>
      <Grid item container display="flex" justify="center">
        <Typography variant="h3">Let's apply it!</Typography>
      </Grid>
      <Grid item container direction="column" display="flex" justify="center">
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
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
        <Typography>&nbsp;</Typography>
      </Grid>
    </Grid>
  );
}
