import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon/MaterialIcon'
import Meta from '@/ui/Meta/Meta'
import Heading from '@/ui/heading/Heading'

import styles from './Error404.module.scss'

const Error404: FC = () => {
	return (
		<Meta title="Страница не найдена" description="">
			<div className={styles.wrap}>
				<Heading title="Страница не найдена" variant="h4" />
				<MaterialIcon name="MdMoodBad" />
			</div>
		</Meta>
	)
}

export default Error404
