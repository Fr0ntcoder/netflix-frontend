import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { RatingService } from 'service/rating/rating.service'

import { useAuth } from '@/hooks/auth/useAuth'

import { toastError } from '@/utils/toast-error'

export const useRating = (movieId: string) => {
	const { user } = useAuth()
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)
	const queryClient = useQueryClient()
	const { isLoading } = useQuery(
		['movie rating', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onSuccess({ data }) {
				setRating(data)
			},
			onError(error) {
				toastError(error, 'Получение рейтинга')
			},
			enabled: !!movieId && !!user,
		}
	)

	const { mutateAsync } = useMutation(
		'set rating',
		({ value }: { value: number }) => RatingService.setRating(movieId, value),
		{
			onError(error) {
				toastError(error, 'Рейтинг фильма')
			},
			onSuccess() {
				toastr.success('Обновление', 'Вы успешно обновили рейтинг!')
				setIsSended(true)
				queryClient.invalidateQueries('movie rating')

				setTimeout(() => {
					setIsSended(false)
				}, 2500)
			},
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await mutateAsync({ value: nextValue })
	}

	return { isSended, rating, handleClick }
}
