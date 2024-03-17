import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './components/pokedex/pokedex'
import CustomRoutes from './routes/CustomRoutes'
 import { Link } from "react-router-dom"
function App() {


  return (
    <>
    < div className="outerpokedex">
    <Link to="/"><h1 className="podex-headding">POKEDEX</h1></Link>
    <CustomRoutes />
    </div>
    </>
  )
}

export default App
