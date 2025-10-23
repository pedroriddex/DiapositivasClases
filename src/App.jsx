import { useState, useEffect } from 'react'
import Slides from './components/Slides'
import SlidesHeader from './components/SlidesHeader'
import slidesData from './assets/slidesData.json'

import './App.css'

function App() {
  const [slideID, setSlideID] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [nextSlideID, setNextSlideID] = useState(null)

  useEffect(() => {
    if (nextSlideID !== null) {
      // Iniciar animación de salida
      setIsExiting(true)
      
      // Después de que la animación de salida se complete, cambiar al nuevo slide
      const timer = setTimeout(() => {
        setSlideID(nextSlideID)
        setNextSlideID(null)
        setIsExiting(false)
      }, 500) // Tiempo suficiente para que la animación disapear se complete (0.5s)
      
      return () => clearTimeout(timer)
    }
  }, [nextSlideID])

  const handleSlideChange = (newSlideID) => {
    const newID = parseInt(newSlideID)
    if (newID !== slideID) {
      setNextSlideID(newID)
    }
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
          isExiting={isExiting}
        />
      </main>
    </>
  )
}

export default App
