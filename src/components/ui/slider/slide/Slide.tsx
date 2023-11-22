import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import Heading from '@/components/ui/heading/Heading'

import { MovieUrl } from '@/shared/constants.enum'

import { FADE_IN } from '@/utils/animation/fade-in'
import { parseGenres } from '@/utils/parse-genres'

import styles from './Slide.module.scss'

type TSlide = {
	item: TMovie
}
const Slide: FC<TSlide> = ({ item }) => {
	return (
		<motion.div {...FADE_IN} className={styles.slide}>
			<Image
				src={item.bigPoster}
				fill={true}
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
				}}
				priority={true}
				draggable={false}
				alt={item.title}
			/>
			<div className={styles.content}>
				<Heading title={item.title} variant="h4" className={styles.title} />
				<span className={styles.genres}>{parseGenres(item.genres)}</span>
				<Link href={`${MovieUrl.ROOT}/${item.slug}`} className={styles.link}>
					Смотреть
				</Link>
			</div>
		</motion.div>
	)
}

export default Slide
