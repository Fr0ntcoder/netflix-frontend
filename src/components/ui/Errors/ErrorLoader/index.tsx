import { FC } from 'react'

import styles from './ErrorsLoader.module.scss'

const ErrorsLoader: FC = () => {
	return <div className={styles.errors}>Ошибка загрузки...</div>
}

export default ErrorsLoader
