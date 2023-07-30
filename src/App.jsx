import { useState } from 'react'
import '../scss/default.scss'

function App() {
  const [count, setCount] = useState(0)

  return ( <h1 onClick={() => setCount((prevCount) => prevCount + 1)}>Lozo {count}</h1>)
}

export default App
