import { useState } from "react";
import { useSelector } from "react-redux"
import EditUserForm from "./EditUserForm";

const Header = () => {
	const user = useSelector((state) => state.user);
	const [editing, setEditing] = useState(false);

	const editName = () => {
		setEditing(true);
  }

	return(
		<div class="header">
			<h1>Welcome back 
				{user && !editing && <span>{user.firstName} {user.lastName} !</span>}
			</h1>
			{editing 
				? <EditUserForm 
						onCancel={() => setEditing(false)}
					/> 
				: <button className="edit-button" onClick={editName}>Edit Name</button>
			}		
			
    </div>
	)
}

export default Header