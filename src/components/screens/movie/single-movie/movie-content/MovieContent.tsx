import Link from 'next/link'
import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import Heading from '@/components/ui/heading/Heading'
import Icon from '@/components/ui/icon/Icon'

import { EnumContstantsUrl } from '@/shared/constants.enum'

import styles from './MovieContent.module.scss'

type TMovieContent = {
	content: TMovie
}
const MovieContent: FC<TMovieContent> = ({ content }) => {
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
								<Link href={`${EnumContstantsUrl.GENRE}/${genre.slug}`} key={i}>
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
								<Link href={`${EnumContstantsUrl.ACTOR}/${actor.slug}`} key={i}>
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
				<div className={styles.rating}>
					<Icon name="MdOutlineStar" />
					{content.rating.toFixed(1)}
				</div>
			</div>
		</div>
	)
}

export default MovieContent
