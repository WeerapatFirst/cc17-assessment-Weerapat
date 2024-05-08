import { Link } from "react-router-dom"
import TodoList from "../component/TodoList"

function HomePage() {
  return (
    <div className="home__myTodo">
      <div className="home__container">
        <div className="home__content">
          <div className="home__header">
            <h1>My Todo</h1>
            <span>🛩️</span>
          </div>

          <div className="home__newtask">
            <p>new task</p>
            <div className="home__div"></div>
          </div>
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
            <div className="home__logout">
              <Link to={'/login'}><button>LOG OUT</button></Link>
            </div>
        </div>
        

      </div> 
    </div>
  )
}

export default HomePage