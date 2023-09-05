import "./App.css";
// Imported React and useState. useState is React Hook (which allows us to have access to state and other React feature) 
// that allows you to add state to a functional component.
import React, { useState } from "react";



function NewHeader(props){
  return(
    <div>
        {/* We are using props to access the property name that was passed in inthe function App_v3 */}
          <h1>Learn React with {props.name}</h1>
    </div>
      
  )
}

function App_v4() {
  // Using useState where I set the default value to Jonathan and created a getter (learnWith) and setter (setLearnWith) variable
  const [learnWith, setLearnWith] = useState('Jonathan');

  // Created a function that changes the value from Jonathan to Catherine
  function handleClick() {
    setLearnWith("Catherine");
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewHeader name={learnWith}/>
        {/* Added the button that changed who you learn React with */}
        <button onClick={handleClick}>
          Change the person
        </button>
      </header>
    </div>
  );
}

export default App_v4;