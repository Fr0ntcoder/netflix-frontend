import axiosInstance, { axiosDefault } from 'api/api.config'
import { TGenreEditInput } from 'service/genre/genre.types'
import { TMovie, TMovieEditInput } from 'service/movie/movie.types'

import { MoviesUrl } from '@/shared/constants.enum'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosDefault<TMovie[]>({
			url: MoviesUrl.ROOT,
			method: 'GET',
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getMostPopular() {
		return axiosDefault<TMovie[]>({
			url: MoviesUrl.POPULAR,
			method: 'GET',
		})
	},

	async getByGenres(genreIds: string[]) {
		return axiosDefault<TMovie[]>({
			url: MoviesUrl.GENRES,
			method: 'POST',
			data: { genreIds },
		})
	},

	async getByActor(actorId: string) {
		return axiosDefault<TMovie[]>({
			url: `${MoviesUrl.ACTOR}/${actorId}`,
			method: 'GET',
		})
	},
	async getBySlug(slug: string) {
		return axiosDefault<TMovie>({
			url: `${MoviesUrl.SLUG}/${slug}`,
			method: 'GET',
		})
	},
	async getById(id: string) {
		return axiosInstance<TMovieEditInput>({
			url: `${MoviesUrl.ROOT}/${id}`,
			method: 'GET',
		})
	},
	async delete(id: string) {
		return axiosInstance<string>({
			url: `${MoviesUrl.ROOT}/${id}`,
			method: 'DELETE',
		})
	},
	async create(data: TMovieEditInput) {
		return axiosInstance<TMovieEditInput>({
			url: MoviesUrl.CREATE,
			method: 'POST',
			data: data,
		})
	},
	async update(id: string, data: TMovieEditInput) {
		return axiosInstance<TGenreEditInput>({
			url: `${MoviesUrl.ROOT}/${id}`,
			method: 'PUT',
			data: data,
		})
	},
	async updateCountOpened(slug: string) {
		return axiosInstance<string>({
			url: MoviesUrl.COUNT,
			method: 'PUT',
			data: { slug },
		})
	},
}
