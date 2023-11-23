import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { TGallery } from '@/ui/Gallery/gallery.types'

import styles from './GalleryItem.module.scss'

type TGalleryItem = {
	item: TGallery
}
const GalleryItem: FC<TGalleryItem> = ({ item }) => {
	return (
		<Link href={item.link} className={styles.item}>
			<Image
				src={item.poster}
				fill={true}
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
				}}
				priority={true}
				draggable={false}
				alt=""
			/>
			{item.content && (
				<span className={styles.content}>
					<h4 className={styles.name}>{item.content.title}</h4>
					<span className={styles.text}>{item.content.text}</span>
				</span>
			)}
		</Link>
	)
}

export default GalleryItem
