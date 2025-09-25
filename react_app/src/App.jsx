import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar/NavBar';
import Hero from './Components/NavBar/Hero/Hero';



function App() {
  return ( 
    <>
      <NavBar></NavBar>
      <Hero></Hero>
    </>

  );
}

export default App
