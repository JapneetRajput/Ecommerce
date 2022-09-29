import React, {useState} from 'react'
import { Form, Button, Modal } from 'react-bootstrap';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function AddProductForm({show,handleClose}) {
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [description,setDescription] = useState("");
  const [category,setCategory] =useState("");
  // console.log(name);
  
  const collectionRef = collection(db, "Products");

  const addProduct =  () => {
    try {
      // console.log(name);
      // console.log(price);
      // console.log(category);
      // console.log(description);
     addDoc(collectionRef,
      {productName: name, 
        productPrice: price,  
        productCategory: category,
        productDesc: description,
        productImage: name});
   } catch (err) {
     alert(err)
   }
  }



  return (
   
  
    <>
      <Modal show={show} onHide={handleClose} centered > 
        <Modal.Header closeButton className="mx-2">
          <Modal.Title className="text-align">Add Product</Modal.Title>
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
          <Button onClick={addProduct} className="w-100 mb-4" type="submit">Add</Button>
        </Form></Modal.Body>
      </Modal>
    </>
  )
}

export default AddProductForm