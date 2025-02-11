import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compo/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    userName : 'ABC',
    age : 21
  }
  let arr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400'>Tailwind test</h1>
     <Card channel='black' />
    </>
  )
}

export default App
