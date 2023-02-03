// import React from 'react'
import Button from '@mui/material/Button';
import'./Countbyreducer.css';
import reducer  from './reducer'
import React, { useReducer } from 'react'
import IMG from './assests/pizza.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
function CounterByreducer() {
 let initialValue = 0;   
 const[count,dispatch]= useReducer(reducer, initialValue)
  return (
    <>
 <center> <h4>Add Card By Using Reducer</h4></center>  
<div className='Main'>
  <div className='box'>
<img src={IMG} className="img"/>
  </div>
  
  <h3 className='h3'><FavoriteIcon style={{color: "red", margin: "2px"}} /><ShoppingCartIcon style={{color: "black"}}/>{count}</h3>


  <div className='parent'>
 
  <center>
  <Button variant="contained" onClick={()=>dispatch({type:"INC"})}>+</Button>
          <h1>{count}</h1>
    <Button variant="contained" onClick={()=> dispatch({type:"DEC"})}>-</Button>
    </center>
  </div>
 </div>

 </> 
  )
}

export default CounterByreducer