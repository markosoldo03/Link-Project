import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import About from './views/About'
import Settings from './views/Settings'
import Contact from './views/Contact'


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App
