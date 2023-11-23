import GenreCreate from '@/screens/Admin/Genres/GenreCreate'

import { NextPageAuth } from '@/shared/types/auth'

const GenreCreatePage: NextPageAuth = () => {
	return <GenreCreate />
}
GenreCreatePage.isAdmin = true
export default GenreCreatePage
