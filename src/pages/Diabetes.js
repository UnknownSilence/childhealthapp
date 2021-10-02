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
import { ReactComponent as DiabPerson } from "./Diabetesperson.svg";
import { ReactComponent as SugarPic } from "./sugar.svg";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

export default function Diabetes() {
  return (
    <Grid>
      <Typography variant="h1">Diabetes</Typography>
      <Grid item container direction="column" display="flex" justify="center">
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
      </Grid>
      <Grid item container display="flex" justify="center">
        <DiabPerson></DiabPerson>
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
              Before learning about diabetes, we need to know what glucose is.
              Glucose is a sugar
              <Emoji symbol="🧂" /> that the body gets from food{" "}
              <Emoji symbol="🍞" /> and uses for energy
              <Emoji symbol="🔋" />.
            </Typography>
            <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          </Typography>
          <Typography variant="h6" component="div">
            There are two types of diabetes. In type 1 diabetes, the body stops
            making insulin or does not make enough. Insulin is a hormone, or
            chemical, that normally controls the level of glucose in the blood{" "}
            <Emoji symbol="🩸" />.
          </Typography>
          <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          <Typography variant="h6" sx={{ mb: 1.5 }}>
            This type of diabetes often happens in children
            <Emoji symbol="🧒" /> and teenagers. In type II the body makes
            insulin but cannot use it properly. Type II usually occurs in adults
            <Emoji symbol="👨" />. It is the most common type of diabetes. In
            both cases, insulin would be the treatment
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: "center"}}> 
            <a
            target="_blank"
            href="https://kidshealth.org/en/kids/type1.html"
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
        <SugarPic></SugarPic>
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
              To prevent diabetes, it's best to consume a balanced nutritional
              diet and exercise reguarly!
            </Typography>
            <Typography variant="h6">&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
          </Typography>
          <Typography variant="h6" component="div">
            Doctors say exercising for atleast 30 minutes a day, five days a
            week is the day best way to ensure your body is healthy andd capable
            of using insulin <Emoji symbol="🏋️" />!
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: "center"}}> 
            <a
            target="_blank"
            href="https://www.johnmuirhealth.com/health-education/conditions-treatments/diabetes-articles/preventing-diabetes.html"
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
