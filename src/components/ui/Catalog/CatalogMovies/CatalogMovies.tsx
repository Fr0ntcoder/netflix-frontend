import { FC } from 'react'

import CatalogMoviesItem from '@/ui/Catalog/CatalogMovies/CatalogMoviesItem/CatalogMoviesItem'
import { TCatalogMovie } from '@/ui/Catalog/CatalogMovies/catalog-movies.types'
import Description from '@/ui/Description/Description'
import Meta from '@/ui/Meta/Meta'
import Heading from '@/ui/heading/Heading'

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
