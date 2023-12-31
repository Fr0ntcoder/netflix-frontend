import Actors from '@/screens/Admin/Actors'

import { NextPageAuth } from '@/shared/types/auth.types'

const ActorsPage: NextPageAuth = () => {
	return <Actors />
}

ActorsPage.isAdmin = true

export default ActorsPage
