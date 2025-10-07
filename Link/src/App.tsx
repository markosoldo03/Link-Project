import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import About from './views/About'
import Settings from './views/Settings'


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/settings' element={<Settings />} />
    </Routes>
  )
}

export default App
