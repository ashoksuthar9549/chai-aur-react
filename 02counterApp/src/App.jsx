import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 10;
  let [counter, setCounter] = useState(10);
 
  const addCount = () => {
    // counter = counter + 1;
    if(!(counter >= 20)){
      setCounter(counter + 1);
    }
    console.log(counter);
  }

  const removeCount = () => {
    // counter = counter - 1;
    if(!(counter <= 0))
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    <>
      <h1>Counter APP</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addCount}>Add count</button>
      <br />
      <br />
      <button onClick={removeCount}>remove count</button>
    </>
  )
}

export default App
