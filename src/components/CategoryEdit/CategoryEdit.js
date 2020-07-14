import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import './CategoryEdit.css'

const CategoryEdit =()=> {
    return (
        <div className="edit-wrapper">
            <p className="label">CATEGORY NAME</p>
            <input type="text" className="category-text" />
            <p style={{marginTop: 40}} className="label">CATEGORY COLOR</p>
            <div className="color-sample"></div>
            <div className="color-edit">
                <div className="color1"></div>
                <div className="color2"></div>
                <div className="color3"></div>
                <div className="color4"></div>
                <input type="text" className="color-hex" value="# F77062" />
            </div>
            <DeleteIcon className="delete-icon" />
            <div className="save-button">
                <DoneIcon className="check-icon" />
            </div>
        </div>
    )
}
export default CategoryEdit 