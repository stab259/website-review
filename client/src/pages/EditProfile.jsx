import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap'
import {FaAngleRight, FaAngleDoubleRight, FaRegClock, FaArrowRight, FaCrosshairs} from 'react-icons/fa'


function EditProfile() {
  return (
    <div className="bg-image-form bg-image-profile">
        <Container>
             <Row className="py-5">

                <Col xl={10} className="mx-auto">

                    <div className="bg-white shadow rounded overflow-hidden ">
                        <div className="p-4 bg-dark">
                            <div className="media align-items-end profile-header pt-4">
                                <Row className="d-flex align-items-center">
                                <Col sm={3} className="d-flex justify-content-center">
                                    <div className="profile mr-3"><img src="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg&ga=GA1.2.2136114630.1641081600" alt="people" className="avatar avatar-lg p-1 flex-shrink-0 me-4" /></div>
                                </Col>
                                <Col sm={9} className="d-flex flex-column justify-content-center">
                                    <div className="media-body text-white">
                                        <h4 className="mt-0 mb-0">Phung Dinh Duong</h4>
                                        <p className="small"> <i className="fa fa-map-marker mr-2"></i>Da Nang, Viet Nam</p>
                                    </div>
                                </Col>
                                </Row>
                            </div>
                        </div>

                        <div className="bg-light p-4">
                            <Row className="d-flex align-items-center">
                                <Col sm={3} className="d-flex justify-content-center text-center align-items-center">
                                <Link to='/Profile'><h6 className="text-primary-9">Your Posts</h6></Link>
                                </Col>
                                <Col sm={9} className="d-flex justify-content-end text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item me-4">
                                            <h5 className="font-weight-bold mb-0 d-block">3</h5><small className="text-muted"> <i className="fa fa-picture-o mr-1"></i>Posts</small>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="font-weight-bold mb-0 d-block">20</h5><small className="text-muted"> <i className="fa fa-user-circle-o mr-1"></i>Likes</small>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>

                        <div className="py-4">
                            <Container>
                                <Form className="form-1">
                                    <div className="mb-5">
                                        <h2 className="text-primary">Edit Profile</h2>
                                    </div>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={3} className="label text-primary-8">Username</Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="text" name="username"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={3} className="label text-primary-8">First Name</Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="text" name="userFirstName"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={3} className="label text-primary-8">Last Name</Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="text" name="userLastName"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={3} className="label text-primary-8">Email</Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="email" name="userEmail"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm={3} className="label text-primary-8">Password</Form.Label>
                                        <Col sm={9}>
                                            <Form.Control type="password" name="userPassword"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-4" style={{marginTop:"3rem"}}>
                                        <Button type="submit" className="primary btn-primary" >Update Profile</Button>
                                    </Form.Group>
                                </Form>
                            </Container>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default EditProfile