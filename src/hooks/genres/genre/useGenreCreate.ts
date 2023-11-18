import { useRouter } from 'next/router'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { GenresService } from 'service/genres/genres.service'
import { TGenreEditInput } from 'service/genres/genres.types'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { toastError } from '@/utils/toast-error'

export const useGenreCreate = () => {
	const { push } = useRouter()
	const { mutateAsync } = useMutation(
		['create genre'],
		(data: TGenreEditInput) => GenresService.create(data),
		{
			onError(error) {
				toastError(error, 'Этот жанр уже существует')
			},
			onSuccess() {
				toastr.success('Обновление жанра', 'Вы успешно изменили жанр')
				push(EnumContstantsAdminUrl.GENRES)
			}
		}
	)

	const onSubmit: SubmitHandler<TGenreEditInput> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit }
}
