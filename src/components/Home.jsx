import React from 'react'
import Navbar from './Navbar'
import FirstPage from './FirstPage'
import ClientsSpeak from './ClientsSpeak'
import Resources from './Resources'
import Policy from './Policy'
import FAQ from './FAQ'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'

const Home = () => {
  return (
    <div id="/">
        
        <FirstPage />
        <About />
        <ClientsSpeak />
        <Resources />
        <Policy />
        <FAQ />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home