import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { GenresService } from 'service/genres/genres.service'
import { TGenre } from 'service/genres/genres.types'
import { MovieService } from 'service/movie/movie.service'
import { TMovie } from 'service/movie/movie.types'

import CatalogMovies from '@/components/ui/catalog/catalog-movies/CatalogMovies'

type TGenrePage = {
	movies: TMovie[]
	genre: TGenre
}
const GenrePage: FC<TGenrePage> = ({ genre, movies }) => {
	return (
		<CatalogMovies
			title={genre.name}
			movies={movies}
			description={genre.description}
		/>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenresService.getAll()
		const paths = genres.map((g) => ({
			params: { slug: g.slug },
		}))
		return {
			paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenresService.getBySlug(String(params?.slug))
		const { data: movies } = await MovieService.getByGenres([genre._id])
		return {
			props: {
				genre,
				movies,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
export default GenrePage
