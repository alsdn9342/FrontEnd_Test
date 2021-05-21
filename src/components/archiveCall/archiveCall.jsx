import React from 'react';

const ArchiveCall = ({clickToarchive}) => (
 
    <div>
        <button id="archieveBtn" onClick={() => clickToarchive(true)}>
          Archive Calls
        </button>
    </div>
            
    );

export default ArchiveCall;