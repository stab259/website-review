import {Container, Row, Col} from 'react-bootstrap'
import Comments from './Comments'
import CommentForms from './CommentForms'

function PostDetails() {
  return (
    <section>
        <Container fluid className="px-0">
            <Row>
                <Col xl={11} lg={12} className="mr-auto">
                    <h1 className="py-3 mb-2 fw-dark">First time to Da Nang, where to live</h1>
                    <p className="py-3 mb-3 text-muted fw-light">
                        <a href="#">
                            <img src="https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg" alt="people" className="avatar p-1 me-2" />
                        </a>
                        Written by
                        <a href="#" className="fw-bold"> Shakira</a>
                        <span className="mx-1"> | </span>
                        February 17, 2022 in 
                        <a href="#"> Stay</a>
                        <span className="mx-1"> | </span>
                        <a href="#" className="text-muted">3 comments</a>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xl={11} lg={12} className="mr-auto">
                    <div className="text-content">
                        <p>
                            <img src="https://images.unsplash.com/photo-1601972888880-3ad2df3ee0a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHx2aWV0bmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="stay" className="img-fluid" />
                        </p>
                        <p className='text-muted'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque nec egestas purus, eu cursus augue. 
                            Donec euismod, dolor faucibus maximus pulvinar, turpis diam tristique nunc, a imperdiet lorem ex non enim. 
                            In hac habitasse platea dictumst. 
                            Phasellus finibus mi mollis ultricies posuere. Mauris pharetra orci et nulla convallis, ac sodales arcu elementum. 
                            Vestibulum id leo nunc. In hac habitasse platea dictumst. 
                            Etiam vehicula erat risus, vitae ultrices nulla aliquam eu. 
                            Morbi luctus pulvinar odio a hendrerit. Nam et turpis nibh. 
                            Nunc sit amet velit tellus. 
                            Vestibulum risus orci, molestie ut luctus et, commodo eu nisi. In ac hendrerit orci. 
                            In hac habitasse platea dictumst. 
                            Fusce facilisis, velit vitae ultrices lacinia, leo ex consectetur dolor, a dictum neque neque sed leo.
                        </p>
                    </div>
                    <hr/>
                    <Comments />
                    <CommentForms />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default PostDetails