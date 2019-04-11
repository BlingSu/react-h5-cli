import React from 'react'
import FilterLink from '../container/FilterLink'
import { VisibilityFilters } from '../redux/actions'

const center = {
  textAlign: 'center'
}

const Footer = () => (
  <div style={center}>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default Footer
