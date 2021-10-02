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
import { ReactComponent as FluImg } from "./flu.svg";
import { ReactComponent as SugarPic } from "./sugar.svg";

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
              that cause harm to your body. They are caused by germs that enter
              your body through your nose, throat, and lungs. They can cause you
              to start coughing, sneezing, and having a sore throat. Anyone at
              any age <Emoji symbol="👨‍👩‍👦‍👦" /> can get the influenza, and while the
              most dangerous ones can kill , those outbreaks do not happen very
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
        <CardActions>
          <a target="_blank" href="https://kidshealth.org/en/kids/type1.html">
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
        <CardActions>
          <a
            target="_blank"
            href="https://www.johnmuirhealth.com/health-education/conditions-treatments/diabetes-articles/preventing-diabetes.html"
          >
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </Card>
      <Typography variant="body1"></Typography>
    </Grid>
  );
}
