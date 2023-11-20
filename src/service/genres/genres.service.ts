import axiosInstance, { axiosDefault } from 'api/api.config'
import { TGenre } from 'service/genres/genres.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import { TGenreEditInput } from './genres.types'

export const GenresService = {
	async getAll(searchTerm?: string) {
		return await axiosDefault<TGenre[]>({
			url: EnumContstantsUrl.GENRES,
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
			url: `${EnumContstantsUrl.GENRES}/popular`,
			method: 'GET',
		})
	},
	async getById(id: string) {
		return await axiosDefault<TGenreEditInput>({
			url: `${EnumContstantsUrl.GENRES}/${id}`,
			method: 'GET',
		})
	},

	async getBySlug(slug: string) {
		return await axiosDefault<TGenre>({
			url: `${EnumContstantsUrl.GENRES_SLUG}/${slug}`,
			method: 'GET',
		})
	},

	async delete(id: string) {
		return axiosInstance<string>({
			url: `${EnumContstantsUrl.GENRES}/${id}`,
			method: 'DELETE',
		})
	},
	async create(data: TGenreEditInput) {
		return axiosInstance<TGenreEditInput>({
			url: `${EnumContstantsUrl.GENRES}/create`,
			method: 'POST',
			data: data,
		})
	},
	async update(id: string, data: TGenreEditInput) {
		return axiosInstance<TGenreEditInput>({
			url: `${EnumContstantsUrl.GENRES}/${id}`,
			method: 'PUT',
			data: { ...data },
		})
	},
}
