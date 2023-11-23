import ActorCreate from '@/screens/Admin/Actors/ActorCreate'

import { NextPageAuth } from '@/shared/types/auth'

const ActorCreatePage: NextPageAuth = () => {
	return <ActorCreate />
}
ActorCreatePage.isAdmin = true

export default ActorCreatePage
