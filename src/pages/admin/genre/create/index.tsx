import GenreCreate from '@/components/screens/admin/genres/genre-create/GenreCreate'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenreCreatePage: NextPageAuth = () => {
	return <GenreCreate />
}
GenreCreatePage.isAdmin = true
export default GenreCreatePage
