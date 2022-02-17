import {Link} from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext';
import { Container } from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import { useContext } from 'react';

import Nav from "./Nav"

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
                    <Link to='/WriteReviews' className="text-muted">Write a Review</Link>
                </div>
                <div className="col-6 text-center">
                    <Link to='/' className="header-logo text-primary-9">Review Travel</Link>
                </div>
                <div className="col-3 d-flex justify-content-end align-items-center">
                    <a href="#" className="text-muted">
                        <FaSearch size={20} className="mx-3"/>
                    </a>
                    {!authState.status && (
                        <Link to='/Login' className="btn btn-sm btn-outline-secondary">Sign in</Link>
                    )}
                    {authState.status && (
                                <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i>
                                    Dinh DUong
                                    <b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="../includes/logout.php"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                                    </li>
                                </ul>
                            </li>
                    )}
                </div>
            </div>
            </AuthContext.Provider>
        </header>
    </Container>
  )
}
export default Header