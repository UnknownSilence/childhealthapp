import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Emoji from "../components/Emoji";
import { ReactComponent as EarPic } from "./earPic.svg";
import { ReactComponent as SwimPic } from "./swimmer.svg";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

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
        <CardActions style={{justifyContent: "center"}}> 
            <a
            target="_blank"
            href="https://kidshealth.org/en/parents/otitis-media.html"
          >
            <Button style={{
              borderRadius: 10,
              backgroundColor: "turquoise",
              color: "white",
              fontSize: "15px",
            }}>Learn More</Button> 
            
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
            <Typography variant="h6">
              To prevent getting ear infections, it's best to exercise proper hygiene. 
              Keep your ears clean and dry; after showering, wipe them dry with your finger
              and a tissue.  
              </Typography>
            <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          </Typography>
          <Typography variant="h6" component="div">
            It's also best to avoid smoking! 
            <Emoji symbol="🚭" /> Even secondhand smoke can irritate your tubes and lead
            to inflamation. 
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: "center"}}> 
            <a
            target="_blank"
            href="https://www.keckmedicine.org/how-to-prevent-ear-infections-when-its-cold/"
          >
            <Button style={{
              borderRadius: 10,
              backgroundColor: "turquoise",
              color: "white",
              fontSize: "15px",
            }}>Learn More</Button> 
            
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

      <Box m={5} pt={0}>
        <Link to="/game">
          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "turquoise",
              color: "white",
              padding: "50px 50px",
              fontSize: "23px",
            }}
            variant="contained"
            endIcon={<VideogameAssetIcon />}
          >
            Play Doctor!
          </Button>
        </Link>
      </Box>

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
