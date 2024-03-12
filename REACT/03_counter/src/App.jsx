import { useState } from 'react'
import './App.css'

function App() {
  
let [counter,setCounter] = useState(15);
// setcounter is method that controls counter   
const addValue = ()=>{
  console.log("clicked")
  setCounter(counter+1);
}

const removeValue = ()=>{
  counter = counter-1;
  if(counter>=0){
    setCounter(counter);
  }
  else counter = 0;
}
  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addValue}
     >Add Value</button><br/>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
