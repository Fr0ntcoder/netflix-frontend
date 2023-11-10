import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import { FADE_IN } from '@/utils/animation/fade-in'

import styles from './SearchList.module.scss'

type TSearchList = {
	movies: TMovie[]
}
const SearchList: FC<TSearchList> = ({ movies }) => {
	const list = movies.map(item => (
		<div className={styles.item} key={item._id}>
			<Link href='/' className={styles.link}>
				<Image
					src={item.poster}
					width={50}
					height={60}
					draggable={false}
					alt={item.title}
				/>
				<span className={styles.content}>
					<h4 className={styles.title}>{item.title}</h4>
					<span className={styles.text}>
						Страна: {item.parameters?.country}
					</span>
					<span className={styles.text}>Год: {item.parameters?.year}</span>
				</span>
			</Link>
		</div>
	))
	return (
		<AnimatePresence>
			{movies.length ? (
				<motion.div {...FADE_IN} className={styles.list}>
					{list}
				</motion.div>
			) : (
				<motion.span {...FADE_IN} className={styles.empty}>
					Фильмы не найдены
				</motion.span>
			)}
		</AnimatePresence>
	)
}

export default SearchList
