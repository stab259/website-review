import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap'
import {FaAngleRight, FaAngleDoubleRight, FaRegClock, FaArrowRight, FaCrosshairs} from 'react-icons/fa'

function Home() {
  return (
    <Container fluid className="px-0">
        <Container fluid id="intro" className="py-7 px-0 position-relative dark-overlay">
            <Container className="py-6 py-md-7 text-white z-index-20">
                <Row className="justify-content-center">
                    <Col xl={10}>
                        <div className="text-center text-lg-start">
                            <p className="subtitle letter-spacing-4 mb-2 text-primary text-shadow">The Best Place to Find and Share Review</p>
                            <h1 className="display-3 fw-bold text-shadow">Welcome to Our Page</h1>
                        </div>
                        {/* <div className="search-bar mt-5 p-3 p-lg-1 ps-lg-4">
                            <form action="#">
                                <Row>
                                    <Col lg={6} className="d-flex align-items-center form-group">
                                        <input className="form-control border-0 shadow-0" type="text" name="search" placeholder="What are you searching for?" />
                                    </Col>
                                    <Col lg={4} className="d-flex align-items-center form-group">
                                        <div className="input-label-absolute input-label-absolute-right w-100">
                                            <label className="label-absolute">
                                                <FaCrosshairs className=""/>
                                            </label>
                                            <input className="form-control border-0 shadow-0" type="text" name="location" placeholder="Location" />
                                        </div>
                                    </Col>
                                    <Col lg={2} className="d-grid">
                                        <Button className="btn-primary rounded-pill h-100" type="submit">Search</Button>
                                    </Col>
                                </Row>
                            </form>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </Container>
        <div className="pt-6">
            <Container>
                <Row className="mb-6">
                    <Col lg={8}>
                        <h2>Expolre Interesting Areas</h2>
                        <p className="text-muted mb-0">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xs={6} lg={4} xl={3} className="px-0">
                        <div className="d-flex align-items-center dark-overlay hover-scale-bg-image" style={{minHeight:"400px",}}>
                            <img className="bg-image" src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" />
                            <div className="p-3 p-sm-5 text-white z-index-20">
                                <h4 className="h2">Hoi An</h4>
                                <p class="mb-4">Greate place to come</p>
                                <a className="btn btn-link text-reset ps-0 stretched-link text-decoration-none" href="#">
                                    Explore it 
                                    <FaAngleRight className="ms-2"></FaAngleRight>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={4} xl={3} className="px-0">
                        <div className="d-flex align-items-center dark-overlay hover-scale-bg-image" style={{minHeight:"400px",}}>
                            <img className="bg-image" src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" />
                            <div className="p-3 p-sm-5 text-white z-index-20">
                                <h4 className="h2">Ho Chi Minh City</h4>
                                <p class="mb-4">Greate place to come</p>
                                <a className="btn btn-link text-reset ps-0 stretched-link text-decoration-none" href="#">
                                    Explore it 
                                    <FaAngleRight className="ms-2"></FaAngleRight>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={4} xl={3} className="px-0">
                        <div className="d-flex align-items-center dark-overlay hover-scale-bg-image" style={{minHeight:"400px",}}>
                            <img className="bg-image" src="https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" />
                            <div className="p-3 p-sm-5 text-white z-index-20">
                                <h4 className="h2">Ninh Binh</h4>
                                <p class="mb-4">Greate place to come</p>
                                <a className="btn btn-link text-reset ps-0 stretched-link text-decoration-none" href="#">
                                    Explore it 
                                    <FaAngleRight className="ms-2"></FaAngleRight>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={4} xl={3} className="px-0">
                        <div className="d-flex align-items-center dark-overlay hover-scale-bg-image" style={{minHeight:"400px",}}>
                            <img className="bg-image" src="https://images.unsplash.com/photo-1557750255-c76072a7aad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" />
                            <div className="p-3 p-sm-5 text-white z-index-20">
                                <h4 className="h2">Trang An, Ninh Binh</h4>
                                <p class="mb-4">Greate place to come</p>
                                <a className="btn btn-link text-reset ps-0 stretched-link text-decoration-none" href="#">
                                    Explore it 
                                    <FaAngleRight className="ms-2"></FaAngleRight>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={4} xl={3} className="px-0">
                        <div className="d-flex align-items-center dark-overlay hover-scale-bg-image" style={{minHeight:"400px",}}>
                            <img className="bg-image" src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
                            <div className="p-3 p-sm-5 text-white z-index-20">
                                <h4 className="h2">Da Nang</h4>
                                <p class="mb-4">Greate place to come</p>
                                <a className="btn btn-link text-reset ps-0 stretched-link text-decoration-none" href="#">
                                    Explore it 
                                    <FaAngleRight className="ms-2"></FaAngleRight>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={4} xl={3} className="px-0">
                        <div className="d-flex align-items-center dark-overlay hover-scale-bg-image" style={{minHeight:"400px",}}>
                            <img className="bg-image" src="https://images.unsplash.com/photo-1609412058473-c199497c3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
                            <div className="p-3 p-sm-5 text-white z-index-20">
                                <h4 className="h2">Mu Cang Chai, Yen Bai</h4>
                                <p class="mb-4">Greate place to come</p>
                                <a className="btn btn-link text-reset ps-0 stretched-link text-decoration-none" href="#">
                                    Explore it 
                                    <FaAngleRight className="ms-2"></FaAngleRight>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={4} xl={3} className="px-0">
                        <div className="d-flex align-items-center dark-overlay hover-scale-bg-image" style={{minHeight:"400px",}}>
                            <img className="bg-image" src="https://images.unsplash.com/photo-1555980483-93e7b3529e1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
                            <div className="p-3 p-sm-5 text-white z-index-20">
                                <h4 className="h2">Hoi An</h4>
                                <p class="mb-4">Greate place to come</p>
                                <a className="btn btn-link text-reset ps-0 stretched-link text-decoration-none" href="#">
                                    Explore it 
                                    <FaAngleRight className="ms-2"></FaAngleRight>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={4} xl={3} className="px-0">
                        <div className="d-flex align-items-center dark-overlay hover-scale-bg-image" style={{minHeight:"400px",}}>
                            <img className="bg-image" src="https://images.unsplash.com/photo-1503432697506-6986abec65ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
                            <div className="p-3 p-sm-5 text-white z-index-20">
                                <h4 className="h2">HD City</h4>
                                <p class="mb-4">Greate place to come</p>
                                <a className="btn btn-link text-reset ps-0 stretched-link text-decoration-none" href="#">
                                    Explore it 
                                    <FaAngleRight className="ms-2"></FaAngleRight>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={4} xl={3} className="px-0 d-none d-lg-block d-xl-none">
                        <div className="d-flex align-items-center dark-overlay hover-scale-bg-image" style={{minHeight:"400px",}}>
                            <img className="bg-image" src="https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHZpZXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
                            <div className="p-3 p-sm-5 text-white z-index-20">
                                <h4 className="h2">Sapa, Lao Cai</h4>
                                <p class="mb-4">Greate place to come</p>
                                <a className="btn btn-link text-reset ps-0 stretched-link text-decoration-none" href="#">
                                    Explore it 
                                    <FaAngleRight className="ms-2"></FaAngleRight>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="py-6 bg-gray-100">
            <Container>
                <Row className="mb-5">
                    <Col md={8}>
                        <p className="subtitle text-secondary">Explore More Posts</p>
                        <h2>From our review travel blog</h2>
                    </Col>
                    <Col md={4} className="d-md-flex align-items-center justify-content-end">
                        <Link to='/AllPosts' className="text-muted text-sm">
                            See all articles
                            <FaAngleDoubleRight className='ms-2'></FaAngleDoubleRight>
                        </Link>
                    </Col>
                </Row>
                <Row className="card-group">
                    <Col lg={4} sm={6} className="mb-4 hover-animate">
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
                    <Col lg={4} sm={6} className="mb-4 hover-animate">
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
                    <Col lg={4} sm={6} className="mb-4 hover-animate">
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
        </div>
    </Container>
  )
}
export default Home
