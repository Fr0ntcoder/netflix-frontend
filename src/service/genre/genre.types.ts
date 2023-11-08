import { TypeMaterialIcon } from '@/shared/icons/icon.type'

export type TGenre = {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIcon
	createdAt: string
}

export type TGenreMenu = Omit<TGenre, '_id' | 'createdAt'>
