import React from 'react'
import {ListGroup,Button} from 'react-bootstrap';
// import Image from '../images/img_first.png';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function ProductRow({productName,productPrice,handleShow,userDoc}) {
  const deleteUser = async () => {
    await deleteDoc(userDoc);
  }

  return (
    <>
      <ListGroup key='sm' horizontal='sm' className="my-2 w-100">
        <ListGroup.Item style={{flex:1}}>
          Product Name:{productName}
          <br></br>
          Product Price:{productPrice}
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="success" onClick={handleShow}>Edit</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="danger" onClick={deleteUser}>Delete</Button>
        </ListGroup.Item>
      </ListGroup>
  </>
  )
}

export default ProductRow;