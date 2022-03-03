import { useSelector, useDispatch } from "react-redux"
import Accounts from "../components/Accounts"
import Header from "../components/Header"

const User = () => {
	const token = useSelector((state) => state.token)
	const dispatch = useDispatch();

	if(token){
		fetch('http://localhost:3001/api/v1/user/profile', {
			method: 'POST',
			headers: {
				'Authorization': 'Bearer' + token
			}
		})
		.then(res => res.json())
		.then(data => dispatch({type: 'SET_USER', payload : data.body}))
	}
	
	return(
		<main class="main bg-dark">
			<Header 
			/>
			<Accounts />
		</main>
	)
}

export default User