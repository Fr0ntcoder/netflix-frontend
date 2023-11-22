import { FC } from 'react'

import FavoriteItem from '@/components/screens/favorites/favorite-item/FavoriteItem'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'
import NotFound from '@/components/ui/not-found/NotFound'

import { useAuth } from '@/hooks/auth/useAuth'
import { useFavorites } from '@/hooks/users/user/useFavorites'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const { user } = useAuth()
	const { data: movies } = useFavorites()
	const moviesList = movies?.map((movie) => (
		<FavoriteItem movie={movie} key={movie._id} />
	))

	if (!user) return null

	return (
		<Meta title="Избранное - фильмы">
			<Heading title="Избранное" variant="h5" className={styles.title} />
			{movies?.length === 0 ? (
				<NotFound text="Добавьте фильмы" />
			) : (
				<div className={styles.list}>{moviesList}</div>
			)}
		</Meta>
	)
}

export default Favorites
