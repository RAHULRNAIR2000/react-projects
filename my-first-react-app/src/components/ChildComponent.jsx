import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>

        <p>Recieved data from parent:  {props.message1}</p>
    
        
        </div>
  );
};

export default ChildComponent;