
import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import cardData from './components/cardData';
import Analysis from './components/Analysis';
import Info from './components/Info';
import Articles from './components/Articles';
import articleData from './components/articleData';
import Download from './components/Download';
import Footer from './components/Footer';




function App() {
  // const [count, setCount] = useState(0)

  return (
   <>

<Navbar />
<Hero />
<Features cards = {cardData}/> 
<Analysis />
<Info />
<Articles Items = {articleData} />

<Download />
<Footer />
   

    


   
  


      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
      </p> */}
 </>
  );
}

export default App
