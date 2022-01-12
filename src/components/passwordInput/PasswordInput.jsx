import React from 'react'
import PropTypes from 'prop-types'
import './passwordInput.css'

const PasswordInput = ({size='md', className='', visible=false, placeholder='•••••••••••••••••'}) => {

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
    fontSize: `${visible?'15px':'18px'}`,
    overflow: 'hidden',
    color: '#A7A7A7',
    border: 'none',
    outline: 'none'
  }

  return (
    <input 
      type={visible?'text':'password'}
      placeholder={placeholder}
      style={style}
      className={`passwordInput ${className}`}
    />
  )
}

PasswordInput.prototypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  className: PropTypes.string,
  visible: PropTypes.bool,
  placeholder: PropTypes.string
}

export default PasswordInput;