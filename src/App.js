import { useState } from "react";
import "./styles/App.css";
import Launches from "./components/Launches";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Space Launch</h1>
          <Launches />
        </div>
      </header>
    </div>
  );
}

export default App;
