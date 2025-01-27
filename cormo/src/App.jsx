import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './content/Home'
import Slideshow from './content/Slideshow'
import Slideshow2 from './content/Slideshow2'
import Slideshow3 from './content/Slideshow3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
      {/* <Home/>
      <Slideshow/>
<Slideshow2/>
<Slideshow3/> */}
    </>
  )
}

export default App
