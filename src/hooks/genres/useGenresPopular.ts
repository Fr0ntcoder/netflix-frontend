import { useQuery } from 'react-query'
import { GenresService } from 'service/genres/genres.service'

import { EnumContstantsUrl } from '@/shared/constants.enum'

export const useGenresPopular = () => {
	return useQuery(['genres popular'], () => GenresService.getPopular(), {
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
