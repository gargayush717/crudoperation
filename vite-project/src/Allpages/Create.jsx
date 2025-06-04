import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    let[name,setname]=useState();
    let[age,setage]=useState();
    let[city,setcity]=useState();
    let[email,setemail]=useState();
    let navigate = useNavigate();

    const submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/userdetails",{
name,age,city,email
        }).then(()=>{
            navigate("/dashboard/read")
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
    <label >Age</label>
    <input type="Number" className="form-control" onChange={(e)=>{
setage(e.target.value)
    }}/>
  </div>
    <div className="form-group">
    <label >City</label>
    <input type="text" className="form-control" onChange={(e)=>{
setcity(e.target.value)
    }}/>
  </div>
         <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
setemail(e.target.value)
    }} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" className="btn btn-primary">Create Data</button>

    </form>
    </div>
    
   
   
   </>
  )
}

export default Create