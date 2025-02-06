import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import headerLogo from '/src/assets/diamondLogo.png'

//import Header from './Header


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>

          {/* <Header /> */}
          <header className='header'>
            <a href='#default' class="logo">
              <img src={headerLogo} className='logo'/>
              </a>
            <div className='headerRight'>
              <a className='' href ="/">Intro</a>
              <a className='' href ="/">Work</a>
              <a className='' href ="/">Projects</a>
              <a className='' href ="/">Contact</a>
            </div>
          </header>

        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
