import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState('olive')
  return (
    <div className='w-full h-screen duration-200'
    style={{ backgroundColor: colour }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outlined-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}}
            onClick={() => setColour('red')}
            >
              Red
            </button>
            <button className='outlined-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "green"}}
            onClick={() => setColour('green')}
            >
              Green
            </button>
            <button className='outlined-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "blue"}}
            onClick={() => setColour('blue')}
            >
              Blue
            </button>
          </div>
      </div>
    </div>
  )
}

export default App
