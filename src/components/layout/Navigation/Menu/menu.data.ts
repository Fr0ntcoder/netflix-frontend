import { TMenuItem } from '@/layout/Navigation/Menu/MenuItem/MenuItem'

export const firstMenu: TMenuItem[] = [
	{
		icon: 'MdHome',
		link: '/',
		name: 'Главная',
	},
	{
		icon: 'MdOutlineFavorite',
		link: '/favorites',
		name: 'Избранное',
	},
	{
		icon: 'MdRefresh',
		link: '/fresh',
		name: 'Новые фильмы',
	},
	{
		icon: 'MdLocalFireDepartment',
		link: '/trending',
		name: 'Актуальные сейчас',
	},
]
