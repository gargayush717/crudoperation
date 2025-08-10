import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import './Dashboard.css';

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
  <div className="dashboard-wrapper">
    <Outlet/>
    <input type="submit" value="Logout" onClick={handlelogout}/>
  </div>
</>
  )
}

export default Dashboard