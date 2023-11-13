import { errorCatch, getContentType } from 'api/api.helpers'
import axios from 'axios'
import Cookies from 'js-cookie'
import { removeTokensStorage } from 'service/auth/auth.helper'
import { AuthService } from 'service/auth/auth.service'

export const API_URL = `${process.env.APP_URL}/api`

export const axiosDefault = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

export const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

axiosInstance.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosInstance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await AuthService.getNewTokens()
				return axiosInstance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeTokensStorage()
				}
			}
		}

		throw error
	}
)

export default axiosInstance
