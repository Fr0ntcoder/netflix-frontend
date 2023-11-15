import axiosInstance, { axiosDefault } from 'api/api.config'
import { TGenre } from 'service/genre/genre.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import { TGenreEditInput } from './genre.types'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return await axiosDefault<TGenre[]>({
			url: EnumContstantsUrl.GENRES,
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},
	async getById(id: string) {
		return await axiosDefault<TGenreEditInput>({
			url: `${EnumContstantsUrl.GENRES}/${id}`,
			method: 'GET',
			params: { id }
		})
	},
	async delete(id: string) {
		return axiosInstance<string>({
			url: `${EnumContstantsUrl.GENRES}/${id}`,
			method: 'DELETE',
			params: { id }
		})
	},
	async update(id: string, data: TGenreEditInput) {
		return axiosInstance<string>({
			url: `${EnumContstantsUrl.GENRES}/${id}`,
			method: 'PUT',
			params: { id },
			data: { data }
		})
	}
}
