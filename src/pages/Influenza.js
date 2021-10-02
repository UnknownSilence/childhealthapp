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
import Emoji from "../components/Emoji";
import { Link } from "react-router-dom";
import { ReactComponent as FluImg } from "./flu.svg";
import { ReactComponent as VacPic } from "./vaccPic.svg";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

export default function Influenza() {
  return (
    <Grid>
      <Typography variant="h1">Influenza</Typography>
      <Grid item container direction="column" display="flex" justify="center">
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
      </Grid>
      <Grid item container display="flex" justify="center">
        <FluImg></FluImg>
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
              Influenza, also known as the flu, is a virus <Emoji symbol="🦠" />{" "}
              that cause harm to your body. It's caused by germs that enter your
              body through your nose, throat, and lungs. It can cause you to
              start coughing, sneezing, and having a sore throat. Anyone at any
              age <Emoji symbol="👨‍👩‍👦‍👦" /> can get the influenza, and while the
              most dangerous ones can kill, those outbreaks do not happen very
              often.
            </Typography>
            <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          </Typography>
          <Typography variant="h6" component="div">
            You can prevent getting the flu by getting something called the flu
            vaccine
            <Emoji symbol="💉" />. The only catch is that you have to take one
            every year because the flu virus constantly mutates every year.
            Cough medicine can help your lessen your symptoms.
          </Typography>
          <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
        </CardContent>
        <CardActions style={{justifyContent: "center"}}> 
            <a
            target="_blank"
            href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/influenza/influenza-flu-in-children#:~:text=Influenza%20(flu)%20is%20a%20very,for%20less%20than%20a%20week"
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
            <Typography variant="h6">
               The best way to ease symptoms of the flu is to stay home and rest <Emoji symbol="🛏️" />.
               This will allow your body to fight the virus!  
            </Typography>
            <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          </Typography>
          <Typography variant="h6" component="div">
            It also helps to drink lots of fluids. Drinking items such as water, juice, and 
            soup will help the body stay hydrated, which will better help it fight the illness. 
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: "center"}}> 
            <a
            target="_blank"
            href="https://www.webmd.com/cold-and-flu/coping-with-flu"
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
