import Slides from './components/Slides'
import slidesData from './assets/slidesData.json'

import './App.css'

function App() {
  return (
    <>
      <Slides data={slidesData} />
    </>
  )
}

export default App
