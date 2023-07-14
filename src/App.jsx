import { useState } from 'react'
import CreateBox from './Components/Create'
import Display from './Components/Display'
import './App.css'

function App() {
  const [ boxColor, setBoxColor ] = useState([]);
  return (
    <>
      <div className='CreateBox'>
        <CreateBox
          boxColor = { boxColor } setBoxColor = { setBoxColor }
        />
        <Display
          boxColor = { boxColor }
        />
      </div>
    </>
  )
}

export default App
