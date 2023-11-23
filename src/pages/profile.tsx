import Profile from '@/screens/Profile'

import { NextPageAuth } from '@/shared/types/auth'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isUser = true

export default ProfilePage
