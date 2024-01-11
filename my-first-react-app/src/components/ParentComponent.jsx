import React from 'react'
import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    const messageToChild ="hellow from Parent";

  return (
    <div>

        <h2>Parent component</h2>
        <ChildComponent message1={messageToChild}/>

                </div>
  );
};
export default ParentComponent;
