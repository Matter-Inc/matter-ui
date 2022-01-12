import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './dateInput.css'

const DateInput = ({size='md', className=''}) => {

  const [card, setCard] = useState();
  const inputCard = useRef();

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

  const handleChange = () => {
    const cardValue = inputCard.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    inputCard.current.value = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]}.${cardValue[2]}${`${
          cardValue[3] ? `.${cardValue[3]}` : ''
        }`}${`${cardValue[4] ? `.${cardValue[4]}` : ''}`}`;
    const numbers = inputCard.current.value.replace(/(\D)/g, '');
    setCard(numbers);
  };

  useEffect(() => {
    handleChange();
  }, [card]);

  return (
    <input 
      type="text" 
      ref={inputCard} 
      onChange={handleChange}
      style={style}
      placeholder='DD.MM.YYYY'
      className={`dateInput ${className}`}
    />
  )
}

DateInput.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  className: PropTypes.string
}

export default DateInput;