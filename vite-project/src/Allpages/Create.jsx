import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Create.css'; // Apna glass theme CSS yahan import kar

function Create() {
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let [city, setCity] = useState('');
    let [email, setEmail] = useState('');
    let navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post("https://crudoperation-1.onrender.com/userdetails", {
            name, age, city, email
        }).then(() => {
            navigate("/dashboard/read");
        });
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
                <form className="create-form-wrapper w-50 mx-auto" method="post" onSubmit={submit}>
                    <h2 className="text-center mb-4" style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Create New Record
                    </h2>

                    <div className="form-group mb-3">
                        <label>Name</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="form-group mb-3">
                        <label>Age</label>
                        <input type="number" className="form-control"
                            onChange={(e) => setAge(e.target.value)} />
                    </div>

                    <div className="form-group mb-3">
                        <label>City</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <div className="form-group mb-3">
                        <label>Email address</label>
                        <input type="email" className="form-control"
                            onChange={(e) => setEmail(e.target.value)} />
                        <small className="form-text">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="text-center">
                        <button type="submit">Create Data</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Create;
