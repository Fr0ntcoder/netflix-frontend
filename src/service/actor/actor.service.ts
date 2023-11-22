import { TActor, TActorEditInput } from 'service/actor/actor.types'

import { ActorsUrl } from '@/shared/constants.enum'

import axiosInstance, { axiosDefault } from '@/api/api.config'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosDefault<TActor[]>({
			url: ActorsUrl.ROOT,
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
			url: `${ActorsUrl.SLUG}/${slug}`,
			method: 'GET',
		})
	},
	async getById(id: string) {
		return await axiosInstance<TActorEditInput>({
			url: `${ActorsUrl.ROOT}/${id}`,
			method: 'GET',
		})
	},
	async delete(id: string) {
		return axiosInstance<string>({
			url: `${ActorsUrl.ROOT}/${id}`,
			method: 'DELETE',
		})
	},
	async create(data: TActorEditInput) {
		return axiosInstance<TActorEditInput>({
			url: ActorsUrl.CREATE,
			method: 'POST',
			data: data,
		})
	},
	async update(id: string, data: TActorEditInput) {
		return axiosInstance<TActorEditInput>({
			url: `${ActorsUrl.ROOT}/${id}`,
			method: 'PUT',
			data: data,
		})
	},
}
