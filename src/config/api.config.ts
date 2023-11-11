import axios from 'axios'
import { getContentType } from 'config/api.helpers'

export const API_URL = `${process.env.APP_URL}/api`

export const axiosDefault = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

export const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})
