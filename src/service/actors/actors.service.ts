import { TActor, TActorEditInput } from 'service/actors/actor.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import axiosInstance, { axiosDefault } from '@/api/api.config'

export const ActorsService = {
	async getAll(searchTerm?: string) {
		return axiosDefault<TActor[]>({
			url: EnumContstantsUrl.ACTORS,
			method: 'GET',
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getBySlug(slug: string) {
		return axiosDefault<TActor>({
			url: `${EnumContstantsUrl.ACTORS_SLUG}/${slug}`,
			method: 'GET',
		})
	},
	async getById(id: string) {
		return await axiosDefault<TActorEditInput>({
			url: `${EnumContstantsUrl.ACTORS}/${id}`,
			method: 'GET',
		})
	},
	async delete(id: string) {
		return axiosInstance<string>({
			url: `${EnumContstantsUrl.ACTORS}/${id}`,
			method: 'DELETE',
		})
	},
	async create(data: TActorEditInput) {
		return axiosInstance<TActorEditInput>({
			url: `${EnumContstantsUrl.ACTORS}/create`,
			method: 'POST',
			data: data,
		})
	},
	async update(id: string, data: TActorEditInput) {
		return axiosInstance<TActorEditInput>({
			url: `${EnumContstantsUrl.ACTORS}/${id}`,
			method: 'PUT',
			data: { ...data },
		})
	},
}
