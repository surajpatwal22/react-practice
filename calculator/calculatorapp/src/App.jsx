import React, { useState } from "react";
import './App.css'

function App() {
  
const [result,setResult] = useState('');
const handelclick =(e) => {
  setResult(result.concat(e.target.name));
  
}
const clear = () => {
  setResult("");

}
const backspace = () => {
  setResult(result.slice(0,-1));
 
}
const calculate = () =>{
  try{
    setResult(eval(result).toString());
  } catch(err) {
    setResult("Error")
  }

}
  return (
    <div className="container">
      <form action="text">
        <input type="text" value={result} /> 
      </form>
      <div className="keypad">
        <button onClick={clear} id="clear" className="btn hl" >Clear</button>
        <button onClick={backspace} id="backspace" className="btn hl">C</button>
        <button name="/"  onClick={handelclick}className="btn hl">&divide;</button>
        <button name="7" onClick={handelclick}className="btn">7</button>
        <button name="8" onClick={handelclick}className="btn">8</button>
        <button name="9" onClick={handelclick}className="btn">9</button>
        <button name="*" onClick={handelclick}className="btn hl">&times;</button> 
        <button name="4" onClick={handelclick}className="btn">4</button>
        <button name="5" onClick={handelclick}className="btn">5</button>
        <button name="6" onClick={handelclick}className="btn">6</button>
        <button name="-" onClick={handelclick}className="btn hl">&ndash;</button>
        <button name="1" onClick={handelclick}className="btn">1</button>
        <button name="2" onClick={handelclick}className="btn">2</button>
        <button name="3" onClick={handelclick}className="btn">3</button>
        <button name="+" onClick={handelclick}className="btn hl">+</button>
        <button name="0" onClick={handelclick}className="btn"> 0</button>
        <button name="." onClick={handelclick}className="btn">.</button>
        <button  onClick={calculate}className="btn hl" id="result">=</button>
      </div>
    </div>
  )
}

export default App
