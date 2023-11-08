import axios from 'axios'

export const API_URL = `${process.env.APP_URL}/api`

export const axiosDefault = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'aplication/json'
	}
})

export const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'aplication/json'
	}
})
