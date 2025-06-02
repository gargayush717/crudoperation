import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';

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
   <Menu/>
   <Outlet/>
   <input type="submit" value="Logout"  onClick={handlelogout}/>
   </>
  )
}

export default Dashboard