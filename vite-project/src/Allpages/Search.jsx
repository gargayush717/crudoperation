import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Search() {
  let [val,setval]=useState();
  let [finaldata,setfinaldata]=useState();
  let Navigate = useNavigate();
  const submit=(e)=>{
    e.preventDefault();
    axios.get("https://crudoperation-1.onrender.com/userdetails?name="+val).then((res)=>{
setfinaldata(res.data);
    })
    
  }
   const deletedata=(data)=>{
          axios.delete("https://crudoperation-1.onrender.com/userdetails/"+data).then((res)=>{
            Navigate('/dashboard/read')
          })
        }

  return (
    <>
    <form className="row g-3" onSubmit={submit}>
  <div className="col-auto">
    <input type="ptext" className="form-control" placeholder="Search name" onChange={(e)=>{
setval(e.target.value)
    }}/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Search</button>
  </div>
</form>
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
          <th scope="col">Update</th>
        
    </tr>
  </thead>
  {finaldata?<tbody>
    {finaldata.map((item)=>{
return(
   <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.city}</td>
        <td>{item.email}</td>
        <td><button  onClick={()=>deletedata(item.id)}>Delete</button></td>
        <td><Link to={"/dashboard/update/"+item.id}><button>Update</button></Link></td>
       

    </tr>
)
    })}
  </tbody>:""}
  </table>
    </div>
    </>
  )
}

export default Search