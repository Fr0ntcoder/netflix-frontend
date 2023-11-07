import { TMenuItem } from '@/components/layout/Navigation/Menu-Item/MenuItem'

export const firstMenu: TMenuItem[] = [
	{
		icon: 'MdHome',
		link: '/',
		text: 'Главная'
	},
	{
		icon: 'MdExplore',
		link: '/genres',
		text: 'Жанры'
	},
	{
		icon: 'MdRefresh',
		link: '/fresh',
		text: 'Свежие фильмы'
	},
	{
		icon: 'MdLocalFireDepartment',
		link: '/trending',
		text: 'Актуальные сейчас'
	}
]
