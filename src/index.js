import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'

ReactDOM.render(
  <div id="app">
    <First></First>
    <WithParameter
      titulo="Situação do Aluno"
      subtitulo="Pedro Silva"
      nota={9.3} />
  </div>,
  document.getElementById('root'))