import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ForgotPassword() {
  return (
    <div className="bg-image-form bg-image-reset-password">
      <Container className="py-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8} lg={6}>
            <Form id="writeReviewsForm" className="text-center">
              <div className="mb-5">
                <h2 className="text-primary">Forgot Password?</h2>
              </div>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Enter your email address</Form.Label>
                  <Form.Control type="email" name="email"/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Button type="submit" className="primary btn-primary" as={Link} to='/ResetPassword'>Reset Password</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ForgotPassword