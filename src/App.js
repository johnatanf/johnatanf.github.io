import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navigation from './components/Navigation'
import Section from './components/Section'
import './css/style.css'

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Main>
        <Section id="section-contact" className="section-contact" />
      </Main>
      <Footer />
    </>
  );
}

export default App