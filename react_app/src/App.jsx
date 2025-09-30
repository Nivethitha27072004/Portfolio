import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./Components/NavBar/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";





function App() {
  return ( 
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Work></Work>

      
    </>

  );
}

export default App
