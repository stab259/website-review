import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

function Registration() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    let navigate = useNavigate();
    const signup = () => {
        const data = { user_email: emailReg, username: usernameReg, user_password: passwordReg }
        axios.post("http://localhost:3001/users", data).then((response) => {
            alert(response.data)
            navigate('/Login')

        })
    }
    const policy = <span>By creating an account you agree to our <a href='#'>Terms & Privacy</a></span>;

    return (
        <Container fluid className="px-3">
            <div class="row min-vh-100 d-flex justify-content-center">
                <div class="login col-md-12 col-lg-10 col-xl-8 d-flex align-items-center justify-content-center">
                    <div class="w-100 py-5 px-md-5 px-xxl-6 position-relative">
                        <div className="mb-5">
                            <h2 className='text-primary'>Sign up</h2>
                            <p className='text-muted'>Please fill in this form to create an account.</p>
                        </div>
                        <Form>
                            <Form.Group class="mb-4" controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="string" placeholder="Account name" required onChange={(e) => {
                                    setUsernameReg(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group class="mb-4" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required onChange={(e) => {
                                    setEmailReg(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group class="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required required minlength="3" maxlength="20" />
                            </Form.Group>
                            <Form.Group class="mb-4" controlId="formBasicPassword">
                                <Form.Label>Confirm your password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required required minlength="3" maxlength="20"
                                onChange={(e) => {
                                    setPasswordReg(e.target.value);
                                }} />
                            </Form.Group>
                            <div className='d-grid my-3'>
                                <Button className="btn-lg primary btn-primary" type="submit" onClick={signup}>
                                    Sign up
                                </Button>
                            </div>
                            <Form.Group className="mb-4" controlId="formBasicCheckbox">
                                <Form.Check className="text-muted" type="checkbox" label={policy} />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Registration
