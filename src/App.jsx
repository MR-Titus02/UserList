import { useState } from 'react'
import { useEffect } from 'react'
import UserList from './components/Fetch'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserList/>
    </>
  )
}

export default App
