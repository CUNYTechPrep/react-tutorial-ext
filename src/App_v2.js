import "./App.css";

// Created a new function that returns a new header.
function NewHeader(){
  return(
    <div>
          <h1>Learn React with Jonathan</h1>
    </div>
      
  )
}

// Replaced the p and anchor tag with my new function: NewHeader
function App_v2() {
  return (
    <div className="App">
      <header className="App-header">
        <NewHeader />
      </header>
    </div>
  );
}

export default App_v2;