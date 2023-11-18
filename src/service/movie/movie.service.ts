import axiosInstance, { axiosDefault } from 'api/api.config'
import { TGenreEditInput } from 'service/genres/genres.types'
import { TMovie, TMovieEditInput } from 'service/movie/movie.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosDefault<TMovie[]>({
			url: EnumContstantsUrl.MOVIES,
			method: 'GET',
			params: searchTerm ? { searchTerm } : {}
		})
	},

	async getMostPopular() {
		return axiosDefault<TMovie[]>({
			url: EnumContstantsUrl.MOVIES_POPULAR,
			method: 'GET'
		})
	},

	async getById(id: string) {
		return await axiosInstance<TMovieEditInput>({
			url: `${EnumContstantsUrl.MOVIES}/${id}`,
			method: 'GET'
		})
	},

	async delete(id: string) {
		return axiosInstance<string>({
			url: `${EnumContstantsUrl.MOVIES}/${id}`,
			method: 'DELETE'
		})
	},
	async create(data: TMovieEditInput) {
		return axiosInstance<TMovieEditInput>({
			url: `${EnumContstantsUrl.MOVIES}/create`,
			method: 'POST',
			data: data
		})
	},
	async update(id: string, data: TMovieEditInput) {
		return axiosInstance<TGenreEditInput>({
			url: `${EnumContstantsUrl.MOVIES}/${id}`,
			method: 'PUT',
			data: data
		})
	}
}
