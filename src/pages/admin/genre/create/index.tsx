import GenreCreate from '@/screens/Admin/Genres/GenreCreate/GenreCreate'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenreCreatePage: NextPageAuth = () => {
	return <GenreCreate />
}
GenreCreatePage.isAdmin = true
export default GenreCreatePage
