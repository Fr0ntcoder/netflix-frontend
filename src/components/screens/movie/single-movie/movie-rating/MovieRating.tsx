import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

import Heading from '@/components/ui/heading/Heading'
import AuthButton from '@/components/ui/video-player/auth-button/AuthButton'

import { useAuth } from '@/hooks/auth/useAuth'
import { useRating } from '@/hooks/rating/useRating'

import styles from './MovieRating.module.scss'

type TMovieRating = {
	movieId: string
	slug: string
}
const MovieRating: FC<TMovieRating> = ({ movieId, slug }) => {
	const { user } = useAuth()
	const { rating, isSended, handleClick } = useRating(movieId)
	return (
		<div className={styles.rating}>
			<Heading
				variant="h5"
				title="Вам нравится фильм?"
				className={styles.title}
			/>
			<p className={styles.text}>Рейтинг улучшает рекомендации</p>

			{user ? (
				<>
					{isSended ? (
						<div className={styles.tanks}>Спасибо,что поставили оценку!</div>
					) : (
						<Rating onClick={handleClick} initialValue={rating} />
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default MovieRating
