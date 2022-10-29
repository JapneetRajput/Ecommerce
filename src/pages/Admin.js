import React,{useRef,useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Form,Button,Card,Container} from 'react-bootstrap';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// import { db } from '../firebase';
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";

function Admin() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate()

  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const userr= auth.currentUser;

  if(!userr){
    navigate('../adminpanel')
  }

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate('../adminpanel')
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const [users,setUsers] = useState([]);

  // const collectionRef = collection(db, "Users");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(collectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);
  // const handleLogin =() =>{
  //   // console.log(users)
  //   users.map(user => 
  //     {
  //       if(user.email==email&&user.password==password){
  //         // console.log("Logged in successfully!")
  //         localStorage.setItem('isLoggedin',true);
  //         navigate('../adminpanel')
  //         // alert("localStorage.getItem('isLoggedIn')");
  //       }
  //     }
  //   );
  // }
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
      <div className="w-100" style={{ maxWidth: "450px"}}>

      <Card style={{minHeight:"40vh"}}>
       <Card.Body>
        <h2 className = "text-center mt-3 mb-3">Admin Login</h2>
        <Form>
          <Form.Group className ="mb-2" id="email">
            <Form.Label >Email</Form.Label>
            <Form.Control  type ="email" required onChange={e=> setEmail(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group className ="mb-4"  id="password">
            <Form.Label >Password</Form.Label>
            <Form.Control type ="password" required onChange={e=> setPassword(e.target.value)}></Form.Control>
          </Form.Group>
          <Button className="w-100 mb-4" onClick={handleLogin}>Login</Button>
        </Form>
       </Card.Body>
      </Card>
      </div>
    </Container>
  )
}

export default Admin;
