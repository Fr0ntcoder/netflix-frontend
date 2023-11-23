import ActorEdit from '@/screens/Admin/Actors/ActorEdit'

import { NextPageAuth } from '@/shared/types/auth'

const ActorEditPage: NextPageAuth = () => {
	return <ActorEdit />
}

ActorEditPage.isAdmin = true

export default ActorEditPage
