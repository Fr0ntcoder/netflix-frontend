import { useEffect } from 'react'
import { useMutation } from 'react-query'
import { MovieService } from 'service/movie/movie.service'

export const useOpenedCount = (slug: string) => {
	const { mutateAsync } = useMutation('update count movie', () =>
		MovieService.updateCountOpened(slug)
	)

	useEffect(() => {
		mutateAsync()
	}, [])
}
