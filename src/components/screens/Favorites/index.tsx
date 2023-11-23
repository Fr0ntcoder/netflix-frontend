import dynamic from 'next/dynamic'
import { FC } from 'react'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'

import styles from './Favorites.module.scss'

const DynamicFavoriteContent = dynamic(() => import('./FavoriteContent'), {
	ssr: false,
})
const Favorites: FC = () => {
	return (
		<Meta title="Избранное - фильмы">
			<Heading title="Избранное" variant="h5" className={styles.title} />
			<DynamicFavoriteContent />
		</Meta>
	)
}

export default Favorites
