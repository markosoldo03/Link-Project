import './App.css'
import Block from './components/Block'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <MainLayout>

      <div className='w-screen h-auto flex flex-col '>
      <Block image="https://www.hdz.hr/photos/thumb/default.jpg"  title='Stranka te prati'/>
      <Block image="https://www.hdz.hr/photos/thumb/default.jpg"  title='Stranka te prati'/>
      <Block image="https://www.hdz.hr/photos/thumb/default.jpg"  title='Stranka te prati'/> 

      </div>
    </MainLayout>
  )
}

export default App
