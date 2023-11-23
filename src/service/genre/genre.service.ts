import axiosInstance, { axiosDefault } from 'api/api.config'
import { TGenre } from 'service/genre/genre.types'

import { GenresUrl } from '@/shared/constants.enum'

import { TGenreEditInput } from './genre.types'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return await axiosDefault<TGenre[]>({
			url: GenresUrl.ROOT,
			method: 'GET',
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getPopular() {
		return await axiosDefault<TGenre[]>({
			url: GenresUrl.POPULAR,
			method: 'GET',
		})
	},
	async getBySlug(slug: string) {
		return await axiosDefault<TGenre>({
			url: `${GenresUrl.SLUG}/${slug}`,
			method: 'GET',
		})
	},
	async getById(id: string) {
		return await axiosInstance<TGenreEditInput>({
			url: `${GenresUrl.ROOT}/${id}`,
			method: 'GET',
		})
	},

	async delete(id: string) {
		return axiosInstance<string>({
			url: `${GenresUrl.ROOT}/${id}`,
			method: 'DELETE',
		})
	},
	async create(data: TGenreEditInput) {
		return axiosInstance<TGenreEditInput>({
			url: GenresUrl.CREATE,
			method: 'POST',
			data: data,
		})
	},
	async update(id: string, data: TGenreEditInput) {
		return axiosInstance<TGenreEditInput>({
			url: `${GenresUrl.ROOT}/${id}`,
			method: 'PUT',
			data: data,
		})
	},
}
