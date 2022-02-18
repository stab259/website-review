import {Container, Row, Col, Card, Form, Button, Nav, Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import AdminNav from "./AdminNav";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditPost() {
    let {id} = useParams()
    let navigate = useNavigate()
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/ById/${id}`).then((response)=>{
            setTitle(response.data.title);
            setContent(response.data.postText);
        })
    },[])
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    const Edit = async (e) =>{
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("title",title)
        formData.append("content",content)
        axios.put(`http://localhost:3001/users/EditPost/${id}`,formData,{headers: {
            accessToken : localStorage.getItem("accessToken")
        }}).then((response)=>{
            navigate("/ViewAllPosts")
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
                                        Dinh Duong
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
                    <h1 class="h3 mb-2 text-gray-800">Edit Post</h1>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <Link to='/ViewAllPosts' class="m-0 font-weight-bold text-primary">Edit more posts?</Link>
                        </div>
                        <div class="card-body">
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md={8}>
                                    <Form id="writeReviewsForm">
                                    <Form.Group className="mb-4">
                                        <Form.Label className="label text-primary-8">Post Title</Form.Label>
                                        <Form.Control type="text" name="title" value= {title} onChange = {(e) => {setTitle(e.target.value);}}/>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="label text-primary-8">Post Image</Form.Label>
                                        <Form.Control type="file" name="image"  onChange = {saveFile}/>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="label text-primary-8">Post Content</Form.Label>
                                        <textarea name="post_content" id="summernote" cols="30" rows="10" class="form-control" style={{resize:"none"}} value= {content} onChange = {(e) => {setContent(e.target.value);}}></textarea>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Button type="submit" className="primary btn-primary" onClick={Edit}>Update Post</Button>
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
export default EditPost