import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header  className='header'>
        <h1>{title}</h1>
        <Button text="Add" color="green"></Button>
    </header>
  )
}

Header.defaultProps={
    title:'Task Tracker 1'
}

export default Header
