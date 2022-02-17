import {Link} from 'react-router-dom'

import { Container } from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'

import Nav from "./Nav"

function Header() {
  return (
    <Container>
        <header className="header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <a href="#" className="text-muted">Write a Review</a>
                </div>
                <div className="col-4 text-center">
                    <Link to='/' className="header-logo text-dark">Review Travel</Link>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <a href="#" className="text-muted">
                        <FaSearch size={20} className="mx-3"/>
                    </a>
                    <Link to='/Login' className="btn btn-sm btn-outline-secondary">Sign in</Link>
                </div>
            </div>
        </header>
    </Container>
  )
}
export default Header