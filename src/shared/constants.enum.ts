export enum EnumContstantsUrl {
	FILE = '/files',
	USER = '/user',
	USERS = '/users',
	AUTH = '/auth',
	GENRE = '/genre',
	GENRES = '/genres',
	MOVIE = '/movie',
	MOVIES = '/movies',
	ACTOR = '/actor',
	ACTORS = '/actors',
	STATISTICS = '/statistics',
	MOVIES_POPULAR = '/movies/most-popular'
}

export enum EnumContstantsAdminUrl {
	ADMIN = '/admin',
	USERS = '/admin/users',
	USER_EDIT = '/admin/user/edit',
	MOVIES = '/admin/movies',
	MOVIE_СREATE = '/admin/movie/create',
	MOVIE_EDIT = '/admin/movie/edit',
	ACTORS = '/admin/actors',
	ACTOR_СREATE = '/admin/actor/create',
	ACTOR_EDIT = '/admin/actor/edit',
	GENRES = '/admin/genres',
	GENRE_СREATE = '/admin/genre/create',
	GENRE_EDIT = '/admin/genre/edit'
}

export const accentColor = '#E30B13'

export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
