import React from 'react';
import inbound from '../../images/inbound.png'
import outbound from '../../images/outbound.png'

const ActivityDetail = ({aircall, getDateAndTime, callDate, callTime}) => { 
  getDateAndTime(aircall.created_at);
    
    return (
        <div>
        <h2 id="date">{callDate}</h2>
        <li id="callList">
    
            <img id="callImg" src={aircall.direction === `inbound` ? inbound : outbound} alt="inbound" />
            <div>
                <p id="mainDescrition">{aircall.direction === `inbound` ? `${aircall.from}` : `${aircall.to}`} </p>
                <p id="subDescrition">{aircall.direction === `inbound` ? `${aircall.to} received call from ${aircall.from}`:` ${aircall.from} tried to call on ${aircall.to}` }</p>
            </div>
            <div id="callTime"><p>{callTime}</p></div>
        </li>
        
        </div>
    )
};

export default ActivityDetail;