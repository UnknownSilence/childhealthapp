import React from "react"

export default class PenicillinCard extends React.Component{
    constructor(props){
        super(props);
    }
    name = "Penicillin";
    advantage = ["pneuomina", "scarlet fever", "strep throat", "syphillis", "gonorrhea"];
    description = "Penicillin was the first antibiotic that doctors used. They saved millions of lives." + 
                  " They are effective to diseases that are found in the throat or lungs.";
    include (disease)
    {
        return this.advantage.includes(disease);
    }   
    
}
