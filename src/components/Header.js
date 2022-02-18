const Header = ({user}) => {
	return(
		<div class="header">
        <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
	)
}

export default Header