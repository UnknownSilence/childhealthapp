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
import { ReactComponent as VacPic } from "./vaccPic.svg";

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
            <Typography
              style={{
                borderRadius: 35,
                color: "#009999",
                padding: "18px 36px",
                fontSize: "18px",
              }}
              var
              variant="h6"
            >
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
