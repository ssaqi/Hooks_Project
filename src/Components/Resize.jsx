import React, { useState } from 'react'
import { useEffect } from 'react'
import'./resize.css';

function Resize() {

const[widthCount, setWidthCount]=useState(window.screen.width)

const currentScreenWidth = () => {
    setWidthCount(()=> window.innerWidth)
}
useEffect(()=>{
  
    window.addEventListener("resize", currentScreenWidth)
   return ()=>{
    window.removeEventListener("resize", currentScreenWidth)
   }
    
})

  return (
    <div className='main'>
  <center>
  <h1 className='heading'>Resizing Window Screen By Using UseEffect
    The size of window is <span>{widthCount}</span></h1>
  </center>
    </div>
  )
}

export default Resize