import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
const navigate=useNavigate();

 useEffect(() => {
    const userId = sessionStorage.getItem('userid');
    const authenticate = () => {
      if (!userId) {
        navigate('/');
      }

   
     
    };
    authenticate();
  }, [navigate]);

    const handlelogout=()=>{
    sessionStorage.removeItem("userid");
    navigate("/")
   }
 

  return (
   <>
   <h1>Dashboard</h1>
   <input type="submit" value="Logout"  onClick={handlelogout}/>
   </>
  )
}

export default Dashboard