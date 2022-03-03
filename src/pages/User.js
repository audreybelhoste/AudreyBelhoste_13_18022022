import { useState } from "react"
import Accounts from "../components/Accounts"
import Header from "../components/Header"

const User = ({token}) => {
	const [user, setUser] = useState({})
	
	fetch('http://localhost:3001/api/v1/user/profile', {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer' + token
		}
	})
	.then(res => res.json())
	.then(data => dispatchEvent({type: 'SET_USER', payload : data.body}))

	return(
		<main class="main bg-dark">
			<Header 
				user={user}
			/>
			<Accounts />
		</main>
	)
}

export default User