import React from "react";
import './app.css';
import { useState } from "react";

function App() {

  const [count,setcount] = useState(0);

  return (
    <div className="App">
  <h1 className="hd1"> COUNTER APP</h1>
  <h2 className="hd2">Count value : <span className="sp1">{count}</span></h2>
  <button className="btn btn-i" onClick={() => (count>=10?"":setcount(count+1))} >Increament</button>;
  <button className="btn btn-r" onClick={() => setcount(0)}>Reset</button>

<button className="btn btn-d" onClick={() => (count<=0?"":setcount(count-1))} >Decrease</button>;
  
    </div>
  );
}

export default App;
