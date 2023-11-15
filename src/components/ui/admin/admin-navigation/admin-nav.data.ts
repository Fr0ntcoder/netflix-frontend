import { TAdminNavItem } from '@/components/ui/admin/admin-navigation/admin.nav.types'

import { EnumContstantsAdminUrl } from '@/shared/constants.enum'

export const AdminDataNav: TAdminNavItem[] = [
	{
		id: 1,
		text: 'Статистика',
		link: EnumContstantsAdminUrl.ADMIN
	},
	{
		id: 2,
		text: 'Пользователи',
		link: EnumContstantsAdminUrl.USERS
	},
	{
		id: 3,
		text: 'Фильмы',
		link: EnumContstantsAdminUrl.MOVIES
	},
	{
		id: 4,
		text: 'Актеры',
		link: EnumContstantsAdminUrl.ACTORS
	},
	{
		id: 5,
		text: 'Жанры',
		link: EnumContstantsAdminUrl.GENRES
	}
]
