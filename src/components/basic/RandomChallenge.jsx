import React from 'react'

export default (params) => {
  const { min, max } = params
  const value = parseInt(Math.random() * (max - min)) + min
  return (
    <div>
      <h2>Valor Aleatório:
        <strong> {value} </strong>
      </h2>
    </div>
  )
}