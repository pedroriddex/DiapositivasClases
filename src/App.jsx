import { useState } from 'react'
import Slides from './components/Slides'
import SlidesHeader from './components/SlidesHeader'
import slidesData from './assets/slidesData.json'

import './App.css'

function App() {
  const [slideID, setSlideID] = useState(0)

  const handleSlideChange = (newSlideID) => {
    setSlideID(parseInt(newSlideID))
  }

  const SlideActual = slidesData[slideID]

  return (
    <>
      <main>

        {SlideActual && SlideActual.slideTemplate !== 'cover' && <SlidesHeader slideID={slideID} data={slidesData} onSlideChange={handleSlideChange} />}

        <Slides 
        key={slideID} 
        data={slidesData} 
        slideID={slideID} 
        onSlideChange={handleSlideChange} 
      />
      </main>
    </>
  )
}

export default App
