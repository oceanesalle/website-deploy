import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Step from './components/step/Step'
import Footer from './components/footer/Footer'




const App = () => {
  return (
    <div>
      <Header/>
      <Navbar />
      <Skills/>
      <Services/>
      <Step/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App