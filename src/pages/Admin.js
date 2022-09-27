import React,{useRef,useState} from 'react'
import {Form,Button,Card,Container} from 'react-bootstrap';

function Admin() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  console.log(email);
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
      <div className="w-100" style={{ maxWidth: "450px"}}>

      <Card style={{minHeight:"40vh"}}>
       <Card.Body>
        <h2 className = "text-center mt-3 mb-3">Admin Login</h2>
        <Form>
          <Form.Group className ="mb-2" id="email">
            <Form.Label >Email</Form.Label>
            <Form.Control  type ="email" required onChange={e=> setEmail(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group className ="mb-4"  id="password">
            <Form.Label >Password</Form.Label>
            <Form.Control type ="password" required onChange={e=> setPassword(e.target.value)}></Form.Control>
          </Form.Group>
          <Button className="w-100 mb-4" type="submit">Login</Button>
        </Form>
       </Card.Body>
      </Card>
      </div>
    </Container>
  )
}

export default Admin;
