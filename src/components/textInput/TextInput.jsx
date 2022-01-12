import React from 'react'
import PropTypes from 'prop-types'
import './textInput.css'

const TextInput = ({placeholder, size='md', className=''}) => {

  let width;
  if (size === 'xs')
    width = 190;
  else if (size === 'sm')
    width = 260;
  else if (size === 'md')
    width = 350;
  else if (size === 'lg')
    width = 520;

  const style = {
    backgroundColor: '#F2F2F2',
    textAlign: 'center',
    width: `${width}px`,
    height: '20px',
    paddingTop: '12px',
    paddingBottom: '12px',
    borderRadius: '40px',
    fontFamily: 'Cabin',
    fontSize: '15px',
    color: '#A7A7A7',
    border: 'none',
    outline: 'none'
  }

  return (
    <input 
      type="text"
      placeholder={placeholder}
      style={style}
      className={`textInput ${className}`}
    />
  )
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  className: PropTypes.string
}

export default TextInput;

