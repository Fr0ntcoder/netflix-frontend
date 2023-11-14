export enum EnumContstantsUrl {
	ADMIN = '/admin',
	USERS = '/users',
	AUTH = '/auth',
	GENRES = '/genres',
	MOVIES = '/movies',
	ACTORS = '/actors',
	STATISTICS = '/statistics',
	MOVIES_POPULAR = '/movies/most-popular'
}

export const accentColor = '#E30B13'

export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
