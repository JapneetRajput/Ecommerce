import React, {useState} from 'react'
import { Form, Button, Modal } from 'react-bootstrap';
import { db,storage } from '../firebase';
import { collection,addDoc, serverTimestamp,} from "firebase/firestore";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import { useNavigate } from 'react-router-dom';

function AddProductForm({show,handleClose}) {
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [description,setDescription] = useState("");
  const [category,setCategory] =useState("");
  const [file,setFile] = useState("");

  // console.log(name);
  
  const collectionRef = collection(db, "Products");
  const fname = new Date().getTime + file.name;
  const storageRef = ref(storage,`images/${fname}`);


  const addImage =  async () => {
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          console.log(error);
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            addProduct(downloadURL);
          });
        }
      );   
  }

  const addProduct =  async (url) => {
    try {
      await addDoc(collectionRef,
        {productName: name, 
          productPrice: price,  
          productCategory: category,
          productDesc: description,
          timestamp: serverTimestamp(),
          productImage: url});
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
          <Form>
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
          <Form.Group className="mb-4">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" name="File" required onChange={(e) => setFile(e.target.files[0])}/>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" name="Description" required onChange={e=> setDescription(e.target.value)}/>
          </Form.Group>
          <Button onClick={addImage} className="w-100 mb-4">Add</Button>
        </Form></Modal.Body>
      </Modal>
    </>
  )
}

export default AddProductForm
