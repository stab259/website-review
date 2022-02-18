import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap'
import {FaAngleRight, FaAngleDoubleRight, FaRegClock, FaArrowRight, FaCrosshairs} from 'react-icons/fa'


function Profile() {
  return (
    <div className="bg-image-form bg-image-profile">
    <Row className="py-5 px-4">

      <Col xl={10} className="mx-auto">

        <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 bg-dark">
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

            <Row className="bg-light p-4 d-flex align-items-center">
              <Col sm={2} className="d-flex justify-content-end text-center align-items-center">
                <Link to='/EditProfile'><h6 className="text-primary-9">Edit Profile</h6></Link>
              </Col>
              <Col sm={10} className="d-flex justify-content-end text-center">
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

            <div className="py-4 px-4">
            <Container>
                <div className="mb-5">
                  <h2>Recent Posts</h2>
                </div>
                <Row className="card-group">
                    <Col lg={6} sm={12} className="mb-4 hover-animate">
                        <div className="card shadow border-0 h-100">
                            <Link to='/Post' className="img-3x2y">
                                <img src="https://images.unsplash.com/photo-1506741485568-47c278a3e70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60" alt="" className="img-fluid card-img-top" />
                            </Link>
                            <div className="card-body">
                                <Link to='/Post' className="text-uppercase text-muted text-sm letter-spacing-2">Demo</Link>
                                <h5 className="my-2">
                                    <Link to='/Post' className="text-dark">This place is so great</Link>
                                </h5>
                                <p className="text-gray-500 text-sm my-3">
                                    <FaRegClock className='me-2' />
                                    February 17, 2022
                                </p>
                                <p className="my-2 text-muted text-sm">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                                </p>
                                <Link to='/Post' className="btn btn-link ps-0 hover-underline text-primary">
                                    Read more
                                    <FaArrowRight className="ms-2" />
                                </Link>
                            </div>
                        </div>
                    </Col>
                    {/* Post item */}
                    <Col lg={6} sm={12} className="mb-4 hover-animate">
                        <div className="card shadow border-0 h-100">
                            <Link to='/Post' className="img-3x2y">
                                <img src="https://media.istockphoto.com/photos/fishing-boat-on-the-sea-picture-id1317183033?b=1&k=20&m=1317183033&s=170667a&w=0&h=yxqgt1iGZTifOWFeJCsubRx4epRXDlxK_3v1u0KDe5Y=" alt="" className="img-fluid card-img-top" />
                            </Link>
                            <div className="card-body">
                                <Link to='/Post' className="text-uppercase text-muted text-sm letter-spacing-2">Demo</Link>
                                <h5 className="my-2">
                                    <Link to='/Post' className="text-dark">This place is so great</Link>
                                </h5>
                                <p className="text-gray-500 text-sm my-3">
                                    <FaRegClock className='me-2' />
                                    February 17, 2022
                                </p>
                                <p className="my-2 text-muted text-sm">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                                </p>
                                <Link to='/Post' className="btn btn-link ps-0 hover-underline text-primary">
                                    Read more
                                    <FaArrowRight className="ms-2" />
                                </Link>
                            </div>
                        </div>
                    </Col>
                    {/* Post item */}
                    <Col lg={6} sm={12} className="mb-4 hover-animate">
                        <div className="card shadow border-0 h-100">
                            <Link to='/Post' className="img-3x2y">
                                <img src="https://images.unsplash.com/photo-1596085245533-60589d0dac38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60" alt="" className="img-fluid card-img-top" />
                            </Link>
                            <div className="card-body">
                                <Link to='/Post' className="text-uppercase text-muted text-sm letter-spacing-2">Demo</Link>
                                <h5 className="my-2">
                                    <Link to='/Post' className="text-dark">This place is so great</Link>
                                </h5>
                                <p className="text-gray-500 text-sm my-3">
                                    <FaRegClock className='me-2' />
                                    February 17, 2022
                                </p>
                                <p className="my-2 text-muted text-sm">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                                </p>
                                <Link to='/Post' className="btn btn-link ps-0 hover-underline text-primary">
                                    Read more
                                    <FaArrowRight className="ms-2" />
                                </Link>
                            </div>
                        </div>
                    </Col>
                    {/* Post item */}
                    <Col lg={6} sm={12} className="mb-4 hover-animate">
                        <div className="card shadow border-0 h-100">
                            <Link to='/Post' className="img-3x2y">
                                <img src="https://media.istockphoto.com/photos/fishing-boat-on-the-sea-picture-id1317183033?b=1&k=20&m=1317183033&s=170667a&w=0&h=yxqgt1iGZTifOWFeJCsubRx4epRXDlxK_3v1u0KDe5Y=" alt="" className="img-fluid card-img-top" />
                            </Link>
                            <div className="card-body">
                                <Link to='/Post' className="text-uppercase text-muted text-sm letter-spacing-2">Demo</Link>
                                <h5 className="my-2">
                                    <Link to='/Post' className="text-dark">This place is so great</Link>
                                </h5>
                                <p className="text-gray-500 text-sm my-3">
                                    <FaRegClock className='me-2' />
                                    February 17, 2022
                                </p>
                                <p className="my-2 text-muted text-sm">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs...
                                </p>
                                <Link to='/Post' className="btn btn-link ps-0 hover-underline text-primary">
                                    Read more
                                    <FaArrowRight className="ms-2" />
                                </Link>
                            </div>
                        </div>
                    </Col>
                    {/* Post item */}
                </Row>
            </Container>
        </div>
        </div>
      </Col>
    </Row>
    </div>
  )
}
export default Profile