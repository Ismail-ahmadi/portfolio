import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testomonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <ThemeSwitcher />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
