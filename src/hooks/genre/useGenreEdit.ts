import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { GenreService } from 'service/genre/genre.service'
import { TGenreEditInput } from 'service/genre/genre.types'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { getKeys } from '@/utils/object/get-keys'

import { toastError } from './../../utils/toast-error'

export const useGenreEdit = (setValue: UseFormSetValue<TGenreEditInput>) => {
	const { push, query } = useRouter()
	const genreId = String(query.id)

	const { isLoading } = useQuery(
		['genre edit', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach(key => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastError(error, 'Ошибка получение жанра')
			},
			enabled: !!query.id
		}
	)

	const { mutateAsync } = useMutation(
		['genre update'],
		(data: TGenreEditInput) => GenreService.update(genreId, data),
		{
			onError(error) {
				toastError(error, 'Обновите жанр')
			},
			onSuccess(error) {
				toastError(error, 'Вы обновили жанр')
				push(EnumContstantsAdminUrl.GENRES)
			}
		}
	)

	const onSubmit: SubmitHandler<TGenreEditInput> = async data => {
		await mutateAsync(data)
	}

	return {
		onSubmit,
		isLoading
	}
}
