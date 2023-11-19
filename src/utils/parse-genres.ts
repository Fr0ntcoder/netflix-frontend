import { TGenre } from 'service/genres/genres.types'

export const parseGenres = (genres: TGenre[]) => {
	const arr = genres?.map(item => item.name)
	return arr.join(', ')
}
