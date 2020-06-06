import React from 'react'
import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'
import RandomChallenge from './components/basic/RandomChallenge'

export default () =>
  <div id="app">
    <RandomChallenge
      min={1}
      max={10} />
    <h1>Fundamentos React (Arrow)</h1>
    <Fragment />
    <WithParameter
      titulo="Situação do Aluno"
      subtitulo="Pedro Silva"
      nota={8.7} />
    <First></First>
  </div>
