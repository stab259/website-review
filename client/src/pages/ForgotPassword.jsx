import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {useState } from 'react'

function ForgotPassword() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const sendEmail = () => {
    const data = {email: email }
    axios.post("http://localhost:3001/Users/reset-password-email", data).then((response) => {

        if (response.data.error) {
            alert(response.data.error)
        }
        alert(response.data)
    })
}
  return (
    <div className="bg-image-form bg-image-reset-password">
      <Container className="py-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8} lg={6}>
            <Form className="text-center form-1">
              <div className="mb-5">
                <h2 className="text-primary">Forgot Password?</h2>
              </div>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Enter your email address</Form.Label>
                  <Form.Control type="email" name="email" onChange={(e) => {setEmail(e.target.value);}}/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Button type="submit" className="primary btn-primary" onClick={sendEmail}>Reset Password</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ForgotPassword