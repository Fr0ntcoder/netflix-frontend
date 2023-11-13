import { axiosDefault } from 'api/api.config'
import { getContentType } from 'api/api.helpers'
import Cookies from 'js-cookie'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import { TAuthReponse } from './../../store/user/user.types'
import { removeTokensStorage, saveToLocalStorage } from './auth.helper'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosDefault<TAuthReponse>({
			url: `${EnumContstantsUrl.AUTH}/register`,
			method: 'POST',
			data: { email, password }
		})

		if (response.data.accessToken) saveToLocalStorage(response.data)

		return response
	},

	async login(email: string, password: string) {
		const response = await axiosDefault<TAuthReponse>({
			url: `${EnumContstantsUrl.AUTH}/login`,
			method: 'POST',
			data: { email, password }
		})
		if (response.data.accessToken) saveToLocalStorage(response.data)

		return response
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosDefault<TAuthReponse>({
			url: `${EnumContstantsUrl.AUTH}/login/access-token`,
			method: 'POST',
			data: { refreshToken },
			headers: getContentType()
		})

		if (response.data.accessToken) saveToLocalStorage(response.data)

		return response
	},

	async logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	}
}
