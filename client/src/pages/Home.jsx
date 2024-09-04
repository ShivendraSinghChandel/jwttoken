import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
const Home=()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    const api="http://localhost:8000/user/userlogin";
    axios.post(api,{email:email,password:password}).then((res)=>{
      console.log(res);
    })
  }
    return(
        <>
        <div style={{width:"500px",height:"600px",margin:"auto",marginTop:"50px"}}>
            <h1>User Login</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.password)}}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Home;