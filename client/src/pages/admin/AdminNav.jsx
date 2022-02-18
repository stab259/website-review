import {Container, Row, Col, Card, Form, Button, Nav, Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {FaSearch, FaUserAlt} from 'react-icons/fa'

function AdminNav() {
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
                <h1 className="sidebar-heading border-bottom bg-light text-primary-9 my-0 py-3">Admin RT</h1>
                <div className="list-group list-group-flush">
                    <a as={Link} to='/Admin' className="list-group-item list-group-item-action list-group-item-light p-3">
                        <Button id="dropdown-link-light">Dashboard</Button>
                    </a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" >
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-link-light">
                                Posts
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to='/ViewAllPosts'>View All Posts</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item>Add Post</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" >
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-link-light">
                                Users
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to='/ViewAllUsers'>View All Users</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item>Add User</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </a>
                </div>
    </div>
  )
}

export default AdminNav