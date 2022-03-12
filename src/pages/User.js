import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Accounts from "../components/Accounts"
import Header from "../components/Header"
import { getUser } from "../services/userService";
import SignIn from "./SignIn";

const User = () => {
	const token = useSelector((state) => state.token);
	const dispatch = useDispatch();

	useEffect(() => {
		getUser(token)
		.then(data => dispatch({type: 'SET_USER', payload: data.body}))
	}, [])

	if(token == null){
		return (
			<SignIn />
		)
	} else {
		return(
			<main class="main bg-dark">
				<Header />
				<Accounts />
			</main>
		)
	}


}

export default User