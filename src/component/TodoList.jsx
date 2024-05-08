import { useState } from "react"

function TodoList() {
  return (
    <div className="home__todoList">
      <div className="home__todoList-1">
        <input type="checkbox"></input>
        <p>Here's a task item</p>
      </div>
        <span>x</span>
    </div>
  )
}

export default TodoList