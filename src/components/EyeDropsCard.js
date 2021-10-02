import React from "react"

export default class EyeDropsCard extends React.Component{
    constructor(props){
        super(props);
    }
    name = "Eye Drops";
    advantage = ["pink eye", "allergies"];
    description = "Eye drops keep your eye wet. If one or both of your eyes ever feel dry or itchy, apply eyedrops.";
    include (disease)
    {
        return this.advantage.includes(disease);
    }   
    
}
