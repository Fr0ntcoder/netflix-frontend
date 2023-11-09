import { useQuery } from 'react-query'
import { genreService } from 'service/genre/genre.service'

import { EnumContstantsUrl } from '@/shared/constants.enum'

export const useGenreMenu = () => {
	return useQuery(['genre menu'], () => genreService.getAll(), {
		select: genre =>
			genre.data
				.map(item => {
					return {
						icon: item.icon,
						link: `${EnumContstantsUrl.GENRE}/${item.slug}`,
						text: item.name
					}
				})
				.slice(0, 4)
	})
}
