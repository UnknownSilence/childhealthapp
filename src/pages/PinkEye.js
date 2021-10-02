import {
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    CardActions,
    Box,
} from "@material-ui/core";
import React from "react";
import Emoji from "../components/Emoji";
import { ReactComponent as PinkEyeball } from "./Pinkeye.svg";
import { ReactComponent as WashHands } from "./washing_hands.svg";
import { Link } from "react-router-dom";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";


export default function PinkEye() {
    return (
      <Grid>
        <Typography variant="h1">Pink Eye</Typography>
        <Grid item container direction="column" display="flex" justify="center">
          <Typography>&nbsp;</Typography>
          <Typography>&nbsp;</Typography>
          <Typography>&nbsp;</Typography>
        </Grid>
        <Grid item container display="flex" justify="center">
          <PinkEyeball></PinkEyeball>
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
                Conjunctivitis, or pink eye is when your conjunctiva (the white part of your eye) 
                becomes inflamed (turns red). Like the name suggests, one of the most common symptoms is that the white part of your eye
                 <Emoji symbol="👀"/> becomes red or pink.
              </Typography>
              <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
            </Typography>
            <Typography variant="h6" component="div">
            Your eye could also be itching, burning, and/or swelling. The common cause of pink eye is when a 
            group of viruses attack your eye. If your pink eye is caused by viruses, you can easily spread it to anyone around you.
            </Typography>
            <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
            Another cause of pink eye is when there is bacteria in your eye, but this can be fixed when applied with eye drops
            <Emoji symbol="💧"/>.
            </Typography>
          </CardContent>
          <CardActions style={{justifyContent: "center"}}> 
            <a
            target="_blank"
            href="https://kidshealth.org/en/parents/conjunctivitis.html"
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
        <WashHands></WashHands>
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
              To prevent pink eye, it's best to wash your hands regularly with warm water and soap 
              <Emoji symbol="🧼"/>!
            </Typography>
            <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          </Typography>
          <Typography variant="h6" component="div">
            It's also best to avoid sharing items like pillowcases and towels with other individuals. 
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: "center"}}>
          <a
            target="_blank"
            href="https://www.cdc.gov/conjunctivitis/about/prevention.html"
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