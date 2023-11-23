import Profile from '@/screens/Profile/Profile'

import { NextPageAuth } from '@/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isUser = true

export default ProfilePage
