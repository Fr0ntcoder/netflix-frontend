export type TUser = {
	_id: string
	email: string
	password: string
	isAdmin: boolean
	favorites: string[]
	createdAt: string
}

export type TProfileInput = Pick<TUser, 'email' | 'password'>

export type TUserInput = Pick<TUser, 'email' | 'isAdmin'>
