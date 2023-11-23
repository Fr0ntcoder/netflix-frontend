import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'
import Icon from '@/components/ui/icon/Icon'
import Meta from '@/components/ui/meta/Meta'

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
