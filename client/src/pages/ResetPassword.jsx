import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';
import {useState } from 'react'


function ResetPasword() {
  let {token} = useParams()
  let navigate = useNavigate()
  const [newPassword, setNewPassword] = useState("");
  const Reset = () => {
    const data = {token: token, newPassword: newPassword }
    axios.post("http://localhost:3001/Users/reset-password", data).then((response) => {

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
            <Form id="writeReviewsForm" className="text-center">
              <div className="mb-5">
                <h2 className="text-primary">Reset Password</h2>
              </div>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">New Password</Form.Label>
                  <Form.Control type="password" name="passwordNew"/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Confirm Password</Form.Label>
                  <Form.Control type="password" name="passwordConfirm" onChange={(e) => {setNewPassword(e.target.value);}}/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Button type="submit" className="primary btn-primary" onClick={Reset}>Change</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ResetPasword