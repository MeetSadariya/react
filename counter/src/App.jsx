import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)


  const addValue = () =>{
    if(counter<20){
      setCounter(counter+1)
    }
  }

  const subValue = () =>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={subValue}>Subtract value</button>
    </>
  )
}

export default App
