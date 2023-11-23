import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

import Heading from '@/ui/Heading'
import AuthButton from '@/ui/VideoPlayer/AuthButton'

import { useAuth } from '@/hooks/auth/useAuth'
import { useRating } from '@/hooks/rating/useRating'

import { FADE_IN } from '@/utils/animation/fade-in'

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
				variant="h4"
				title="Вам нравится фильм?"
				className={styles.title}
			/>
			<p className={styles.text}>Рейтинг улучшает рекомендации</p>

			{user ? (
				<>
					{isSended ? (
						<AnimatePresence>
							<motion.div {...FADE_IN} className={styles.thanks}>
								Спасибо,что поставили оценку!
							</motion.div>
						</AnimatePresence>
					) : (
						<AnimatePresence>
							<motion.div {...FADE_IN}>
								<Rating onClick={handleClick} initialValue={rating} />
							</motion.div>
						</AnimatePresence>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default MovieRating
