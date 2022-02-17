import {Link} from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext';
import { Container, Dropdown } from 'react-bootstrap'
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import { useContext } from 'react';

function Header() {
    const { authState, setAuthState } = useContext(AuthContext);
    const logout = () => {
        localStorage.removeItem("accessToken")
        setAuthState({
            username: "",
            id: 0,
            status: false
        })
    }
  return (
    <Container>
        <header className="header py-3">
            <AuthContext.Provider>
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-3 pt-1">
                    <Link to='/WriteReviews' className="text-primary-9">Write a Review</Link>
                    <a href="#" className="text-muted ms-2">
                        <FaSearch size={20} className="mx-3"/>
                    </a>
                </div>
                <div className="col-6 text-center">
                    <Link to='/' className="header-logo text-primary-9">Review Travel</Link>
                </div>
                <div className="col-3 d-flex justify-content-end align-items-center">
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
                                <Dropdown.Item as={Link} to='/'>Profile</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item as={Link} to='/'>Sign out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </div>
            </div>
            </AuthContext.Provider>
        </header>
    </Container>
  )
}
export default Header