import { Typography, Grid } from "@material-ui/core"
import React from "react"
import Emoji from "../components/Emoji"

export default function EarInfection(){
    return(
        <Grid>
            <Typography variant="h3"> Ear infection page</Typography>
            <Typography variant="body1"> There are multiple types of ear infections. One of these infections, called swimmer's ear
            , are caused by bacterial in the ear<Emoji symbol="👂"/>. It is called swimmer's ear because it is mostly caused by the water that remains in
            the ear after swimming<Emoji symbol="🏊"/>. Putting in ear drops<Emoji symbol="💧"/> can help swimmer's ear because it contains an antibiotic acid.</Typography>
        </Grid>
    )
}