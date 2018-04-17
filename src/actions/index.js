const BASE_URL = 'http://localhost:3000/api/user_token'

export function loginUser(email, password) {
  fetch(BASE_URL, {
  	method: 'POST',
  	headers: {
      	 'Content-Type': 'application/json',
      	 'Accept': 'application/json'
          },
  	body: JSON.stringify({"auth": {"email": email, "password": password}})
  })
  .then(res => res.json())
  .then(json => localStorage.setItem("jwt", json.jwt))
}
