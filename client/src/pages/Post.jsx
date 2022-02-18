import {Container, Row, Col} from 'react-bootstrap'
import Widget from '../component/Sidebar'
import PostDetails from '../component/PostDetails'



function Post() {
  return (
    <Container className="py-6">
        <Row>
            <Col md={8}>
                <PostDetails />
            </Col>
            <Col md={4} className="pl-md-4">
                <Widget />
            </Col>
        </Row>
    </Container>
  )
}

export default Post