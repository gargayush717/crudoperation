import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import "./Signup.css"
function Signup() {
  let [name,setname]=useState();
  let [email,setemail]=useState();
  let [pass,setpass]=useState();
     let navigate = useNavigate();
    const submit=(e)=>{
     e.preventDefault();
    axios.post("https://crudoperation-1.onrender.com/auth",{
      name,email,pass
    }).then(()=>{
      navigate("/")
    })
    
    }
  return (
    <>
    
    <div className='Signupmain'>
    <div className='d-flex form-div'>
         <div>
          <h1>Hii, New User <img className="hilogo" src="/hi.png" alt="..... " /></h1>
      <div className='h-50 w-75'>
        <form  method='post' onSubmit={submit}>
                <div className="form-group">
    <label >Name</label>
    <input type="text" className="form-control" onChange={(e)=>{
setname(e.target.value)
    }}/>
  </div>
         <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
setemail(e.target.value)
    }}/>
    <small id="emailHelp" className="form-text text-muted"><p className='notification'>We'll never share your email with anyone else.</p></small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
setpass(e.target.value)
    }}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>

    </form>
    </div>
    </div>
    </div>
    
    </div>
    
    </>
  )
}

export default Signup