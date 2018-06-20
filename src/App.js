import React, { Component } from 'react'

import ReactDataGridSpreadsheet from './ReactDataGridSpreadsheet'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>React Data Grid Example</h1>
        </header>
        <ReactDataGridSpreadsheet />
      </div>
    )
  }
}

export default App
