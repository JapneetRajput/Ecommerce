import React,{useEffect, useState} from 'react';
import {Container,Button,Form} from 'react-bootstrap';
import AddProductForm from '../components/AddProductForm';
import ComponentList from '../components/ProductRow';
import EditProductForm from '../components/EditProductForm';
import { db } from '../firebase';
import {
  collection,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { auth } from '../firebase';


function AdminPanel() {
  const [showAdd, setShowAdd] = useState(false);
  const [searchTerm,setSearchTerm] = useState("");

  const user = auth.currentUser;

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  

  const [products,setProducts] = useState([]);
  const collectionRef = collection(db, "Products");
  
  useEffect(() => {
      const unsubscribe = onSnapshot(collectionRef, (snapshot) => { 
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    return ()=>{
      unsubscribe();
    }
  }, []);
  
  if(user){
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
          {products.filter(product => {
            if(searchTerm === "") {
              return product;
            } else if(product.productName.toLowerCase().includes(searchTerm.toLowerCase())) {
              return product;
            }
          }).map((product) => {
              const userDoc = doc(db,"Products",product.id)
              return( 
                <>
              <ComponentList className="w-100" productName={product.productName} productPrice={product.productPrice} productCat={product.productCategory} productDes={product.productDesc} userDoc={userDoc} fileName={product.fileName} ></ComponentList>
              </>)
          })}
      </Container>
    )
  }
  else{
    return(
      <>Not authorised</>
      
    )
  }
}

export default AdminPanel;