import { useSelector } from "react-redux"

const Header = () => {
	const user = useSelector((state) => state.user);

	return(
		<div class="header">
        {user && <h1>Welcome back<br /> {user.firstName} {user.lastName}!</h1>}
        <button class="edit-button">Edit Name</button>
      </div>
	)
}

export default Header