import { TMenuItem } from '@/components/layout/navigation/menu/menu-item/MenuItem'

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
