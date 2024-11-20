import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Explore React Core Concepts Recup</h3>
      <ol>
        <li>Component</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load data</li>
      </ol>
      <hr />
      <Post></Post>
    </>
  )
}

export default App
