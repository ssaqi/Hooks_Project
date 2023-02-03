import React from 'react'
import'./Sign.css';
import { useState } from 'react'

function Sign() {
 
const[formData, SetFormData]=useState({

    username:"",
    email:"",
    password:""


})


const handle = (event) =>{
 const name = event.target.name;
 const value = event.target.value;
 SetFormData((prev)=>{
    return{...prev ,[name] : value}
 
 })
}

  return (
    
<>


<div className='form'>

<br></br>
<center>
<h3 className='hh3'>Form Values of useState</h3>
  <input type="text"
  placeholder='Username'
  className='input'
  name='username'
  value={formData.username}
  onChange={handle}
  />

<input type="text"
  placeholder='Email'
  className='input'
  name='email'
  value={formData.email}
  onChange={handle}
  />

<input type="password"
  className='input'
  placeholder='Password'
  name='password'
  value={formData.password}
  onChange={handle}
  />


<p className='para'>`My name is {formData.username} 
and My email is {formData.email} and password is
 {formData.password}`</p>

</center>
</div>

</>


  )
}

export default Sign