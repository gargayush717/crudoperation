import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
const {id} = useParams();
let[name,setname]=useState('');
let[age,setage]=useState('');
let[city,setcity]=useState('');
let[email,setemail]=useState('');
let navigate = useNavigate();
useEffect(()=>{
axios.get("https://crudoperation-1.onrender.com/userdetails/"+id).then((res)=>{
setname(res.data.name);
setage(res.data.age);
setcity(res.data.city);
setemail(res.data.email);

})
},[])
 let updatedata=(e)=>{
  e.preventDefault();
  axios.put("https://crudoperation-1.onrender.com/userdetails/"+id,{
    name,age,city,email
  }).then((res)=>{
    navigate("/dashboard/read")
  })
}


  return (
    <>
        <div className='d-flex align-items-center' style={{height:'100vh'}}>
        <form className='w-50 h-50 mx-auto ' method='post' onSubmit={updatedata} >
                <div className="form-group">
    <label >Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>
  </div>
      <div className="form-group">
    <label >Age</label>
    <input type="Number" className="form-control" value={age} onChange={(e)=>{setage(e.target.value)}}/>
  </div>
    <div className="form-group">
    <label >City</label>
    <input type="text" className="form-control" value={city}onChange={(e)=>{setcity(e.target.value)}}/>
  </div>
         <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" className="btn btn-primary">Update Data</button>

    </form>
    </div>
    </>
  )
}

export default Update