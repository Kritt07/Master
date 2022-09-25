import React from 'react'
import Design from './Components/Design'
import Featur from './Components/Featur'
import Header from './Components/Header'
import Notebook from './Components/Notebook'
import './styles/style.css'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Design />
      <Featur />
      <Notebook />
    </div>
  )
}

export default App