import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/argentBankLogo.png'

const Nav = () => {
	return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo} 
					alt="Logo Argent Bank"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/signin" className="main-nav-item">
				<FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </Link>
      </div>
    </nav>
	)
}

export default Nav