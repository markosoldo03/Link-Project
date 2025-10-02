import './App.css'
import Block from './components/block'

function App() {

  return (
    <>

      
      <header className='w-screen bg-gray-700 h-20 text-4xl text-white flex  font-bold'>
        <img src="Logo.png" className=' block m-0 w-80 h-auto  '></img> </header>
      <div className='w-screen h-auto flex flex-row'>
      <Block image="https://www.hdz.hr/photos/thumb/default.jpg"  title='Stranka te prati'/>
      <Block image="https://www.sdp.ba/datoteke/uploads/sdp-bih-logo-1.jpg"  title='Sve je ona meni' />
      <Block image="https://www.hrvatski-fokus.hr/wp-content/uploads/2024/04/HZV.jpg"  title='Miki milane'/>
      <Block image="https://mozemo.hr/wp-content/uploads/2025/04/mozemo.jpg"  title='Bok stari'/>
      
      </div>
    </>
  )
}

export default App
