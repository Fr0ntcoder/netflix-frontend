import { TActor } from 'service/actor/actor.types'
import { TGenre } from 'service/genre/genre.types'

type TMovieParameters = {
	year: number
	duration: number
	country: string
}

export type TMovie = {
	_id: string
	poster: string
	rating: number
	slug: string
	countOpened: number
	bigPoster: string
	title: string
	parameters?: TMovieParameters
	videoUrl: string
	genres: TGenre[]
	actors: TActor[]
	isSendTelegram?: boolean
}

export type TMovieEditInput = Omit<TMovie, '_id' | 'isSendTelegram' | 'rating'>
