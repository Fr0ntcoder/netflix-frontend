import cn from 'classnames'
import { FC } from 'react'

import GalleryItem from '@/ui/Gallery/GaleryItem'

import { IClass } from '@/shared/interface/classname.interface'
import { TGallery } from '@/shared/types/gallery.types'

import styles from './Gallery.module.scss'

type TGalleryProps = {
	items: TGallery[]
}
const Gallery: FC<TGalleryProps & IClass> = ({ items, className }) => {
	const list = items.map((item) => <GalleryItem item={item} key={item._id} />)
	return <div className={cn(styles.list, className)}>{list}</div>
}

export default Gallery
