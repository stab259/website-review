import {Container, Row, Col, Form, Button} from 'react-bootstrap'

function ResetPassword() {
  return (
    <div className="bg-image-form">
      <Container className="py-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8}>
            <Form id="writeReviewsForm">
              <div className="mb-5">
                <h2 className="text-primary">Forgot Password?</h2>
              </div>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Post Title</Form.Label>
                  <Form.Control type="text" name="title"/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Button type="submit" className="primary btn-primary">Publish Post</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ResetPassword