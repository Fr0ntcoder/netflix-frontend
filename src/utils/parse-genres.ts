import { TGenre } from 'service/genre/genre.types'

export const parseGenres = (genres: TGenre[]) => {
	const arr = genres?.map(item => item.name)
	return arr.join(',')
}
