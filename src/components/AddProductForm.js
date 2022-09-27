import React, {useState} from 'react'
import { Form, Button, Modal } from 'react-bootstrap';

function AddProductForm({show,handleClose}) {
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [description,setDescription] = useState("");



  return (
    <>
      <Modal show={show} onHide={handleClose} centered > 
        <Modal.Header closeButton className="mx-2">
          <Modal.Title className="text-align">Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-2">
          <Form>
          <Form.Group className="mb-2" id="Name">
            <Form.Label >Name</Form.Label>
            <Form.Control type="text" required onChange={e=> setName(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" id="Price">
            <Form.Label >Price</Form.Label>
            <Form.Control type="number" required onChange={e=> setPrice(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" name="address" onChange={e=> setDescription(e.target.value)}/>
          </Form.Group>
          <Button className="w-100 mb-4" type="submit">Add</Button>
        </Form></Modal.Body>
      </Modal>
    </>
  )
}

export default AddProductForm