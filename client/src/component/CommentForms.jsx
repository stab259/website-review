import {Container, Row, Col, Button, Form, Fade} from 'react-bootstrap'
import {useState} from 'react'

function CommentForms() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-5">
      <Button onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="leaveComment">
        Leave a comment
      </Button>
      <Fade in={open}>
        <div className="mt-4" id="leaveComment">
          <h5 className="mb-4">Leave a comment</h5>
          <form className="form" id="comment-form">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className='mb-4'>
              <Form.Label>Comment</Form.Label>
              <textarea name="comment" className="form-control" rows="4"></textarea>
            </Form.Group>
            <Button type="submit">Comment</Button>
          </form>
        </div>
      </Fade>
    </div>
  )
}
export default CommentForms