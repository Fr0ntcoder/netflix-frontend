import { GetStaticProps, NextPage } from 'next'
import { MovieService } from 'service/movie/movie.service'
import { TMovie } from 'service/movie/movie.types'

import CatalogMovies from '@/components/ui/catalog/catalog-movies/CatalogMovies'

const FreshPage: NextPage<{ movies: TMovie[] }> = ({ movies }) => {
	return (
		<CatalogMovies
			title="Последние фильмы"
			movies={movies}
			description="Текст"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		return {
			props: {
				movies,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
export default FreshPage
