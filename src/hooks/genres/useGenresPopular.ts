import { useQuery } from 'react-query'
import { GenreService } from 'service/genre/genre.service'

import { GenreUrl } from '@/shared/constants.enum'

export const useGenresPopular = () => {
	return useQuery(['genres popular'], () => GenreService.getPopular(), {
		select: ({ data }) =>
			data
				.filter((genre) => genre.icon)
				.map((item) => ({
					name: item.name,
					icon: item.icon,
					text: item.name,
					link: `${GenreUrl.ROOT}/${item.slug}`,
				}))
				.slice(0, 4),
	})
}
