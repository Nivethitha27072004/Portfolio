import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar/NavBar';
import Hero from './Components/NavBar/Hero/Hero';
import About from './Components/NavBar/About/About';



function App() {
  return ( 
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
    </>

  );
}

export default App
