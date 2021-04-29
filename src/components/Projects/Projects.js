import React from 'react'
import Project from './Project'

const Projects = props => {
  return (
    <div className="projects-container">
      <Project 
        name="Restaurant website"
        description="A restaurant website with three basic pages (homepage, about us and reservation)."
        demoLink="https://johnatanf.github.io/restaurant-website/"
        sourceCodeLink="https://github.com/johnatanf/restaurant-website"
        imageName="restaurant"
      />

      <Project 
        name="Todo-list"
        description="A simple todo-list where you can create and delete tasks, mark a task as complete, and set a task's priority and due date."
        demoLink="https://johnatanf.github.io/todo-list/"
        sourceCodeLink="https://github.com/johnatanf/todo-list"
        imageName="todo"
      />

      <Project 
        name="Country Data"
        description="A web app where you can learn more about countries. Searching the name of a country displays more information about it, such as its currencies or land area. You can also rank countries according to a statistic (such as population) to see how they compare with each other."
        demoLink="https://johnatanf.github.io/country-data/"
        sourceCodeLink="https://github.com/johnatanf/country-data"
        imageName="country"
      />

      <Project 
        name="Book App"
        description="The Book App allows you to save books to your reading list so you can keep track of what to read. You can mark books as 'read' or remove them from your list altogether. Requires a user account (which only takes a minute to make!)"
        demoLink="https://johnatanf.github.io/book-app-frontend"
        sourceCodeLink="https://github.com/johnatanf/book-app-frontend"
        imageName="book"
      />
    </div>
  )
}

export default Projects