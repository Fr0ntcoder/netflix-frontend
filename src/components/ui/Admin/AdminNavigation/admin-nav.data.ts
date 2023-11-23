import {
	AdminActorsUrl,
	AdminGenresUrl,
	AdminMoviesUrl,
	AdminUrl,
	AdminUsersUrl,
} from '@/shared/constants.enum'
import { TAdminNavItem } from '@/shared/types/admin.types'

export const AdminDataNav: TAdminNavItem[] = [
	{
		id: 1,
		text: 'Статистика',
		link: AdminUrl.ROOT,
	},
	{
		id: 2,
		text: 'Пользователи',
		link: AdminUsersUrl.ROOT,
	},
	{
		id: 3,
		text: 'Фильмы',
		link: AdminMoviesUrl.ROOT,
	},
	{
		id: 4,
		text: 'Актеры',
		link: AdminActorsUrl.ROOT,
	},
	{
		id: 5,
		text: 'Жанры',
		link: AdminGenresUrl.ROOT,
	},
]
