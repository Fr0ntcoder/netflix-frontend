import { GetStaticProps, NextPage } from 'next'
import { MovieService } from 'service/movie/movie.service'
import { TMovie } from 'service/movie/movie.types'

import CatalogMovies from '@/components/ui/catalog/catalog-movies/CatalogMovies'

const FreshPage: NextPage<{ movies: TMovie[] }> = ({ movies }) => {
	return <CatalogMovies title="Новые фильмы" movies={movies} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
export default FreshPage
