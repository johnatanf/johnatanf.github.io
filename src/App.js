import React from 'react'
import HeadingSecondary from './components/typography/HeadingSecondary'
import Footer from './components/Footer'
import Form from './components/Form/Form'
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
        <Section id="section-contact" className="section-contact">
          <HeadingSecondary color='light'>Contact Me</HeadingSecondary>
          <Form />
        </Section>
      </Main>
      <Footer />
    </>
  );
}

export default App