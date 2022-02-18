import { useState } from "react";

async function loginUser(credentials) {

  return fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const SignIn = ({ setToken }) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token.body);
  }

	return(
		<main className="main bg-dark">
			<section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
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
          {/* <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div> */}
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
		</main>
	)
}

export default SignIn