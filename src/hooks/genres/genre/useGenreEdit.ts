import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { GenresService } from 'service/genres/genres.service'
import { TGenreEditInput } from 'service/genres/genres.types'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

import { getKeys } from '@/utils/object/get-keys'
import { toastError } from '@/utils/toast-error'

export const useGenreEdit = (setValue: UseFormSetValue<TGenreEditInput>) => {
	const { query, push } = useRouter()

	const genreId = String(query.id)

	const { isLoading } = useQuery(
		['genre get data', genreId],
		() => GenresService.getById(genreId),
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
		(data: TGenreEditInput) => GenresService.update(genreId, data),
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
