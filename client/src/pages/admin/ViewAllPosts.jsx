import {Container, Row, Col, Card, Form, Button, Nav, Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import AdminNav from "./AdminNav";


function ViewAllPosts() {
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
                                            <th>Title</th>
                                            <th>Content</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td><Link to='/EditPost' className="text-green">Edit</Link></td>
                                            <td><a href="#" className="text-red">Delete</a></td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td><Link to='/EditPost' className="text-green">Edit</Link></td>
                                            <td><a href="#" className="text-red">Delete</a></td>
                                        </tr>
                                        <tr>
                                            <td>Ashton Cox</td>
                                            <td>Junior Technical Author</td>
                                            <td><Link to='/EditPost' className="text-green">Edit</Link></td>
                                            <td><a href="#" className="text-red">Delete</a></td>
                                        </tr>
                                        <tr>
                                            <td>Cedric Kelly</td>
                                            <td>Senior Javascript Developer</td>
                                            <td><Link to='/EditPost' className="text-green">Edit</Link></td>
                                            <td><a href="#" className="text-red">Delete</a></td>
                                        </tr>
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