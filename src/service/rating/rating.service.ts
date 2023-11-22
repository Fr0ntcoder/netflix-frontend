import { EnumContstantsUrl } from '@/shared/constants.enum'

import axiosInstance from '@/api/api.config'

export const RatingService = {
	async setRating(movieId: string, value: number) {
		return axiosInstance<string>({
			url: EnumContstantsUrl.RATINGS_SET,
			method: 'POST',
			data: { movieId, value },
		})
	},

	async getByUserMovie(movieId: string) {
		return axiosInstance<number>({
			url: `${EnumContstantsUrl.RATINGS}/${movieId}`,
			method: 'GET',
		})
	},
}
