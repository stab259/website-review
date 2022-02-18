import {Link, Routes, Route} from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext';
import { Container, Dropdown, Button, Overlay } from 'react-bootstrap'
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import { useContext, useState } from 'react';
import TravelForm from './TravelForm';

function Header() {
    const { authState, setAuthState } = useContext(AuthContext);
    const logout = () => {
        localStorage.removeItem("accessToken")
        setAuthState({
            username: "",
            id: 0,
            role: "",
            status: false
        })
    }

    const [show, setShow] = useState(false);

    const showTravelForm = () => {
        setShow(true);
        console.log(`im ${show}`);
    }
    const handleShow = (show) => {
        setShow(show);
    }

  return (
    <>
        <TravelForm show={show} handleShow={handleShow}/>
        <Container id="header">
            <header className="header py-3">
                <AuthContext.Provider>
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <Link to='/WriteReviews' className="text-primary-9">Write a Review</Link>
                        <a href="#" className="text-muted ms-2">
                            <FaSearch size={20} className="mx-3"/>
                        </a>
                        <a href="#" className="text-primary-9" onClick={showTravelForm}>Travel with us</a>
                    </div>
                    <div className="col-4 text-center">
                        <Link to='/' className="header-logo text-primary-9">Review Travel</Link>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        {!authState.status && (
                            <Link to='/Login' className="btn btn-sm btn-primary-dark text-center">Sign in</Link>
                        )}
                        {authState.status && (
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-link-light">
                                    <FaUserAlt className="me-2" style={{transform:"translateY(-2px)"}}/>
                                    Dinh Duong
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/Profile'>Profile</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item onClick={logout} >Sign out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </div>
                </div>
                </AuthContext.Provider>
            </header>
        </Container>
    </>
  )
}
export default Header