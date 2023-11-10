export enum EnumContstantsUrl {
	GENRES = '/genres',
	MOVIES = '/movies',
	MOVIES_POPULAR = '/movies/most-popular'
}

export const accentColor = '#E30B13'

export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
