import { getJWT, getJWTUser } from "./auth-service.js";

const URL_BASE = "https://gateway.orangecliff-243aedf8.australiaeast.azurecontainerapps.io/"

function getTokenAPIs(username, password) {
	let url = URL_BASE + "api/v1/token";
	const body = new URLSearchParams({
		username: username,
		password: password
	}).toString();

	console.log("este es el body que voy a enviar", body)
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: body
	};

	return new Promise((resolve, reject) => {
		fetch(url, requestOptions)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result);
				},
				(error) => reject(error)
			)
	})
}

function authUser(body) {
	let url = URL_BASE + "api/v1/auth_service"
	var token = getJWT();
	var b = {
		username: body.usuario,
		password: body.contrasena,
		email: body.correo
	}

	console.log("esto llega a la API", getJWT())
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`,
		},
		body: JSON.stringify(b)
	}

	return new Promise((resolve, reject) => {
		fetch(url, requestOptions)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result);
				},
				(error) => reject(error)
			)
	})
}

function registrarUsuario(body) {
	let url = URL_BASE + "api/v1/user"
	var b = {
		ci: body.cedula,
		name: body.nombre,
		last_name: body.apellido,
		cellphone: body.telefono,
		direction: body.direccion,
		auth_token: getJWTUser()
	}
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + getJWT(),
		},
		body: JSON.stringify(b)
	}

	return new Promise((resolve, reject) => {
		fetch(url, requestOptions)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result);
				},
				(error) => reject(error)
			)
	})
}

function autenticacion(body) {
	let url = URL_BASE + "api/v1/auth_service/authenticate"
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + getJWT(),
		},
		body: JSON.stringify(body)
	}

	return new Promise((resolve, reject) => {
		fetch(url, requestOptions)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result);
				},
				(error) => reject(error)
			)
	})
}

function readUsuarioToken(token) {
	let url = URL_BASE + `api/v1/user/auth_token/${token}`
	const requestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + getJWT(),
		},
	};

	return new Promise((resolve, reject) => {
		fetch(url, requestOptions)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result);
				},
				(error) => reject(error)
			)
	})
}

function verAutos(ci) {
	let url = URL_BASE + `api/v1/vehicle/${ci}`
	const requestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + getJWT(),
		},
	};

	return new Promise((resolve, reject) => {
		fetch(url, requestOptions)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result);
				},
				(error) => reject(error)
			)
	})
}

function eliminarAuto(placa) {
	let url = URL_BASE + `api/v1/vehicle/${placa}`
	const requestOptions = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + getJWT(),
		},
	};

	return new Promise((resolve, reject) => {
		fetch(url, requestOptions)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result);
				},
				(error) => reject(error)
			)
	})
}

function crearAuto(body) {
	let url = URL_BASE + "api/v1/vehicle";

	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: body
	};

	return new Promise((resolve, reject) => {
		fetch(url, requestOptions)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result);
				},
				(error) => reject(error)
			)
	})
}

export default {
	getTokenAPIs,
	authUser,
	registrarUsuario,
	autenticacion,
	readUsuarioToken,
	verAutos,
	eliminarAuto,
	crearAuto
}

