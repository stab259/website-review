import {Container, Row, Col, Card, Form, Button, Nav, Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import AdminNav from "./AdminNav";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Chart } from "react-google-charts";

function EditPost() {
    const data = [
        ["Text", "Count"],
        ["post", 10],
        ["user", 5],
        ["confirmed user", 2],
        ["admin", 1],
        ["approved post", 3],
        ["unapproved post", 6]
      ];
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
                <Chart
                    chartType="ColumnChart"
                    data={data}
                    width="100%"
                    height="650px"
            
                />
            </div>
        </div>
    </>
  )
}
export default EditPost