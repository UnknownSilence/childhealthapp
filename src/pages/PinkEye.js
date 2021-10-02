import { Typography, Grid } from "@material-ui/core"
import React from "react"
import Emoji from "../components/Emoji"

export default function PinkEye(){
    return(
        <Grid>
            <Typography variant="h3"> Pink eye page</Typography>
            <Typography variant="body1"> Conjunctivitis, or pink eye is when your conjunctiva (the white part of your eye)
            becomes inflamed (turns red). Like the name suggests, one of the most common symptoms is that the white part of your eye
            <Emoji symbol="👀"/>becomes red or pink. Your eye could also be itching, burning, and/or swelling. The common cause of pink eye is when a 
            group of viruses attack your eye. If your pink eye is caused by viruses, you can easily spread it to anyone around you.
            Another cause of pink eye is when there is bacteria in your eye, but this can be fixed when applied with eye drops<Emoji symbol="💧"/>.
            </Typography>
        </Grid>
    )
}