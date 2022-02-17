import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Widget from '../component/Sidebar'
import {FaRegClock, FaArrowRight} from 'react-icons/fa'

function AllPosts() {
  return (
    <Container className="py-6">
        <Row>
            <Col md={8}>
                <Container fluid>
                    <Row className="mb-5">
                        <Col md={8}>
                            <p className="subtitle text-secondary">Explore More Posts</p>
                            <h2>From our review travel blog</h2>
                        </Col>
                    </Row>
                    <Row className="card-group">
                        <Col lg={6} sm={12} xxl={4} className="mb-4 hover-animate">
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
                        <Col lg={6} sm={12} xxl={4} className="mb-4 hover-animate">
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
                        <Col lg={6} sm={12} xxl={4} className="mb-4 hover-animate">
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
                        <Col lg={6} sm={12} xxl={4} className="mb-4 hover-animate">
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
                        <Col lg={6} sm={12} xxl={4} className="mb-4 hover-animate">
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
                        <Col lg={6} sm={12} xxl={4} className="mb-4 hover-animate">
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
                    </Row>
                </Container>
        <nav aria-label="Page navigation example" className="mt-5">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item"><a class="page-link" href="#">6</a></li>
                <li class="page-item">
                <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
            </Col>
            <Col md={4} className="pl-md-4">
                <Widget />
            </Col>
        </Row>
    </Container>
  )
}
export default AllPosts