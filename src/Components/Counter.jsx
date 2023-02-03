import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react'
import'./counter.css';
function Counter() {

  const [count, setCount]=useState(0)  
  return (

 <div className='Main'>
  <center>
  <h3 className='h3'>Counter by Using Of UseState</h3>
    <Button variant="contained" onClick={()=> setCount(count + 1)}>+</Button>
          <h1 className='h1'>{count}</h1>
    <Button variant="contained" onClick={()=> (count === 0 ? setCount(0) : setCount(count - 1))}>-</Button>
    </center>
 </div>


  )
}

export default Counter