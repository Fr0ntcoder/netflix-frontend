import { useQuery } from 'react-query'
import { GenreService } from 'service/genre/genre.service'

import { EnumContstantsUrl } from '@/shared/constants.enum'

export const useGenresPopular = () => {
	return useQuery(['genres popular'], () => GenreService.getPopular(), {
		select: ({ data }) =>
			data
				.filter((genre) => genre.icon)
				.map((item) => ({
					name: item.name,
					icon: item.icon,
					text: item.name,
					link: `${EnumContstantsUrl.GENRE}/${item.slug}`,
				}))
				.slice(0, 4),
	})
}
