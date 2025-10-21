import { useState } from 'react'
import Slides from './components/Slides'
import slidesData from './assets/slidesData.json'

import './App.css'

function App() {
  const [slideID, setSlideID] = useState(1)

  const handleSlideChange = (newSlideID) => {
    setSlideID(parseInt(newSlideID))
  }

  return (
    <>
      <Slides data={slidesData} slideID={slideID} onSlideChange={handleSlideChange} />
    </>
  )
}

export default App
