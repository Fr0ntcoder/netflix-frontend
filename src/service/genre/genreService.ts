import { axiosDefault } from 'config/api.config'
import { TGenre } from 'service/genre/genre.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

export const GenreService = {
	async getAll() {
		return await axiosDefault<TGenre[]>({
			url: EnumContstantsUrl.GENRE,
			method: 'GET'
		})
	}
}
