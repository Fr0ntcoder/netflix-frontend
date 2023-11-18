import { TFile } from 'service/file/file.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import axiosInstance from '@/api/api.config'

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return axiosInstance<TFile[]>({
			url: `${EnumContstantsUrl.FILE}`,
			method: 'POST',
			params: { folder },
			data: file,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
}
