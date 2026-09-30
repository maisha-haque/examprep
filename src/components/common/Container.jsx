import React from 'react'

const Container = ({ className, children }) => {
  return (
    <div className={`w-330 m-auto ${className}`}>{children}</div>
  )
}

export default Container