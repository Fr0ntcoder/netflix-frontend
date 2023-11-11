import Cookies from 'js-cookie'

import { TAuthReponse, TTokens } from '@/store/user/user.types'

export const saveTokensStorage = (data: TTokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const saveToLocalStorage = (data: TAuthReponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data))
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
