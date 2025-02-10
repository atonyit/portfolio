import Header from './Header'
import './App.css'

function App() {

  return (
    <>
      <div className='body'>
          <Header/>

          <div id="about" className="sample-section max-w-lg mx-auto p-10">
          <h2>About</h2>
          <p>...</p>
        </div>
        <div id="project" className="sample-section max-w-lg mx-auto p-10">
          <h2>Project</h2>
          <p>...</p>
        </div>
        <div id="experiences" className="sample-section max-w-lg mx-auto p-10">
          <h2>Experiences</h2>
          <p>...</p>
        </div>
        <div id="contact" className="sample-section max-w-lg mx-auto p-10">
          <h2>Contact Me</h2>
          <p>...</p>
        </div>
      </div>
    </>
  )
}

export default App
