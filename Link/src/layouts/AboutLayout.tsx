import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'



export default function AboutLayout({children}:any) {
  return (
    <>
    <Header/>


    <div className='flex pt-20'></div>
        <div className=' h-full overflow-hidden flex flex-wrap justify-center '>
        <Outlet/>
        {children}
        </div>
    
    <Footer/> 
    
    </>

  )
}
