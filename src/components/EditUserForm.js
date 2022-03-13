import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../services/userService";

const EditUserForm = ({onCancel}) => {
	const token = useSelector((state) => state.token)
	const user = useSelector((state) => state.user);
	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch({type: 'EDIT_USER', payload: {firstName: firstName, lastName: lastName}});
		updateUser(token, firstName, lastName);
		onCancel();
  }

	const cancelChange = (event) => {
    event.preventDefault();
		onCancel();
  }

	return(
		<form onSubmit={handleSubmit}>
			<div>
				<input type="text" class="edit-input" placeholder={user.firstName} value={firstName} onChange={e => setFirstName(e.target.value)}/>
				<input type="text" class="edit-input" placeholder={user.lastName} value={lastName} onChange={e => setLastName(e.target.value)}/>
			</div>
			<div>
      	<button type="submit" class="edit-button">Save</button>
      	<button class="edit-button" onClick={cancelChange}>Cancel</button>
			</div>
    </form>
	)
}

export default EditUserForm