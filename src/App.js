import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'
import ContactForm from './contact'
import './App.css'


export default function App() {
  return (
    <div className='main-section'> 
      <Header/>
      <Meme />
      <ContactForm />
    </div>
  )
}