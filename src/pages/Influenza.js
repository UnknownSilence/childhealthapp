import { Typography, Grid } from "@material-ui/core"
import React from "react"
import Emoji from "../components/Emoji"

export default function Influenza(){
    return(
        <Grid>
            <Typography variant="h3"> Influenza page</Typography>
            <Typography variant="body1"> Influenza, also known as the flu, is a virus <Emoji symbol="🦠"/> that cause harm to your body.
            They are caused by germs that enter your body through your nose, throat, and lungs. They can cause you to start coughing,
            sneezing, and having a sore throat. Anyone at any age <Emoji symbol="👨‍👩‍👦‍👦"/> can get the influenza, and while the most dangerous ones can kill
            , those outbreaks do not happen very often. You can prevent getting the flu by getting something called the flu vaccine<Emoji symbol="💉"/>. 
            The only catch is that you have to take one every year because the flu virus constantly mutates every year. Cough medicine
            can help your lessen your symptoms.
            </Typography>
        </Grid>
    )
}