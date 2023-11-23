import cn from 'classnames'
import parse from 'html-react-parser'
import { FC } from 'react'

import { IClass } from '@/shared/interface/classname.interface'

import styles from './Description.module.scss'

type TDescription = {
	text: string
} & IClass

const Description: FC<TDescription> = ({ text, className }) => {
	return <div className={cn(styles.text, className)}>{parse(text)}</div>
}

export default Description
