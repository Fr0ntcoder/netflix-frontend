import { FC } from 'react'

import CatalogMoviesItem from '@/components/ui/catalog/catalog-movies/catalog-movies-item/CatalogMoviesItem'
import { TCatalogMovie } from '@/components/ui/catalog/catalog-movies/catalog-movies.types'
import Description from '@/components/ui/description/Description'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import styles from './CatalogMovies.module.scss'

const CatalogMovies: FC<TCatalogMovie> = ({ movies, title, description }) => {
	const moviesList = movies.map((movie) => (
		<CatalogMoviesItem movie={movie} key={movie._id} />
	))
	return (
		<Meta title={title}>
			<Heading title={title} variant="h5" className={styles.title} />
			{description && (
				<Description text={description} className={styles.description} />
			)}
			<div className={styles.list}>{moviesList}</div>
		</Meta>
	)
}

export default CatalogMovies
