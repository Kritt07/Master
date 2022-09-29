import React from 'react'
import Awesome from './Components/Awesome'
import Design from './Components/Design'
import Employee from './Components/Employee'
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
      <Employee />
      <Awesome />
    </div>
  )
}

export default App