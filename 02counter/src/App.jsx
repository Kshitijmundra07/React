import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter, setCounter] = useState(0)

  const addValue = () =>{
    if(Counter<10){
    setCounter(Counter + 1)
    setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () =>{
    if(Counter>0)
    setCounter(Counter - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <br/>
      <h3>Counter Value: {Counter}</h3>
      <br/>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
