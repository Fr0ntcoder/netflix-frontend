export type TActor = {
	_id: string
	name: string
	slug: string
	photo: string
	createdAt: string
	updatedAt: string
	countMovies: number
}

export type TActorEditInput = Pick<TActor, 'name' | 'slug' | 'photo'>
