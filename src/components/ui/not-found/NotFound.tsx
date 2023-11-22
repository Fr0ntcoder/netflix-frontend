import { FC } from 'react'

import styles from './NotFound.module.scss'

type TNotFound = {
	text: string
}

const NotFound: FC<TNotFound> = ({ text }) => {
	return <div className={styles.empty}>{text}</div>
}

export default NotFound
