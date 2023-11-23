import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { UserService } from 'service/user/user.service'

import Icon from '@/ui/Icon'

import { useFavorites } from '@/hooks/users/user/useFavorites'

import { IClass } from '@/shared/interface/classname.interface'

import { toastError } from '@/utils/toast-error'

import styles from './FavoriteButton.module.scss'

type TFavoriteButton = {
	movieId: string
} & IClass
const FavoriteButton: FC<TFavoriteButton> = ({ movieId, className }) => {
	const queryClient = useQueryClient()
	const [isActive, setIsActive] = useState(false)
	const { data: favoriteMovies } = useFavorites()

	useEffect(() => {
		if (!favoriteMovies) return

		const isExistMovie = favoriteMovies.some((movie) => movie._id === movieId)

		if (isActive !== isExistMovie) {
			setIsActive(isExistMovie)
		}
	}, [movieId, isActive, favoriteMovies])

	const { mutateAsync } = useMutation(
		['toggle favorite'],
		() => UserService.toggleFavorite(movieId),
		{
			onSuccess() {
				setIsActive(!isActive)
				toastr.success('Избранное', 'Вы добавили в избранное')
				queryClient.invalidateQueries('favorite movies')
			},
			onError(error) {
				toastError(error, 'Ошибка')
			},
		}
	)
	return (
		<div className={cn(styles.button, className)} onClick={() => mutateAsync()}>
			{isActive ? (
				<Icon name="MdOutlineFavorite" />
			) : (
				<Icon name="MdOutlineFavoriteBorder" />
			)}
		</div>
	)
}

export default FavoriteButton
