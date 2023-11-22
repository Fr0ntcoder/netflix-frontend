import { TMovie } from 'service/movie/movie.types'
import { TProfileInput, TUser, TUserInput } from 'service/user/user.types'

import { UsersUrl } from '@/shared/constants.enum'

import axiosInstance from '@/api/api.config'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axiosInstance<TUser[]>({
			url: UsersUrl.ROOT,
			method: 'GET',
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getFavorites() {
		return axiosInstance<TMovie[]>({
			url: UsersUrl.FAVORITES,
			method: 'GET',
		})
	},
	async toggleFavorite(movieId: string) {
		return axiosInstance({
			url: UsersUrl.FAVORITES,
			method: 'PUT',
			data: { movieId },
		})
	},
	async getById(_id: string) {
		return axiosInstance<TUser>({
			url: `${UsersUrl.ROOT}/${_id}`,
			method: 'GET',
		})
	},
	async getProfile() {
		return axiosInstance<TUser>({
			url: UsersUrl.PROFILE,
			method: 'GET',
		})
	},
	async getUpdateProfile(data: TProfileInput) {
		return axiosInstance<TProfileInput>({
			url: UsersUrl.PROFILE,
			method: 'PUT',
			data: data,
		})
	},
	async update(_id: string, data: TUserInput) {
		return axiosInstance<TUserInput>({
			url: `${UsersUrl.ROOT}/${_id}`,
			method: 'PUT',
			data: data,
		})
	},
	async delete(id: string) {
		return axiosInstance<TUser[]>({
			url: `${UsersUrl.ROOT}/${id}`,
			method: 'DELETE',
		})
	},
}
