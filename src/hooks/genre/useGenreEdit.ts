import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { GenreService } from 'service/genre/genre.service'
import { TGenreEditInput } from 'service/genre/genre.types'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { getKeys } from '@/utils/object/get-keys'
import { toastError } from '@/utils/toast-error'

export const useGenreEdit = (setValue: UseFormSetValue<TGenreEditInput>) => {
	const { query, push } = useRouter()

	const genreId = String(query.id)

	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach(key => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastError(error, 'Get genre')
			}
		}
	)

	const { mutateAsync } = useMutation(
		['update genre'],
		(data: TGenreEditInput) => GenreService.update(genreId, data),
		{
			onError(error) {
				toastError(error, 'Ошибка обновления')
			},
			onSuccess() {
				toastr.success('Update genre', 'Вы успешно изменили жанр фильма')
				push(EnumContstantsAdminUrl.GENRES)
			}
		}
	)

	const onSubmit: SubmitHandler<TGenreEditInput> = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
