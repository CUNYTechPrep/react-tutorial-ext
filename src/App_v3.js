import "./App.css";

// Added a paramter called props (properties). Props allows functions to pass information to one another. 
function NewHeader(props){
  return(
    <div>
        {/* We are using props to access the property name that was passed in inthe function App_v3 */}
          <h1>Learn React with {props.name}</h1>
    </div>
      
  )
}

function App_v3() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Created a property called name and assigned a name to it. */}
        <NewHeader name={"Jonathan"}/>
      </header>
    </div>
  );
}

export default App_v3;