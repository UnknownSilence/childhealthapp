import React from "react";
import { Grid, Typography } from "@material-ui/core";

const About = () => {
  return (
    <Grid>
      <Typography variant="h1" component="h2">
        About
      </Typography>
      <Typography>&nbsp;</Typography>
      <Typography variant="body3">
        Nowadays, when children are diagnosed with an ailment or illness, they
        are given a great number of documents to read through describing their
        ailment and what medication they must take to get treated. However, many
        children dislike the idea of reading through all those documents and
        would most likely disregard them. This web application game was designed
        to better education children on their ailment and treatment by gamifying
        the learning process and making it much more enjoyable.
        Nowadays, when children are diagnosed with an ailment or illness, they are given
        a great number of documents to read through describing their ailment and what medication
        they must take to get treated. However, many children dislike the idea of reading through
        all those documents and would most likely disregard them. This web application game was
        designed to better education children on their ailment and treatment by gamifying the 
        learning process and making it much more enjoyable. 
      </Typography>
    </Grid>
  );
};

export default About;
