import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const Registration=()=>{
      const [input,setInput]=useState({});
      const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput((values)=>({...values,[name]:value}))
      }
      const handleSubmit=(e)=>{
        e.preventDefault();
        let api="http://localhost:8000/user/usersave";
        axios.post(api,input).then((res)=>{
            alert("Registration Successful");
        })
      }
    return(
        <>
        <div style={{width:"500px",height:"800px",margin:"auto",marginTop:"50px"}}>
            <h1>User Registration</h1>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' value={input.email} onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={input.password} onChange={handleInput} />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Registration;