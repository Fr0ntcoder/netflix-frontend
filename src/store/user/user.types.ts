import { TUser } from 'service/users/users.types'

export type TUserState = {
	email: string
	isAdmin: boolean
}

export type TTokens = {
	accessToken: string
	refreshToken: string
}

export type TInitialState = {
	user: TUserState | null
	isLoading: boolean
}

export type TAuthData = {
	email: string
	password: string
}

export type TAuthReponse = {
	user: TUser & {
		isAdmin: boolean
	}
} & TTokens
