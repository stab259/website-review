import {Container, Row, Col, Card, Form, Button, Nav, Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import AdminNav from "./AdminNav";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

function EditUser() {
    let {id} = useParams()
    const { authState, setAuthState } = useContext(AuthContext);
    const [userObjects, setUserObjects] = useState([]);
    const [username, setUsername] = useState("")
    const [lastname, setLastname] = useState("")
    const [firstname, setFirstname] = useState("")
    const [password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [role, setRole] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3001/users/ById/${id}`).then((response)=>{
            setUserObjects(response.data);
        })
    },[])
    const Edit = () =>{
        const data = {username: username, user_lastname: lastname, user_firstname: firstname, user_password: password, user_role: role}
        axios.put(`http://localhost:3001/users/EditUser/${id}`,data).then((response)=>{
        })
    }
  return (
    <>
        <div className="d-flex" id="wrapper">
            <AdminNav />
            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item active"><Link to='/' className="nav-link">Home</Link></li>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-link-light">
                                        <FaUserAlt className="me-2" style={{transform:"translateY(-2px)"}}/>
                                        {authState.username}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to='/'>Profile</Dropdown.Item>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item>Sign out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <h1 class="h3 mb-2 text-gray-800">Edit User</h1>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <Link to='/ViewAllPosts' class="m-0 font-weight-bold text-primary">Edit more users?</Link>
                        </div>
                        <div class="card-body">
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md={8}>
                                    <Form id="writeReviewsForm">
                                    <Form.Group className="mb-4">
                                        <Form.Label className="label text-primary-8">Username</Form.Label>
                                        <Form.Control type="text" name="username"  value={userObjects.username}  onChange= {e => setUsername(e.target.value)}></Form.Control>
                                    </Form.Group>
                                    {/* <Form.Group className="mb-4">
                                        <Form.Label className="label text-primary-8">Ava</Form.Label>
                                        <Form.Control type="file" name="image"/>
                                    </Form.Group> */}
                                    <Form.Group className="mb-4">
                                        <Form.Label className="label text-primary-8">First Name</Form.Label>
                                        <Form.Control type="text" name="userFirstName" value= {userObjects.user_firstname} onChange= {e => setFirstname(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="label text-primary-8">Last Name</Form.Label>
                                        <Form.Control type="text" name="userLastName" value= {userObjects.user_lastname } onChange= {e => setLastname(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="label text-primary-8">Email</Form.Label>
                                        <Form.Control type="text" name="userPassword" value= {userObjects.user_email} onChange= {e => setEmail(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="label text-primary-8">Role</Form.Label>
                                        <Form.Control type="text" name="userPassword" value= {userObjects.user_role} onChange= {e => setRole(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="label text-primary-8">Password</Form.Label>
                                        <Form.Control type="password" name="userPassword" value= {userObjects.user_password} onChange= {e => setPassword(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Button type="submit" className="primary btn-primary" onClick={Edit}>Update User</Button>
                                    </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default EditUser