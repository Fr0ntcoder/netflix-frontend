import { axiosDefault } from 'config/api.config'
import { TMovie } from 'service/movie/movie.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

export const movieService = {
	async getAll(searchTerm?: string) {
		return axiosDefault<TMovie[]>({
			url: EnumContstantsUrl.MOVIE,
			method: 'GET',
			params: searchTerm ? { searchTerm } : {}
		})
	}
}
