import { faArrowRightFromBracket, faCircleUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/argentBankLogo.png'

const Nav = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({type: 'REMOVE_USER_AND_TOKEN'})
  }
  
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
      <div className="main-nav-items">
        {user &&
          <p><FontAwesomeIcon icon={faCircleUser} />
          {user.firstName}</p>
        }
        {token ? 
          <Link to="/" className="main-nav-item" onClick={logout}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            Sign out
          </Link> : 
          <Link to="/signin" className="main-nav-item"> 
          	<FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        }
      </div>
    </nav>
	)
}

export default Nav