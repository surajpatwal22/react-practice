import React from "react";
import './app.css';
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpance from "./component/IncomeExpance";
import Transationlist from "./component/Transationlist";
import Addtransaction from "./component/Addtransaction";


function App() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  return (
    <div className="App">
    <Header />
    <div className="container">
    <Balance />
    <IncomeExpance />
    <Transationlist />
    <Addtransaction />
    </div>

    </div>
  );
}

export default App;
