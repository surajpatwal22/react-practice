import React from 'react'
import { useState } from 'react'

const Addtransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);


  return (
    <div>
         <h3>Add new transaction</h3>
      <form>
        <div>
        <label>Text</label> <br></br>
        <input className='in1' type="text" id="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..."/>
        </div>
        <div>
            <label>Amount </label> <br></br>
            <input className='in2' type="number" id="amount"value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..."/>
        </div>
      <button className='btn'>Add Transaction</button>
        {/* <button className="btn">Add transaction</button> */}
      </form>
    </div>
  )}

export default Addtransaction