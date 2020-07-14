import React from 'react'
import FilterLink from '../../containers/FilterLink'
import { VisibilityFilters } from '../../actions'
import './Footer.css'


function Footer(todos) {
    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    
    // Get the size of an object
    var size = Object.size(todos);
    return(
        <div className="footer-wrapper">
        <div><p className="remain-task">8 task left</p></div>
        <div className="todo-tags">
            <FilterLink className="all-category" filter={VisibilityFilters.SHOW_ALL}>
                ALL
            </FilterLink>
            <FilterLink className="ongoing-category" filter={VisibilityFilters.SHOW_ACTIVE}>
                ONGOING
            </FilterLink>
            <FilterLink className="completed-category" filter={VisibilityFilters.SHOW_COMPLETED}>
                COMPLETED
            </FilterLink>
        </div>
    </div>
    )
}
    


export default Footer
