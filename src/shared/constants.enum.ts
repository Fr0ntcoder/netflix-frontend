export enum UserUrl {
	ROOT = '/user',
}

export enum UsersUrl {
	ROOT = '/users',
	FAVORITES = '/users/profile/favorites',
	PROFILE = '/users/profile',
}

export enum ActorUrl {
	ROOT = '/actor',
}

export enum ActorsUrl {
	ROOT = '/actors',
	CREATE = '/actors/create',
	SLUG = '/actors/by-slug',
}

export enum MovieUrl {
	ROOT = '/movie',
}

export enum MoviesUrl {
	ROOT = '/movies',
	SLUG = '/movies/by-slug',
	GENRES = '/movies/by-genres',
	ACTOR = '/movies/by-actor',
	POPULAR = '/movies/most-popular',
	COUNT = '/movies/update-count-opened',
	CREATE = '/movies/create',
}

export enum GenreUrl {
	ROOT = '/genre',
}

export enum GenresUrl {
	ROOT = '/genres',
	SLUG = '/genres/by-slug',
	POPULAR = '/genres/popular',
	CREATE = '/genres/create',
	COLLECTIONS = '/genres/collections',
}

export enum AuthUrl {
	ROOT = '/auth',
	REGISTER = '/auth/register',
	LOGIN = '/auth/login',
	TOKEN = '/auth/login/access-token',
	LOGOUT = '/auth/logout',
	CHECK = '/auth/check-auth',
}

export enum StatUrl {
	ROOT = '/statistics',
}

export enum RatingUrl {
	ROOT = '/ratings',
	SET = '/ratings/set-rating',
}

export enum FileUrl {
	ROOT = '/files',
}

export enum AdminUrl {
	ROOT = '/admin',
}

export enum AdminUsersUrl {
	ROOT = '/admin/users',
	EDIT = '/admin/user/edit',
}

export enum AdminMoviesUrl {
	ROOT = '/admin/movies',
	СREATE = '/admin/movie/create',
	EDIT = '/admin/movie/edit',
}

export enum AdminActorsUrl {
	ROOT = '/admin/actors',
	СREATE = '/admin/actor/create',
	EDIT = '/admin/actor/edit',
}

export enum AdminGenresUrl {
	ROOT = '/admin/genres',
	СREATE = '/admin/genre/create',
	EDIT = '/admin/genre/edit',
}

export const accentColor = '#E30B13'

export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
export const IS_PRODUCTION = process.env.APP_ENV === 'production'
