import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css"

function Login() {
 let [totalval,settotalval]=useState();
 let[email,setemail]=useState();
 let[pass,setpass]=useState();
 let [loginerror,setloginerror]=useState(false);
 let navigate=useNavigate();
 useEffect(()=>{
axios.get("https://crudoperation-1.onrender.com/auth").then((res)=>{
settotalval(res.data);
})
 },[]);
 let userlogin=(e)=>{
  e.preventDefault();
   let fdata=totalval.filter((pro)=>{
return email===pro.email && pass===pro.pass
 })
if(fdata.length>0){
  sessionStorage.setItem("userid",String(fdata[0].id))
  console.log(fdata[0].id);
  
navigate("/dashboard")
}else{
setloginerror(true);
}
 }

   
  return (
    <>
    <div className='main'>
      
     
    <div className='d-flex  form-div'>
        <div>
        <h1>Hey, Welcome Back <img className='hilogo' src="../public/hi.png" alt="..... " /></h1>
    <div className='h-50 w-75 '>
    <form onSubmit={userlogin}>
         <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
setemail(e.target.value);
    }}/>
    <small id="emailHelp" className="form-text "><p className='notification'>We'll never share your email with anyone else.</p></small>
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
    <p className='signup-link'>Don't have an account <Link to="/signup" className='main-link'>Signup</Link></p>
    {loginerror?
    <span id="warningspan"style={{color:"red"}}>User not found</span>:""
}
    </div>
    </div>
    </div>
   </div>
   
    </>
  )
}

export default Login