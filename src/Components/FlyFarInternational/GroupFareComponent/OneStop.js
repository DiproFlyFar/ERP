import React from 'react';
import TextFields from './TextFields';

const OneStop = () => {
    const textFieldsOneStop = ["Departure From", "Departure Time", "Arival To", "Arival Time", "Career Name", "Flight Number", "Seat", "Bag","Layover Time"]
    const textFieldsOneStop2 = ["Departure From", "Departure Time", "Arival To", "Arival Time", "Career Name", "Flight Number", "Seat", "Bag", "Base Price","Tax"]
    return (
        <div>
            <TextFields textFields={textFieldsOneStop}/>
            <TextFields textFields={textFieldsOneStop2}/>
        </div>
    );
};

export default OneStop;