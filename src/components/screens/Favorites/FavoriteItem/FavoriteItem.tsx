import Image from 'next/image'
import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import FavoriteButton from '@/ui/Buttons/FavoriteButton/FavoriteButton'
import Heading from '@/ui/heading/Heading'

import { useAuth } from '@/hooks/auth/useAuth'

import styles from './FavoriteItem.module.scss'

type TFavoriteItem = {
	movie: TMovie
}
const FavoriteItem: FC<TFavoriteItem> = ({ movie }) => {
	const { user } = useAuth()
	return (
		<div className={styles.item}>
			{user && <FavoriteButton movieId={movie._id} className={styles.btn} />}
			<Image
				src={movie.poster}
				fill={true}
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
				}}
				priority={true}
				draggable={false}
				alt=""
			/>
			<Heading title={movie.title} variant="h6" className={styles.title} />
		</div>
	)
}

export default FavoriteItem
