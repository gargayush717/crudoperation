import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() {
    let [totalres,settotalres]=useState([]);
  useEffect(()=>{  axios.get("http://localhost:3000/userdetails").then((pro)=>{
    settotalres(pro.data)
   
        })},[totalres])

        const deletedata=(data)=>{
          axios.delete("http://localhost:3000/userdetails/"+data).then((res)=>{
            Navigate('/dashboard/read')
          })
        }




  return (
    <>
    <div className='row p-4'>
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
        <th scope="col">Email</th>
        <th scope="col">Delete</th>
        <th scope='col'>Update</th>
        
    </tr>
  </thead>
  {
totalres?<tbody>
    {totalres.map((item)=>{
return(
    <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.city}</td>
        <td>{item.email}</td>
        <td><button onClick={()=>deletedata(item.id)}>Delete</button></td>
        <td><Link to={"/dashboard/update/"+item.id}><button>Update</button></Link></td>

    </tr>
)
    })}
</tbody>:""

  }
</table>
   </div>
    
    </>
  )
}

export default Read