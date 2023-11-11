import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'config/api.helpers'
import { toastr } from 'react-redux-toastr'
import { AuthService } from 'service/auth/auth.service'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import { toastError } from '@/utils/toast-error'

import { TAuthData, TAuthReponse } from '@/store/user/user.types'

export const register = createAsyncThunk<TAuthReponse, TAuthData>(
	`${EnumContstantsUrl.AUTH}/register`,
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Регистрация прошла успешно!')

			return response
		} catch (error) {
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<TAuthReponse, TAuthData>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Вы успешно вошли!')
			return response
		} catch (error) {
			/* console.log(error) */
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk(
	`${EnumContstantsUrl.AUTH}/logout`,
	async () => {
		await AuthService.logout()
	}
)

export const checkAuth = createAsyncThunk<TAuthReponse, TAuthData>(
	`${EnumContstantsUrl.AUTH}/check-auth`,
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()

			return response
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Вы завершили авторизацию, пожалуйста зайдите снова!'
				)
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
