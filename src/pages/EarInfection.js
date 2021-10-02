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
import { ReactComponent as VacPic } from "./vaccPic.svg";

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
              There are multiple types of ear infections.
            </Typography>
            <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          </Typography>
          <Typography variant="h6" component="div">
            One of these infections, called swimmer's ear , are caused by
            bacterial in the ear
            <Emoji symbol="👂" />. It is called swimmer's ear because it is
            mostly caused by the water that remains in the ear after swimming
            <Emoji symbol="🏊" />.
          </Typography>
          <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          <Typography variant="h6" component="div">
            Putting in ear drops
            <Emoji symbol="💧" /> can help swimmer's ear because it contains an
            antibiotic acid.
          </Typography>
          <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
        </CardContent>
        <CardActions>
          <a
            target="_blank"
            href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/influenza/influenza-flu-in-children#:~:text=Influenza%20(flu)%20is%20a%20very,for%20less%20than%20a%20week."
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
        <VacPic></VacPic>
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
            href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/influenza/influenza-flu-in-children#:~:text=Influenza%20(flu)%20is%20a%20very,for%20less%20than%20a%20week."
          >
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </Card>
      <Typography variant="body1"></Typography>
    </Grid>
  );
}
