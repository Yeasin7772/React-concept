import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './counter'
import Users from './User'
import FriendS from './Friends'
import Friends from './Friends'


function App() {
 
  function handelClick2() {
    alert('click me too')
  }
  const handelClick = () => {
    alert('click button')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }


  return (
    <>

      <h3>Vite + React</h3>
      <Users> </Users>
      <hr />
    <Friends></Friends>
    
      {/* <Counter> </Counter> */}

      {/* <button onClick={handelClick}>click me</button>
      <button onClick={handelClick2}>click me too</button>
      <button onClick={() => addToFive(3)}>Four</button>
      <hr />
      <button onClick={()=> addToFive(3)}>Five </button> */}

    </>
  )
}

export default App
