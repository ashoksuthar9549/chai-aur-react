import './App.css'
import Card from './components/Card'

function App() {

  const obj = {
    name: "AK",
    age: 23
  }

  const arr = [1, 2, 3]

  return (
    <>
      <Card username="Bonnie Green" designation="Visual Designer" btnText="Call" myObj={obj}/>
      <Card username="John Due" designation="UI/UX Designer" btnText="Chat" myArr={arr}/>
    </>
  )
}

export default App
