import React from 'react'

const Button = ({className, btntext}) => {
  return (
    <button className={`py-3 px-14 m-2 ${className}`}>{btntext}</button>
  )
}

export default Button