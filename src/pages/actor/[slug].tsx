import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { ActorService } from 'service/actor/actor.service'
import { TActor } from 'service/actor/actor.types'
import { MovieService } from 'service/movie/movie.service'
import { TMovie } from 'service/movie/movie.types'

import CatalogMovies from '@/components/ui/catalog/catalog-movies/CatalogMovies'

type TActorPage = {
	movies: TMovie[]
	actor: TActor
}
const ActorPage: FC<TActorPage> = ({ actor, movies }) => {
	return <CatalogMovies title={actor.name} movies={movies} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll()
		const paths = actors.map((g) => ({
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
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))
		const { data: movies } = await MovieService.getByActor(actor._id)
		return {
			props: {
				actor,
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
export default ActorPage
