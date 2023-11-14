import { TUser } from 'service/users/users.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import axiosInstance from '@/api/api.config'

export const UsersService = {
	async getAll(searchTerm?: string) {
		return axiosInstance<TUser[]>({
			url: EnumContstantsUrl.USERS,
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	}
}
