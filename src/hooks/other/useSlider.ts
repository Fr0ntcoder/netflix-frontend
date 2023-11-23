import { useState } from 'react'

export const useSlider = (length: number) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [slideIn, setSlideIn] = useState(true)

	const isExistsNext = currentIndex + 1 < length
	const isExistsPrev = currentIndex ? currentIndex - 1 < length : false

	const handleClick = (handle: 'prev' | 'next') => {
		setSlideIn(false)

		setTimeout(() => {
			handle === 'prev'
				? setCurrentIndex(prev => prev - 1)
				: setCurrentIndex(prev => prev + 1)
			setSlideIn(true)
		}, 300)
	}

	return {
		slideIn,
		index: currentIndex,
		isPrev: isExistsPrev,
		isNext: isExistsNext,
		handleClick
	}
}
