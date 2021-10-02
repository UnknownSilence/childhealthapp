import React from "react"

export default class InsulinCard extends React.Component{
    constructor(props){
        super(props);
    }
    name = "Insulin";
    advantage = ["type 1 diabetes", "type 2 diabetes"];
    description = "insulin is used to control blood sugar in people who have type 1 diabetes" +
                  "(condition in which the body does not make insulin and therefore cannot control the amount of sugar in the blood)" +
                  "or in people who have type 2 diabetes (condition in which the blood sugar is too high because the body does not " +
                  "produce or use insulin normally) that cannot be controlled with oral medications alone.";
    include (disease)
    {
        return this.advantage.includes(disease);
    }
    
}
