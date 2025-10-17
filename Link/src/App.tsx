import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import About from './views/About'
import Settings from './views/Settings'
import Contact from './views/Contact'
import Members from './views/Members'


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/members' element={<Members />} />
    </Routes>
  )
}

export default App
