import { useRouter } from 'next/router'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { MovieService } from 'service/movie/movie.service'
import { TMovieEditInput } from 'service/movie/movie.types'

import { AdminMoviesUrl } from '@/shared/constants.enum'

import { toastError } from '@/utils/toast-error'

export const useMovieCreate = () => {
	const { push } = useRouter()
	const { mutateAsync } = useMutation(
		['create movie'],
		(data: TMovieEditInput) => MovieService.create(data),
		{
			onError(error) {
				toastError(error, 'Этот фильм уже существует')
			},
			onSuccess() {
				toastr.success('Создание фильма', 'Вы успешно создали фильм')
				push(AdminMoviesUrl.ROOT)
			},
		}
	)

	const onSubmit: SubmitHandler<TMovieEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit }
}
