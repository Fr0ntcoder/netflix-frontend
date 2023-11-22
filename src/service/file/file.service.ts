import { TFile } from 'service/file/file.types'

import { FileUrl } from '@/shared/constants.enum'

import axiosInstance from '@/api/api.config'

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return axiosInstance<TFile[]>({
			url: FileUrl.ROOT,
			method: 'POST',
			params: { folder },
			data: file,
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}
