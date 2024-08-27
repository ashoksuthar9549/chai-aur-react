import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className='text-3xl'>Welcome to my site</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
