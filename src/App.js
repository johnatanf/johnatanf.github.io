import React from 'react'
import HeadingSecondary from './components/typography/HeadingSecondary'
import Footer from './components/Footer'
import Form from './components/Form/Form'
import Header from './components/Header'
import Main from './components/Main'
import Navigation from './components/Navigation'
import Projects from './components/Projects/Projects'
import Section from './components/Section'
import './css/style.css'

const projects = [
  {
    name: "Restaurant website",
    description: "A restaurant website with three basic pages (homepage, about us and reservation).",
    demoLink: "https://johnatanf.github.io/restaurant-website/",
    sourceCodeLink: "https://github.com/johnatanf/restaurant-website",
    imageName: "restaurant",
  },
  {
    name: "Todo-list",
    description: "A simple todo-list where you can create and delete tasks, mark a task as complete, and set a task's priority and due date.",
    demoLink: "https://johnatanf.github.io/todo-list/",
    sourceCodeLink: "https://github.com/johnatanf/todo-list",
    imageName: "todo",
  },
  {
    name: "Country Data",
    description: "A web app where you can learn more about countries. Searching the name of a country displays more information about it, such as its currencies or land area. You can also rank countries according to a statistic (such as population) to see how they compare with each other.",
    demoLink: "https://johnatanf.github.io/country-data/",
    sourceCodeLink: "https://github.com/johnatanf/country-data",
    imageName: "country",
  },
  {
    name: "Book App",
    description: "The Book App allows you to save books to your reading list so you can keep track of what to read. You can mark books as 'read' or remove them from your list altogether. Requires a user account (which only takes a minute to make!)",
    demoLink: "https://johnatanf.github.io/book-app-frontend",
    sourceCodeLink: "https://github.com/johnatanf/book-app-frontend",
    imageName: "book",
  },
]

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Main>
        <Section id="section-portfolio" className="section-portfolio">
          <HeadingSecondary color='dark'>Portfolio</HeadingSecondary>
          <Projects projects={projects} />
        </Section>
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