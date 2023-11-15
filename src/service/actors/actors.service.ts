import { TActor } from 'service/actors/actor.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import axiosInstance, { axiosDefault } from '@/api/api.config'

export const ActorsService = {
	async getAll(searchTerm?: string) {
		return axiosDefault<TActor[]>({
			url: EnumContstantsUrl.ACTORS,
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},
	async delete(id: string) {
		return axiosInstance<TActor[]>({
			url: `${EnumContstantsUrl.ACTORS}/${id}`,
			method: 'DELETE',
			params: { id }
		})
	}
}
