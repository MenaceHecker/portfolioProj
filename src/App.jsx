import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import CV from './components/cv/CV'
const App = () => {
  return (
   <>
   <Header />
   <Nav />
   <About />
   <Experience />
   <CV/>                         
   <Projects/>
   <Contact />
   <Footer />
   </>
  )
}

export default App