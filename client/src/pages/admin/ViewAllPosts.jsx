import {Container, Row, Col, Card, Form, Button, Nav, Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import AdminNav from "./AdminNav";
import { useState, useEffect } from "react";
import axios from "axios";


function ViewAllPosts() {
    function refreshPage() {
        window.location.reload(false);
      }
    const [listofPosts, setListofPosts] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/posts`,{headers: {
            accessToken : localStorage.getItem("accessToken")
        }}).then((response)=>{
            setListofPosts(response.data.listOfPosts);
        })
    },[])
    const Delete = (id) =>{
        axios.delete(`http://localhost:3001/posts/${id}`).then((response)=>{
            refreshPage()
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
                    <h1 class="h3 mb-2 text-gray-800">View All Posts</h1>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">All Posts</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Content</th>
                                            <th>Image</th>
                                            <th>Username</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {listofPosts.map((value)=>{
                                        return(
                                            <tr>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.postText}</td>
                                            <td><img src={value.imgsrc} alt="image" width={100}/> </td>
                                            <td>{value.username}</td>
                                            <td><Link to={'/EditPost/' + value.id} className="text-green">Edit</Link></td>
                                            <td><Link to="/ViewAllUsers" className="text-red" onClick={() => {Delete(value.id)}}>Delete</Link></td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default ViewAllPosts