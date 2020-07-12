import React from 'react';
import './App.css';
import AddToDo from '../../containers/AddTodo/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
const categoryArr = ['Homework', 'Assignment', 'Work']
var colorArr = ['#38C9FF', '#FF3838', '#FFAB38', '#21966B']

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0px 5px 20px #00000016;
`

class App extends React.Component {
  render() {
    return (
      <Wrapper className="wrapper">
        <HeaderWrapper className="header-wrapper">
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
              <div></div>
            </div>
            <div className="progress-bar">
              <div>100%</div>
            </div>
          </div>
        </HeaderWrapper>
        <div className="body-wrapper">
          <div className="body-content">
            <div className="addToDo">
              <AddToDo />
            </div>
            <div className="todo-list">
              <VisibleTodoList />
            </div>
            <Footer />
          </div>
        </div>
      </Wrapper>
    )
  }
}



export default App;
