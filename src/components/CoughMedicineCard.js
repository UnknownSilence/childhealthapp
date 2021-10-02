import React from "react"

export default class CoughMedicineCard extends React.Component {
    constructor(props){
        super(props);
    }
    name = "Cough Medicine";
    advantage = ["flu", "bronchitis", "pneumonia"];
    description = "If one of your symptoms is a non-stop cough where you cough all the time, cough medicine will help give you a "+
                  "break from coughing.";
    include (disease)
    {
        return this.advantage.includes(disease);
    }
    
}
