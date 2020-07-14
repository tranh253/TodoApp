import React from 'react';
import './App.css';
import AddToDo from '../../containers/AddTodo/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import Footer from '../Footer/Footer'
import CategoryEdit from '../CategoryEdit/CategoryEdit'
import Modal from '@material-ui/core/Modal'
import plus from '../../img/plus.png'
import logo from '../../img/logo.png'
const categoryArr = 
[
  {text: 'Homework', color: '#38C9FF'},
  {text: 'Assignment', color: '#FF3838'},
  {text: 'Homework', color: '#FFAB38'}
]



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  showModal = () => {
    this.setState({ open: true });
  };

  hideModal = () => {
    this.setState({ open: false });
  };
  
  

  render() {
    return (
      <div className="wrapper">
        <div className="header-wrapper">
          <div className="header-content">
            <div className="logo">
              <img src={logo} alt="StepOut_Logo" />
            </div>
            <div className="header-text">
              <p>To-do list</p>
            </div>
            <div className="categories">
              {categoryArr.map((category,i) => {
                console.log(category.color)
                return(
                  <div className="tags-category">
                  <div key={i} className="color-tag" style={{backgroundColor: category.color  }}></div>
                  <div key={i} className="category">
                    <p style={{margin: 0}}>{category.text}</p>
                  </div>
                </div>
                )
              })}
              <div className="add-category"><img src={plus} onClick={this.showModal} alt="AddButton" /></div>
              <Modal
                open={this.state.open}
                onClose={this.hideModal}
                >
                    <CategoryEdit />
              </Modal>
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
