import Link from 'next/link'
import { FC } from 'react'

import FavoriteItem from '@/screens/Favorites/FavoriteItem/FavoriteItem'

import Meta from '@/ui/Meta/Meta'
import NotFound from '@/ui/NotFound/NotFound'
import Heading from '@/ui/heading/Heading'

import { useAuth } from '@/hooks/auth/useAuth'
import { useFavorites } from '@/hooks/users/user/useFavorites'

import { AuthUrl } from '@/shared/constants.enum'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const { user } = useAuth()
	const { data: movies } = useFavorites()
	const moviesList = movies?.map((movie) => (
		<FavoriteItem movie={movie} key={movie._id} />
	))

	return (
		<Meta title="Избранное - фильмы">
			<Heading title="Избранное" variant="h5" className={styles.title} />
			{!user ? (
				<Link href={AuthUrl.ROOT} className={styles.link}>
					Авторизоваться
				</Link>
			) : movies?.length === 0 ? (
				<NotFound text="Добавьте фильмы" />
			) : (
				<div className={styles.list}>{moviesList}</div>
			)}
		</Meta>
	)
}

export default Favorites
