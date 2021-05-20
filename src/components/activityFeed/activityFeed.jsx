import React from 'react';
import ActivityDetail from '../../components/activityDetatil/activityDetail.jsx';


const ActivityFeed = ({aircalls, getDateAndTime, callDate, callTime}) => (
    
        <ul>
            {
              aircalls.map((aircall, index) => (
                  <ActivityDetail 
                  key={aircall.id} 
                  aircall={aircall}
                  getDateAndTime={getDateAndTime}
                  callDate={callDate[index]}
                  callTime={callTime[index]} 
                   />
              ))
            }
        </ul>
);

export default ActivityFeed;