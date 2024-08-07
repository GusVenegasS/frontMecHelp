//src/services/api-service.js

const URL_BASE = "https://gateway.orangecliff-243aedf8.australiaeast.azurecontainerapps.io/"

function registrarUsuario(body) {
	let url = URL_BASE + "api/v1/user"
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + getJWT(),
		}
	}
}