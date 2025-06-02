import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Signup() {
  let [name,setname]=useState();
  let [email,setemail]=useState();
  let [pass,setpass]=useState();
     let navigate = useNavigate();
    const submit=(e)=>{
     e.preventDefault();
    axios.post("http://localhost:3000/auth",{
      name,email,pass
    }).then(()=>{
      navigate("/")
    })
    
    }
  return (
    <>
    <div className='d-flex align-items-center' style={{height:'100vh'}}>
        <form className='w-50 h-50 mx-auto ' method='post' onSubmit={submit}>
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
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
    
    
    
    </>
  )
}

export default Signup