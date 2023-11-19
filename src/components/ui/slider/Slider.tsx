import cn from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { TMovie } from 'service/movie/movie.types'

import Icon from '@/components/ui/icon/Icon'
import Slide from '@/components/ui/slider/slide/Slide'

import { useSlider } from '@/hooks/other/useSlider'

import { FADE_IN } from '@/utils/animation/fade-in'

import styles from './Slider.module.scss'

type TSlider = {
	slides: TMovie[]
}
const Slider: FC<TSlider> = ({ slides }) => {
	const { index, isNext, isPrev, slideIn, handleClick } = useSlider(
		slides.length
	)
	return (
		<div className={styles.slider}>
			{isPrev && (
				<button
					{...FADE_IN}
					className={cn(styles.btn, styles.prev)}
					onClick={() => handleClick('prev')}
				>
					<Icon name='MdArrowBackIos' />
				</button>
			)}
			{isNext && (
				<button
					{...FADE_IN}
					className={cn(styles.btn, styles.next)}
					onClick={() => handleClick('next')}
				>
					<Icon name='MdArrowForwardIos' />
				</button>
			)}
			<AnimatePresence>
				{slides.length && slideIn && <Slide item={slides[index]} />}
			</AnimatePresence>
		</div>
	)
}

export default Slider
