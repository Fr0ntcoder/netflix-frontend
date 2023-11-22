import { TProfileInput, TUser, TUserInput } from 'service/user/user.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import axiosInstance from '@/api/api.config'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axiosInstance<TUser[]>({
			url: EnumContstantsUrl.USERS,
			method: 'GET',
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getById(_id: string) {
		return axiosInstance<TUser>({
			url: `${EnumContstantsUrl.USERS}/${_id}`,
			method: 'GET',
		})
	},
	async getProfile() {
		return axiosInstance<TUser>({
			url: `${EnumContstantsUrl.USERS}/profile`,
			method: 'GET',
		})
	},
	async getUpdateProfile(data: TProfileInput) {
		return axiosInstance<TProfileInput>({
			url: `${EnumContstantsUrl.USERS}/profile`,
			method: 'PUT',
			data: data,
		})
	},
	async update(_id: string, data: TUserInput) {
		return axiosInstance<TUserInput>({
			url: `${EnumContstantsUrl.USERS}/${_id}`,
			method: 'PUT',
			data: data,
		})
	},
	async delete(id: string) {
		return axiosInstance<TUser[]>({
			url: `${EnumContstantsUrl.USERS}/${id}`,
			method: 'DELETE',
		})
	},
}
