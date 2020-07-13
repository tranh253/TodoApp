import React from 'react';
import './App.css';
import AddToDo from '../../containers/AddTodo/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import Footer from '../Footer/Footer'
import plus from '../../img/plus.png'
const categoryArr = ['Homework', 'Assignment', 'Work']
var colorArr = ['#38C9FF', '#FF3838', '#FFAB38', '#21966B']


class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header-wrapper">
          <div className="header-content">
            <div className="header-text">
              <p>To-do list</p>
            </div>
            <div className="categories">
              {categoryArr.map((category, i) => {
                return (
                  <>
                    <div key={i} className="color-tag" id="colorTag"></div>
                    <div className="category"><p key={i}>{category}</p></div>
                  </>
                )
              })}
              <div className="add-category"><img src={plus} alt="AddButton" /></div>
            </div>
            <div className="progress-bar">
              <div className="percentage">100% Completed</div>
            </div>
          </div>
        </div>
        <div className="body-wrapper">
          <div className="body-content">
            <div className="addToDo">
              <AddToDo />
            </div>
            <div className="todo-list">
              <VisibleTodoList />
            </div>
          </div>
        </div>
        <div className="footer">
              <Footer />
        </div>
      </div>
    )
  }
}



export default App;
