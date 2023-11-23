import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { MovieService } from 'service/movie/movie.service'
import { TMovie } from 'service/movie/movie.types'

import Error404 from '@/screens/404'
import SingleMovie from '@/screens/Movie/SingleMovie'

import { TGallery } from '@/ui/Gallery/gallery.types'

import { MovieUrl } from '@/shared/constants.enum'

export type TMoviePage = {
	movie: TMovie
	similarMovies: TGallery[]
}
const MoviePage: FC<TMoviePage> = ({ movie, similarMovies }) => {
	return movie ? (
		<SingleMovie movie={movie} similarMovies={similarMovies} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const paths = movies.map((g) => ({
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
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))
		const { data: dataMovies } = await MovieService.getByGenres(
			movie.genres.map((item) => item._id)
		)
		const similarMovies: TGallery[] = dataMovies
			.filter((item) => item._id !== movie._id)
			.map((item) => ({
				_id: item._id,
				poster: item.poster,
				link: `${MovieUrl.ROOT}/${item.slug}`,
			}))
			.slice(0, 6)

		return {
			props: {
				movie,
				similarMovies,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
export default MoviePage
