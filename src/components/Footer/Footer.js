import React from 'react'
import FilterLink from '../../containers/FilterLink'
import { VisibilityFilters } from '../../actions'

const Footer = () => (
    <div className="footer-wrapper">
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            ALL
    </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            ONGOING
    </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            COMPLETED
    </FilterLink>
    </div>
)

export default Footer
