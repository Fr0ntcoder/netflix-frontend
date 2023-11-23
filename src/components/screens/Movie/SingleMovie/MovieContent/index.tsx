import Link from 'next/link'
import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import FavoriteButton from '@/ui/Buttons/FavoriteButton'
import Heading from '@/ui/Heading'
import Icon from '@/ui/Icon'

import { useAuth } from '@/hooks/auth/useAuth'

import { ActorUrl, GenreUrl } from '@/shared/constants.enum'

import styles from './MovieContent.module.scss'

type TMovieContent = {
	content: TMovie
}
const MovieContent: FC<TMovieContent> = ({ content }) => {
	const { user } = useAuth()
	return (
		<div className={styles.content}>
			<div className={styles.left}>
				<Heading title={content.title} variant="h2" className={styles.title} />
				<div className={styles.info}>
					<span>{content.parameters?.year}</span>
					<span>{content.parameters?.country}</span>
					<span>{content.parameters?.duration} мин.</span>
				</div>
				<div className={styles.bottom}>
					<div className={styles.block}>
						<span className={styles.name}>Жанры: </span>
						<span className={styles.text}>
							{content.genres.map((genre, i) => (
								<Link href={`${GenreUrl.ROOT}/${genre.slug}`} key={i}>
									{i !== content.genres.length - 1
										? `${genre.name}, `
										: genre.name}
								</Link>
							))}
						</span>
					</div>
					<div className={styles.block}>
						<span className={styles.name}>Актёры: </span>
						<span className={styles.text}>
							{content.actors.map((actor, i) => (
								<Link href={`${ActorUrl.ROOT}/${actor.slug}`} key={i}>
									{i !== content.actors.length - 1 && content.actors.length > 1
										? `${actor.name},`
										: actor.name}
								</Link>
							))}
						</span>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				{user && <FavoriteButton movieId={content._id} />}
				<div className={styles.rating}>
					<Icon name="MdOutlineStar" />
					{content.rating.toFixed(1)}
				</div>
			</div>
		</div>
	)
}

export default MovieContent
