import React from 'react'
import FilterLink from '../../containers/FilterLink'
import { VisibilityFilters } from '../../actions'
import './Footer.css'

const Footer = () => (
    <div className="footer-wrapper">
        <div><p className="remain-task">8 tasks left</p></div>
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

export default Footer
