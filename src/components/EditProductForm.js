import React from 'react'
import { Form, Button, Modal } from 'react-bootstrap';

function EditProductForm({show,handleClose}) {
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered > 
        <Modal.Header closeButton className="mx-2">
          <Modal.Title className="text-align">Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-2">
          <Form>
          <Form.Group className="mb-2" id="Name">
            <Form.Label >Name</Form.Label>
            <Form.Control type="email" required></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" id="Price">
            <Form.Label >Price</Form.Label>
            <Form.Control type="number" required></Form.Control>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" name="address" />
          </Form.Group>
          <Button className="w-100 mb-4" type="submit">Edit</Button>
        </Form></Modal.Body>
      </Modal>
    </div>
  )
}

export default EditProductForm