import Link from 'next/link'
import { FC } from 'react'

import FavoriteItem from '@/screens/Favorites/FavoriteItem'

import NotFound from '@/ui/NotFound'

import { useAuth } from '@/hooks/auth/useAuth'
import { useFavorites } from '@/hooks/users/user/useFavorites'

import { AuthUrl } from '@/shared/constants.enum'

import styles from './FavoriteContent.module.scss'

const FavoriteContent: FC = () => {
	const { user } = useAuth()
	const { data: movies } = useFavorites()
	const moviesList = movies?.map((movie) => (
		<FavoriteItem movie={movie} key={movie._id} />
	))
	return (
		<div className={styles.content}>
			{!user ? (
				<Link href={AuthUrl.ROOT} className={styles.link}>
					Авторизоваться
				</Link>
			) : movies?.length === 0 ? (
				<NotFound text="Добавьте фильмы" />
			) : (
				<div className={styles.list}>{moviesList}</div>
			)}
		</div>
	)
}

export default FavoriteContent
