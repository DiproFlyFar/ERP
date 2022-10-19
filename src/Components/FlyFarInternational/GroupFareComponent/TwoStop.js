import React from 'react';
import TextFields from './TextFields';

const TwoStop = () => {
    const textFieldsTwoStop = ["Departure From", "Departure Time", "Arival To", "Arival Time", "Career Name", "Flight Number", "Seat", "Bag","Layover Time"]
    const textFieldsTwoStop2 = ["Departure From", "Departure Time", "Arival To", "Arival Time", "Career Name", "Flight Number", "Seat", "Bag", "Base Price","Tax"]
    return (
        <div>
            <TextFields textFields={textFieldsTwoStop}/>
            <TextFields textFields={textFieldsTwoStop}/>
            <TextFields textFields={textFieldsTwoStop2}/>
        </div>
    );
};

export default TwoStop;