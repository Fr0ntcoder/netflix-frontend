import { useRouter } from 'next/router'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { GenreService } from 'service/genre/genre.service'
import { TGenreEditInput } from 'service/genre/genre.types'

import { AdminGenresUrl } from '@/shared/constants.enum'

import { toastError } from '@/utils/toast-error'

export const useGenreCreate = () => {
	const { push } = useRouter()
	const { mutateAsync } = useMutation(
		['create genre'],
		(data: TGenreEditInput) => GenreService.create(data),
		{
			onError(error) {
				toastError(error, 'Этот жанр уже существует')
			},
			onSuccess() {
				toastr.success('Обновление жанра', 'Вы успешно изменили жанр')
				push(AdminGenresUrl.ROOT)
			},
		}
	)

	const onSubmit: SubmitHandler<TGenreEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit }
}
