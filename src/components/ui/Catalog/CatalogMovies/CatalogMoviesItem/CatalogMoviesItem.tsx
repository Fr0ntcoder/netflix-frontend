import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import Heading from '@/ui/Heading/Heading'

import { MovieUrl } from '@/shared/constants.enum'

import styles from './CatalogMoviesItem.module.scss'

type TCatalogMoviesItem = {
	movie: TMovie
}

const CatalogMoviesItem: FC<TCatalogMoviesItem> = ({ movie }) => {
	return (
		<Link href={`${MovieUrl.ROOT}/${movie.slug}`} className={styles.item}>
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
		</Link>
	)
}

export default CatalogMoviesItem
