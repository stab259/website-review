import {Container, Row, Col, Form, Button} from 'react-bootstrap'

function ResetPasword() {
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
                  <Form.Control type="password" name="passwordConfirm"/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Button type="submit" className="primary btn-primary">Change</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ResetPasword