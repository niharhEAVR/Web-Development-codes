import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Cooldude!</h1>
      <h2>Counter value: {count}</h2>

      <button
      onClick={()=>{count>=20 ? setCount(c = 20): setCount(c => c+1)}}
      >increase value {count}</button> 
      <br />
      <button
      onClick={()=>{count<=0 ? setCount(c = 0): setCount(c => c-1)}}
      >decrease value {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
