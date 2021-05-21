import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ActivityFeed from './components/activityFeed/ActivityFeed.jsx';
import Header from './Header.jsx';
import ArchiveCall from '../src/components/archiveCall/archiveCall.jsx'

const App = () => {
  
  const [aircalls, setAircall] = useState([]);
  const [callDate, setCallDate] =useState([]);
  const [callTime, setCallTime] =useState([]);
  const [archive, setArchive] =useState(Boolean);
  const [allCalls, setAllCalls] =useState(Boolean);
  


  let index = 0;
  let dateArray = [];
  let timeArray = [];
  

  
  useEffect(() => {
    fetch('https://aircall-job.herokuapp.com/activities')
    .then(aircall => aircall.json())
    .then(result => setAircall(result));
  },[]);

  const getDateAndTime = (date) => useEffect(() => {
       
        const callDate = new Date(date); 
        const year = callDate.getFullYear(); 
        const month = callDate.getMonth() + 1;
        const day = callDate.getDate();
        const hour = callDate.getHours();
        const min = callDate.getMinutes();
        const sec = callDate.getSeconds();

        dateArray[index] = `${year}-${month}-${day}`;
        timeArray[index] = `${hour}:${min}:${sec}`;
        index++; 
      
       setCallDate(dateArray);
       setCallTime(timeArray);
    
  },[]);

 const clickToarchive = (reset) => {
     setArchive(reset);
 }

 const clickToAllCalls = (set) => {
    console.log(set); 
    setAllCalls(set);
 }
  
  return (
    <div className='container'>
      <Header clickToAllCalls={clickToAllCalls} allCalls={allCalls} />
      <ArchiveCall clickToarchive={clickToarchive} />
      {archive === false ? <div className="container-view">
        <ActivityFeed aircalls={aircalls} getDateAndTime={getDateAndTime} callDate={callDate} callTime={callTime} />
      </div> : <div id="archieved">All phone call is archieved</div>}
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
