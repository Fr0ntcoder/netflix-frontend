import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { MovieService } from 'service/movie/movie.service'
import { TMovieEditInput } from 'service/movie/movie.types'

import { AdminMoviesUrl } from '@/shared/constants.enum'

import { getKeys } from '@/utils/object/get-keys'
import { toastError } from '@/utils/toast-error'

export const useMovieEdit = (setValue: UseFormSetValue<TMovieEditInput>) => {
	const { query, push } = useRouter()

	const movieId = String(query.id)

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastError(error, 'Ошибка получения фильма')
			},
		}
	)

	const { mutateAsync } = useMutation(
		['update movie'],
		(data: TMovieEditInput) => MovieService.update(movieId, data),
		{
			onError(error) {
				toastError(error, 'Ошибка обновления')
			},
			onSuccess() {
				toastr.success('Обновление фильма', 'Вы успешно обновили фильм')
				push(AdminMoviesUrl.ROOT)
			},
		}
	)

	const onSubmit: SubmitHandler<TMovieEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
