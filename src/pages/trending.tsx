import { GetStaticProps, NextPage } from 'next'
import { MovieService } from 'service/movie/movie.service'
import { TMovie } from 'service/movie/movie.types'

import CatalogMovies from '@/ui/Catalog/CatalogMovies/CatalogMovies'

const TrendingPage: NextPage<{ movies: TMovie[] }> = ({ movies }) => {
	return <CatalogMovies title="Актуальные сейчас" movies={movies} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getMostPopular()

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
export default TrendingPage
