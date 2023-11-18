import ActorCreate from '@/components/screens/admin/actors/actor-create/ActorCreate'

import { NextPageAuth } from '@/shared/types/auth.types'

const ActorCreatePage: NextPageAuth = () => {
	return <ActorCreate />
}
ActorCreatePage.isAdmin = true
export default ActorCreatePage
