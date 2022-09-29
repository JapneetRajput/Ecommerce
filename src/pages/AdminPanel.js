import React,{useEffect, useState} from 'react';
import {Container,Button,Form} from 'react-bootstrap';
import AddProductForm from '../components/AddProductForm';
import ComponentList from '../components/ProductRow';
import EditProductForm from '../components/EditProductForm';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


function AdminPanel() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [searchTerm,setSearchTerm] = useState("");


  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [products,setProducts] = useState([]);
  const collectionRef = collection(db, "Products");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(collectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);

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
        { products.map((product) => {
            const userDoc = doc(db,"Products",product.id)
            return( 
              <>
            <ComponentList className="w-100" handleShow={handleShowEdit} productName={product.productName} productPrice={product.productPrice} userDoc={userDoc} ></ComponentList>
            <EditProductForm show={showEdit} handleClose={handleCloseEdit} userDoc={userDoc}></EditProductForm>
            </>)
        })}
      


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