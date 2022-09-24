import React from 'react'
import Design from './Components/Design'
import Featur from './Components/Featur'
import Header from './Components/Header'
import './styles/style.css'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Design />
      <Featur />
    </div>
  )
}

export default App