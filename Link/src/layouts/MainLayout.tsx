import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function MainLayout({children}:any) {
  return (
    <>
    <Header/>
    <div className='pt-20'>
        {children}
        <Footer/>
    </div>
    </>
  )
}
