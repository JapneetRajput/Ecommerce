import React,{useEffect, useState} from 'react'
import {Container,Button,Form} from 'react-bootstrap';
import AddProductForm from '../components/AddProductForm';
import ComponentList from '../components/ProductRow';
import EditProductForm from '../components/EditProductForm';


function AdminPanel() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [products,setProducts] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");


  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
      <Container className="d-flex align-items-center pt-5          justify-content-start flex-column" style={{minHeight:"500px",maxWidth: "700px"}}>
        <h2 >Admin Panel</h2>
        <Button className="w-100 mb-4 mt-4" variant="primary" onClick={handleShowAdd}>
        Add Product
      </Button>
        <Form.Group className="mb-2 w-100" id="Name">
            <Form.Control type="text" required onChange={e=> setSearchTerm(e.target.value)} placeholder="Search for Product Name"></Form.Control>
          </Form.Group>
        <AddProductForm show={showAdd} handleClose={handleCloseAdd}></AddProductForm>
        <EditProductForm show={showEdit} handleClose={handleCloseEdit}></EditProductForm>
        <ComponentList className="w-100" handleShow={handleShowEdit}></ComponentList>
        <ComponentList className="w-100" handleShow={handleShowEdit}></ComponentList>
        <ComponentList className="w-100" handleShow={handleShowEdit}></ComponentList>
        <ComponentList className="w-100" handleShow={handleShowEdit}></ComponentList>


        {/* Search Functionality */}
        {/* {products.filter(product => {
          if(searchTerm === "") {
            return product;
          } else if(product.name.toLowerCase().include(searchTerm.toLowerCase())) {
            return product;
          }
        }).map(product => <ComponentList className="w-100" handleShow={handleShowEdit}></ComponentList>)} */}


    </Container>
  )
}

export default AdminPanel;