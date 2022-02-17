import {Container, Row, Col, Form, Button} from 'react-bootstrap'

function WriteReviews() {
  return (
    <div className="bg-image-form bg-image-write-reviews">
      <Container className="py-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8}>
            <Form id="writeReviewsForm">
              <div className="mb-5">
                <h2 className="text-primary">Write a Review</h2>
              </div>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Post Title</Form.Label>
                  <Form.Control type="text" name="title"/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Category</Form.Label>
                  <Form.Select name="post_category">
                    <option value="travel">travel</option>
                  </Form.Select>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Post Image</Form.Label>
                  <Form.Control type="file" name="image"/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Post Tags</Form.Label>
                  <Form.Control type="text" name="post_tags"/>
              </Form.Group>
              <Form.Group className="mb-4">
                  <Form.Label className="label text-primary-8">Post Content</Form.Label>
                  <textarea name="post_content" id="summernote" cols="30" rows="10" class="form-control"></textarea>
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
export default WriteReviews