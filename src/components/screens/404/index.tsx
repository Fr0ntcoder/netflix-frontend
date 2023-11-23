import { FC } from 'react'

import Heading from '@/ui/Heading'
import Icon from '@/ui/Icon'
import Meta from '@/ui/Meta'

import styles from './Error404.module.scss'

const Error404: FC = () => {
	return (
		<Meta title="Страница не найдена" description="">
			<div className={styles.wrap}>
				<Heading title="Страница не найдена" variant="h4" />
				<Icon name="MdMoodBad" />
			</div>
		</Meta>
	)
}

export default Error404
