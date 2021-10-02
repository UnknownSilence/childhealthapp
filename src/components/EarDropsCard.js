import React from "react"

export default class EarDropsCard extends React.Component{
    constructor(props){
        super(props);
    }
    name = "Ear drops";
    advantage = ["Ear infection", "Swimmer's Ear", "Middle ear infection"];
    description = "Ear wax are good for removing ear wax and stopping bad bacteria from growing in your ear."+
                    " When the bad bacteria stop growing, the pain and swelling that you might have in your ear will disappear";
    include (disease)
    {
        return this.advantage.includes(disease);
    }
    
}
