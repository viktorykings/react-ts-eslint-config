import React from 'react'
import logo from './logo.svg'
import './App.css'

function App (): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
      <h1>hello my fren</h1>
      <h2>one more test</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <h1>hello my frens</h1>
      </body>
    </div>
  )
}

export default App
