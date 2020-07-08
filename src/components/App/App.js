import React from 'react';
import './App.css';
import AddToDo from '../../containers/AddTodo/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import Footer from '../Footer/Footer'
const categoryArr = ['Homework', 'Assignment', 'Work']
class App extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="header-text">
          <p>To-do list</p>
        </div>
        <div className="categories">
          {categoryArr.map((category, i) => {
            return (
              <div className="category"><p key={i}>{category}</p></div>
            )
          })}
        </div>
        <AddToDo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}



export default App;
