import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputGroup from '../components/InputGroup'

function Details() {
 
  const [form, setForm] = useState({});
  const {id} = useParams();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
    
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`/api/users/${id}`, form)
    .then(res=>{
      navigate('/')
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  useEffect(() => 
     async () => {
    await axios.get(`/api/users/${id}`).then((res) => {
      setForm(res.data);
    });
  }, [id]);
  return (
    <div className="container mt-4 col-12 col-lg-4">
        <form onSubmit={onSubmitHandler}>
          <InputGroup
            label="Email"
            type="text"
            name="Email"
            onChangeHandler={onChangeHandler}
            errors={errors.Email}
            value={form.Email}
          />
          <InputGroup
            label="LastName"
            type="text"
            name="LastName"
            onChangeHandler={onChangeHandler}
            errors={errors.LastName}
            value={form.LastName}
          />
          <InputGroup
            label="FirstName"
            type="text"
            name="FirstName"
            onChangeHandler={onChangeHandler}
            errors={errors.FirstName}
            value={form.FirstName}
          />
          <InputGroup
            label="Age"
            type="text"
            name="Age"
            onChangeHandler={onChangeHandler}
            errors={errors.Age}
            value={form.Age}
          />
          <button className="btn btn-primary" type="submit">Add user</button>
        </form>
      </div>
  )
}

export default Details
