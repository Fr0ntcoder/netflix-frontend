import axiosInstance, { axiosDefault } from 'api/api.config'
import { TMovie } from 'service/movie/movie.types'

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

	async delete(id: string) {
		return axiosInstance<TMovie[]>({
			url: `${EnumContstantsUrl.MOVIES}/${id}`,
			method: 'DELETE',
			params: { id }
		})
	}
}
