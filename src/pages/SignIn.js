import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";

const SignIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email,
      password
    }).then(
        data => {
          dispatch({type: 'SET_TOKEN', payload : data.body.token});
          navigate("/user");
        }
      ).catch(error => {
        setError(error);
      });
    ;
  }

	return(
		<main className="main bg-dark">
			<section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {error && 
            <p className="sign-in-error">User not found</p>
          }
          <div className="input-wrapper">
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setEmail(e.target.value)}/>
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
		</main>
	)
}

export default SignIn