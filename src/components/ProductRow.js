import React, {useState} from 'react'
import {ListGroup,Button} from 'react-bootstrap';
import EditProductForm from './EditProductForm';
// import Image from '../images/img_first.png';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function ProductRow({productName,productPrice,productCat,productDes,userDoc}) {
  const deleteUser = async () => {
    await deleteDoc(userDoc);
  }
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  

  return (
    <>
      <ListGroup key='sm' horizontal='sm' className="my-2 w-100">
        <ListGroup.Item style={{flex:1}}>
          Product Name:{productName}
          <br></br>
          Product Price:{productPrice}
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="success" onClick={handleShowEdit}>Edit</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="danger" onClick={deleteUser}>Delete</Button>
        </ListGroup.Item>
      </ListGroup>
      <EditProductForm show={showEdit} handleClose={handleCloseEdit} productName={productName} productPrice={productPrice} productDes={productDes} productCat={productCat} userDoc={userDoc}></EditProductForm>
  </>
  )
}

export default ProductRow;