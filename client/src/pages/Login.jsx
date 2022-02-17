import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../helpers/AuthContext';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { AuthState, setAuthState } = useContext(AuthContext);
    let navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const login = () => {

        const data = { username: username, user_password: password }
        axios.post("http://localhost:3001/Users/login", data).then((response) => {

            if (response.data.error) {
                alert(response.data.error)
            }
            alert(response.data)
            localStorage.setItem("accessToken", response.data.token)
            setAuthState({
                username: response.data.username,
                id: response.data.id,
                status: true,
            });
        })
        navigate('/')
    }
    return (
        <Container fluid className="px-3">
            <div className="row min-vh-100 d-flex justify-content-center">
                <div className="login col-md-12 col-lg-10 col-xl-8 d-flex align-items-center justify-content-center">
                    <div className="w-100 py-5 px-md-5 px-xxl-6 position-relative">
                        <div className="mb-5">
                            <h2 className="text-primary">Sign in</h2>
                        </div>
                        <Form>
                            <Form.Group class="mb-4" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="string" required onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group class="mb-4" controlId="formBasicPassword">
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                    </Col>
                                    <Col className="col-auto">
                                        <Form.Text>
                                            <Link to='/ForgotPassword' className='small text-primary'>Forgot password?</Link>
                                        </Form.Text>
                                    </Col>
                                </Row>
                                <Form.Control type="password" required onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicCheckbox">
                                <Form.Check className="text-muted" type="checkbox" label="Remember me" />
                            </Form.Group>
                            <div className='d-grid my-3'>
                                <Button className="btn-lg primary btn-primary" type="submit" onClick={login}>
                                    Login
                                </Button>
                            </div>
                            <Form.Text>
                                <p className='text-center'>
                                    Don't you have an account?
                                    <Link to="/Signup" className='text-primary'> Sign up</Link>
                                </p>
                            </Form.Text>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login
