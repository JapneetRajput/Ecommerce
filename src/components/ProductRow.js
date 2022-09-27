import React from 'react'
import {ListGroup,Button} from 'react-bootstrap';
// import Image from '../images/img_first.png';

function ProductRow({productName,productID,handleShow}) {
  const handleDelete = () => {
    
  }

  return (
    <>
      <ListGroup key='sm' horizontal='sm' className="my-2 w-100">
        <ListGroup.Item style={{flex:1}}>
          Product Name:{productName}
          <br></br>
          Product ID:{productID}
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="success" onClick={handleShow}>Edit</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </ListGroup.Item>
      </ListGroup>
  </>
  )
}

export default ProductRow;