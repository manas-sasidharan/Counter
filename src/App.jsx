import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height:'100vh'}} className='w-100 d-flex justify-content-center'>
      <Counter/>
    </div>
  )
}

export default App
