import { GetStaticProps, NextPage } from 'next'
import { MovieService } from 'service/movie/movie.service'
import { TMovie } from 'service/movie/movie.types'

import Home, { THome } from '@/components/screens/home/Home'

const HomePage: NextPage<THome> = props => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		const slides: TMovie[] = movies.slice(0, 4)

		return {
			props: {
				slides
			} as THome
		}
	} catch (error) {
		return {
			props: {
				slides: []
			} as THome
		}
	}
}
export default HomePage
