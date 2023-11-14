import { TAdminNavItem } from '@/components/ui/admin/admin-navigation/admin.nav.types'

import { EnumContstantsUrl } from '@/shared/constants.enum'

export const AdminDataNav: TAdminNavItem[] = [
	{
		id: 1,
		text: 'Статистика',
		link: ''
	},
	{
		id: 2,
		text: 'Пользователи',
		link: EnumContstantsUrl.USERS
	},
	{
		id: 3,
		text: 'Фильмы',
		link: EnumContstantsUrl.MOVIES
	},
	{
		id: 4,
		text: 'Актеры',
		link: EnumContstantsUrl.ACTORS
	},
	{
		id: 5,
		text: 'Жанры',
		link: EnumContstantsUrl.GENRES
	}
]
