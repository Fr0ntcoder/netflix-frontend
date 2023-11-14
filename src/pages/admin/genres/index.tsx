import Genres from '@/components/screens/admin/genres/Genres'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenresPage: NextPageAuth = () => {
	return <Genres />
}

GenresPage.isAdmin = true

export default GenresPage
