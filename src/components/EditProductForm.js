import React,{useState} from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import {updateDoc} from "firebase/firestore";

function EditProductForm({show,handleClose,productName,productPrice,productDes,productCat,userDoc}) {
  
  const [name,setName] = useState(productName);
  const [price,setPrice] = useState(Number(productPrice));
  const [description,setDescription] = useState(productDes);
  const [category,setCategory] =useState(productCat);
  const updateProduct = async() => {
    const newFields = {productName: name, productPrice: price, productDesc: description, productCategory: category};
    await updateDoc(userDoc,newFields)
  }
  return (
    // <div>
    //   <Modal show={show} onHide={handleClose} centered > 
    //     <Modal.Header closeButton className="mx-2">
    //       <Modal.Title className="text-align">Edit Form</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body className="mx-2">
    //       <Form>
    //       <Form.Group className="mb-2" id="Name">
    //         <Form.Label >Name</Form.Label>
    //         <Form.Control type="email" required></Form.Control>
    //       </Form.Group>
    //       <Form.Group className="mb-4" id="Price">
    //         <Form.Label >Price</Form.Label>
    //         <Form.Control type="number" required></Form.Control>
    //       </Form.Group>
    //       <Form.Group className="mb-4">
    //         <Form.Label>Product Image</Form.Label>
    //         <Form.Control type="file" />
    //       </Form.Group>
    //       <Form.Group className="mb-4">
    //         <Form.Label>Description</Form.Label>
    //         <Form.Control as="textarea" rows="3" name="address" />
    //       </Form.Group>
    //       <Button className="w-100 mb-4" type="submit">Edit</Button>
    //     </Form></Modal.Body>
    //   </Modal>
    // </div>
    <>
      <Modal show={show} onHide={handleClose} centered > 
        <Modal.Header closeButton className="mx-2">
          <Modal.Title className="text-align">Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-2">
          <Form >
          <Form.Group className="mb-2" id="Name">
            <Form.Label >Name</Form.Label>
            <Form.Control type="text" name="Name" required onChange={e=> setName(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2" id="Price">
            <Form.Label >Price</Form.Label>
            <Form.Control type="number" name="Price" required onChange={e=> setPrice(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2" id="Category">
            <Form.Label >Category</Form.Label>
            <Form.Control type="text" name="Category" required onChange={e=> setCategory(e.target.value)}></Form.Control>
          </Form.Group>
          {/* <Form.Group className="mb-4">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group> */}
          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" name="Description" required onChange={e=> setDescription(e.target.value)}/>
          </Form.Group>
          <Button onClick={updateProduct} className="w-100 mb-4" type="submit">Edit</Button>
        </Form></Modal.Body>
      </Modal>
    </>
  )
}

export default EditProductForm