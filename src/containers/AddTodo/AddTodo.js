import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import './AddTodo.css'
import rectangle from '../../img/rectangle.png'
import plus from '../../img/plus.png'
import Modal from '@material-ui/core/Modal';
import CategoryEdit from '../../components/CategoryEdit/CategoryEdit'
const categoryArr = 
[
  {text: 'Homework', color: '#38C9FF'},
  {text: 'Assignment', color: '#FF3838'},
  {text: 'Homework', color: '#FFAB38'}
]

function AddTodo({ dispatch }) {
    let input
    const [openSelectCategory, setOpenSelect] = React.useState(false);
    const [openCategoryEdit, setOpenEdit] = React.useState(false);
    const handleOpenSelect = () => {
        setOpenSelect(true);
    };
    const handleCloseSelect = () => {
        setOpenSelect(false);
    };
    const handleOpenEdit = () => {
        setOpenEdit(true);
    };
    const handleCloseEdit = () => {
        setOpenEdit(false);
    };


    const body = (
    <>
        <div className="categories-select">
        {categoryArr.map((category,i) => {
            return(
                <div className="category-select">
                    <div key={i} className="color-tag" style={{backgroundColor: category.color  }}></div>
                    <div key={i} className="category"><p style={{margin: 0}}>{category.text}</p></div>
                </div>
            )
        })}
        <div className="add-category-select"><img onClick={handleOpenEdit} src={plus} alt="AddButton" /></div>
        </div>
        <Modal
        open={openCategoryEdit}
        onClose={handleCloseEdit}
        >
            <CategoryEdit />
        </Modal>
    </>
    );
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''

            }}> 
                <div className="input-field">
                    <img 
                        class="choose-category" 
                        src={rectangle} 
                        alt="choose_category" 
                        onClick={handleOpenSelect}
                    />
                    <input  placeholder="What’s needed to be done?" ref={node => input = node} />
                </div>
            </form>
            <Modal
            open={openSelectCategory}
            onClose={handleCloseSelect}
            >
                {body}
            </Modal>
        </div>
    )
}

export default connect()(AddTodo)
