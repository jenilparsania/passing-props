import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <LightBulb/>

      
    </div>
  )
}

function LightBulb(){
  const [bulbOn,setBulbOn] = useState(true);
  // inside the LightBulb , we have two more child components 
  

  return <div>

      <BulbState bulbOn = {bulbOn}/>
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn}/>

  </div>
}

function BulbState({bulbOn}){

  return <div>
    {bulbOn? "Bulb ON":"Bulb off"}
  </div>

  
}

function ToggleBulbState({bulbOn,setBulbOn}){

  function toggle(){
    setBulbOn(currentState =>!currentState);
    // setBulbOn(!bulbOn);

  }
  return(<div>
    <button onClick={toggle}>Toggle the bulb </button>

  </div>)
}

export default App
