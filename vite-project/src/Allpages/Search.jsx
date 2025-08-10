import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Search.css'; // styling ka import

function Search() {
  let [val, setVal] = useState('');
  let [finaldata, setFinaldata] = useState([]);
  let Navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios.get(`https://crudoperation-1.onrender.com/userdetails?name=${val}`).then((res) => {
      setFinaldata(res.data);
    });
  };

  const deletedata = (data) => {
    axios.delete(`https://crudoperation-1.onrender.com/userdetails/${data}`).then(() => {
      Navigate('/dashboard/read');
    });
  };

  return (
    <>
      {/* Search Bar */}
      <form className="search-form" onSubmit={submit}>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search by name"
          onChange={(e) => setVal(e.target.value)}
        />
        <button type="submit" className="search-btn">Search</button>
      </form>

      {/* Table */}
      <div className="row p-4">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          {finaldata.length > 0 ? (
            <tbody>
              {finaldata.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => deletedata(item.id)}>Delete</button>
                  </td>
                  <td>
                    <Link to={`/dashboard/update/${item.id}`}>
                      <button>Update</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            ''
          )}
        </table>
      </div>
    </>
  );
}

export default Search;
