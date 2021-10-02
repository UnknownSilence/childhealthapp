import { Typography, Grid } from "@material-ui/core"
import React from "react"
import Emoji from "../components/Emoji"

export default function Diabetes(){
    return(
        <Grid>
            <Typography variant="h3"> Diabetes page</Typography>
            <Typography variant="body1"> Before learning about diabetes, we need to know what glucose is. Glucose is a sugar<Emoji symbol="🧂"/> that the 
            body gets from food <Emoji symbol="🍞"/> and uses for energy<Emoji symbol="🔋"/>.There are two types of diabetes. In type 1 diabetes, the body stops making insulin or does
             not make enough. Insulin is a hormone, or chemical, that normally controls the level of glucose in the blood<Emoji symbol="🩸"/>. This type 
             of diabetes often happens in children<Emoji symbol="🧒"/> and teenagers. In type II the body makes insulin but cannot use it properly. Type II
              usually occurs in adults<Emoji symbol="👨"/>. It is the most common type of diabetes. In both cases, insulin would be the treatment</Typography>
        </Grid>
    )
}