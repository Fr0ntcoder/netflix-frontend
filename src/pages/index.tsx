import { GetStaticProps, NextPage } from 'next'
import { ActorService } from 'service/actor/actor.service'
import { MovieService } from 'service/movie/movie.service'
import { TMovie } from 'service/movie/movie.types'

import Home, { THome } from '@/screens/Home'

import { TGallery } from '@/ui/Gallery/gallery.types'

import { ActorUrl, MovieUrl } from '@/shared/constants.enum'

const HomePage: NextPage<THome> = (props) => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: moviesData } = await MovieService.getAll()
		const { data: moviesPopularData } = await MovieService.getMostPopular()
		const { data: actorsData } = await ActorService.getAll()
		const movies: TMovie[] = moviesData.slice(0, 4)
		const popularMovies: TGallery[] = moviesPopularData
			.slice(0, 6)
			.map((item) => ({
				_id: item._id,
				poster: item.poster,
				link: `${MovieUrl.ROOT}/${item.slug}`,
			}))
		const actors: TGallery[] = actorsData.slice(0, 6).map((item) => ({
			_id: item._id,
			poster: item.photo,
			link: `${ActorUrl.ROOT}/${item.slug}`,
			content: {
				title: item.name,
				text: `Просмотры - ${String(item.countMovies)}`,
			},
		}))

		return {
			props: {
				movies,
				popularMovies,
				actors,
			} as THome,
			revalidate: 60,
		}
	} catch (error) {
		return {
			props: {
				movies: [],
				popularMovies: [],
				actors: [],
			} as THome,
		}
	}
}

export default HomePage
