export const loginUser = async (credentials) => {
	return fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export const getUser = async (token) => {
	return fetch('http://localhost:3001/api/v1/user/profile', {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer' + token
		}
	})
	.then(res => res.json()
	.catch(error => {
		alert(error)
	}))
}

export const updateUser = (token, firstName, lastName) => {
	return fetch('http://localhost:3001/api/v1/user/profile', {
		method: 'PUT',
		headers: {
			'Authorization': 'Bearer' + token,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({firstName: firstName, lastName: lastName})
	});
}