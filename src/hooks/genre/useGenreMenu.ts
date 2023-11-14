import { useQuery } from 'react-query'
import { genreService } from 'service/genre/genre.service'

import { EnumContstantsUrl } from '@/shared/constants.enum'

export const useGenre = () => {
	const querydata = useQuery(['genre menu'], () => genreService.getAll(), {
		select: genre =>
			genre.data
				.map(item => {
					return {
						icon: item.icon,
						link: `${EnumContstantsUrl.GENRES}/${item.slug}`,
						text: item.name
					}
				})
				.slice(0, 4)
	})

	return { ...querydata }
}
