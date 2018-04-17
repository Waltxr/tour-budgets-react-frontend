const BASE_URL = 'http://localhost:3000/api/user_token'

export function loginUser(email, password) {
  return dispatch = () => {
    fetch(BASE_URL, {
      fetch(url, {
    	method: 'POST',
    	headers: {
        	 'Content-Type': 'application/json',
        	 'Accept': 'application/json'
            },
    	body: JSON.stringify({"auth": {"email": email, "password": password}})
    })
    .then(res => res.json())
    .then(res => localStorage.setItem("jwt", result.jwt))
    })
  }
}
