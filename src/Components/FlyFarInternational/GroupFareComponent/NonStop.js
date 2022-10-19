import React from 'react';
import TextFields from './TextFields';

const NonStop = () => {
    const textFields = ["Departure From", "Departure Time", "Arival To", "Arival Time", "Career Name", "Flight Number", "Seat", "Bag", "Base Price","Tax"]
    return (
        <div>
            <TextFields textFields={textFields}/>
        </div>
    );
};

export default NonStop;