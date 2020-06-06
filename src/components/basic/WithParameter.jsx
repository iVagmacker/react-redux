import React from 'react'

export default function WithParameter(props) {
  const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
  const value = Math.ceil(props.nota)
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p><strong> {props.subtitulo} </strong>
        tem nota
      <strong> {value} </strong>
        e foi
      <strong> {status} </strong>
      </p>
    </div>
  )
}
